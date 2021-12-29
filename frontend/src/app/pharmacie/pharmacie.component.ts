import {Component, OnInit} from '@angular/core';
import {BoiteDeMedicament, PharmacieService} from "./pharmacie.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {AjoutBoiteDeMedicamentDialogComponent} from "./ajout-boite-de-medicament-dialog/ajout-boite-de-medicament-dialog.component";

@Component({
  selector: 'pharmacie',
  templateUrl: './pharmacie.component.html',
  styleUrls: ['./pharmacie.component.css']
})
export class PharmacieComponent implements OnInit {
  boitesDeMedicaments: BoiteDeMedicament[] = [];
  recherche = '';

  constructor(
    private pharmacieService: PharmacieService,
    private _snackBar: MatSnackBar,
    private dialog : MatDialog
  ) {

  }

  ngOnInit(): void {
    this.pharmacieService.pharmacie('juillet.aline@gmail.com')
      .subscribe(pharmacie => this.boitesDeMedicaments = pharmacie.boitesDeMedicaments);
  }

  supprimerUneBoiteDeMedicament(boiteDeMedicamentId: number) {
    this.pharmacieService.supprimerUneBoiteDeMedicament(boiteDeMedicamentId, 'juillet.aline@gmail.com')
      .subscribe(() => {
        this._snackBar.open('Suppression effectuée avec succès !', undefined, {
          duration: 5000,
          verticalPosition: "bottom",
          horizontalPosition: "end",
          panelClass: ['snack-bar-success']
        });
        this.boitesDeMedicaments = this.boitesDeMedicaments.filter(boiteDeMedicament => boiteDeMedicament.id !== boiteDeMedicamentId);
      });
  }

  ajouterUneBoiteDeMedicament() {
    let dialogRef = this.dialog.open(AjoutBoiteDeMedicamentDialogComponent, {

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
