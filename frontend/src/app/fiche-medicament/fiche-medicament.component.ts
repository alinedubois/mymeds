import {Component, Input, OnInit} from '@angular/core';

export interface Medicament {
  nom: string;
  administration: string;
  surveillanceRenforcee: boolean;
  forme: string;
}

@Component({
  selector: 'fiche-medicament',
  templateUrl: './fiche-medicament.component.html',
  styleUrls: ['./fiche-medicament.component.css']
})
export class FicheMedicamentComponent {
  @Input() medicament: Medicament | undefined;
}
