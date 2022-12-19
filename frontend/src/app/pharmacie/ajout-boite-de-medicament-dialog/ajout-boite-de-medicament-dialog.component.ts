import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";
import * as moment from 'moment';
import {Moment} from 'moment';
import {MatDatepicker} from "@angular/material/datepicker";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from "@angular/material-moment-adapter";
import {debounceTime, distinctUntilChanged, filter, finalize, switchMap, tap} from "rxjs/operators";
import {ReferentielMedicamentsService} from "../../referentiel-medicaments.service";
import {Medicament} from "../../fiche-medicament/fiche-medicament.component";

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-ajout-boite-de-medicament.dialog',
  templateUrl: './ajout-boite-de-medicament-dialog.component.html',
  styleUrls: ['./ajout-boite-de-medicament-dialog.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class AjoutBoiteDeMedicamentDialogComponent implements OnInit {
  medicament = new FormControl('');
  medicamentSelectionne: string | undefined;
  enCoursDeRechercheDeMedicament = false;
  dateDePeremption = new FormControl(moment());
  medicamentsRecherche: Array<Medicament> = [];

  constructor(
    public dialogRef: MatDialogRef<AjoutBoiteDeMedicamentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {identifiantDuMedicament: string, nomDuMedicament: string},
    private referentielMedicaments: ReferentielMedicamentsService
  ) { }

  ngOnInit(): void {
    this.medicament.valueChanges
      .pipe(
        filter((valeurDuChamp: any) => valeurDuChamp && valeurDuChamp.length >= 3),
        distinctUntilChanged(),
        debounceTime(400),
        tap(() => {
          this.medicamentsRecherche = [];
          this.enCoursDeRechercheDeMedicament = true;
        }),
        switchMap(value => this.referentielMedicaments.medicaments(value)
          .pipe(
            finalize(() => this.enCoursDeRechercheDeMedicament = false),
          )
        )
      )
      .subscribe((data: any) => this.medicamentsRecherche = data);
  }

  onClose() {
    this.dialogRef.close(undefined);
  }

  onAdd() {
    this.dialogRef.close({
      identifiantDuMedicament: this.medicamentSelectionne ? this.medicamentSelectionne : this.data.identifiantDuMedicament,
      dateDePeremption : this.dateDePeremption.value
    });
  }

  anneeChoisie(annee: Moment) {
    const ctrlValue = this.dateDePeremption.value;
    ctrlValue?.year(annee.year());
    this.dateDePeremption.setValue(ctrlValue);
  }

  moisChoisi(mois: Moment, datePicker: MatDatepicker<Moment>) {
    const ctrlValue = this.dateDePeremption.value;
    ctrlValue?.month(mois.month());
    this.dateDePeremption.setValue(ctrlValue);
    datePicker.close();
  }

  clearSelection() {
    this.medicamentSelectionne = '';
    this.medicament.setValue('');
  }

  onSelected(event: any) {
    this.medicament.setValue(event.option.viewValue);
    this.medicamentSelectionne = event.option.value;
  }
}
