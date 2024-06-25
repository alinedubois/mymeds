import {Component, OnInit} from '@angular/core';
import {BoiteDeMedicament, PharmacieService} from "../services/pharmacie.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {AjoutBoiteDeMedicamentDialogComponent} from "./ajout-boite-de-medicament-dialog/ajout-boite-de-medicament-dialog.component";
import {AuthService, User} from "@auth0/auth0-angular";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'pharmacie',
  templateUrl: './pharmacie.component.html',
  styleUrls: ['./pharmacie.component.css']
})
export class PharmacieComponent implements OnInit {
  boitesDeMedicaments: BoiteDeMedicament[] = [];
  recherche = '';
  user: User | null | undefined;

  constructor(
    private pharmacieService: PharmacieService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    public auth: AuthService
  ) {

  }

  ngOnInit(): void {
    this.auth.user$.pipe(
      switchMap(user => {
          this.user = user;
          return this.pharmacieService.pharmacie(user?.email!!);
      })).subscribe(pharmacie => this.boitesDeMedicaments = pharmacie.boitesDeMedicaments);
  }

  supprimerUneBoiteDeMedicament(boiteDeMedicamentId: number) {
    this.auth.user$.pipe(
      switchMap(user =>
        this.pharmacieService.supprimerUneBoiteDeMedicament(boiteDeMedicamentId, user?.email!!))
    ).subscribe(() => {
      this._snackBar.open('Suppression effectuée avec succès !', undefined, {
        duration: 5000,
        verticalPosition: "bottom",
        horizontalPosition: "end",
        panelClass: ['snack-bar-success']
      });
      this.boitesDeMedicaments = this.boitesDeMedicaments.filter(boiteDeMedicament => boiteDeMedicament.id !== boiteDeMedicamentId);
    });
  }

  ajouterUneBoiteDeMedicament(medicament?: BoiteDeMedicament) {
    let dialogRef = this.dialog.open(AjoutBoiteDeMedicamentDialogComponent, {
      data: medicament ? {
        identifiantDuMedicament: medicament.medicamentId,
        nomDuMedicament: medicament.nom
      } : {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pharmacieService.ajouterUneBoiteDeMedicament(result.identifiantDuMedicament, result.dateDePeremption, this.user?.email!!).pipe(
        switchMap(user => this.pharmacieService.pharmacie(this.user?.email!!)))
        .subscribe(pharmacie => {
          this._snackBar.open('Ajout effectué avec succès !', undefined, {
            duration: 5000,
            verticalPosition: "bottom",
            horizontalPosition: "end",
            panelClass: ['snack-bar-success']
          });
          this.boitesDeMedicaments = pharmacie.boitesDeMedicaments;
        });
    });
  }
}
