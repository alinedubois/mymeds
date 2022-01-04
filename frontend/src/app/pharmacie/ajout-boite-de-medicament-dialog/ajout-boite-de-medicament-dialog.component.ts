import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";
import * as moment from 'moment';
import {Moment} from 'moment';
import {MatDatepicker} from "@angular/material/datepicker";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from "@angular/material-moment-adapter";

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
  dateDePeremption = new FormControl(moment());

  constructor(
    public dialogRef: MatDialogRef<AjoutBoiteDeMedicamentDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close(false);
  }

  onAdd() {
    this.dialogRef.close(true);
  }

  anneeChoisie(annee: Moment) {
    const ctrlValue = this.dateDePeremption.value;
    ctrlValue.year(annee.year());
    this.dateDePeremption.setValue(ctrlValue);
  }

  moisChoisi(mois: Moment, datePicker: MatDatepicker<Moment>) {
    const ctrlValue = this.dateDePeremption.value;
    ctrlValue.month(mois.month());
    this.dateDePeremption.setValue(ctrlValue);
    datePicker.close();
  }
}
