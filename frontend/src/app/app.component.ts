import {Component} from '@angular/core';
import {Medicament} from "./fiche-medicament/fiche-medicament.component";
import {ReferentielMedicamentsService} from "./referentiel-medicaments.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  medicaments: Array<Medicament> = [];

  constructor(private referentiel: ReferentielMedicamentsService) {
    this.referentiel.medicaments("dol").subscribe(medicamentsResponse=>this.medicaments=medicamentsResponse);
  }

}
