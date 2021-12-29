import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-ajout-boite-de-medicament.dialog',
  templateUrl: './ajout-boite-de-medicament-dialog.component.html',
  styleUrls: ['./ajout-boite-de-medicament-dialog.component.css']
})
export class AjoutBoiteDeMedicamentDialogComponent implements OnInit {

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
}
