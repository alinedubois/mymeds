import {Component} from '@angular/core';
import {Medicament} from "./fiche-medicament/fiche-medicament.component";
import {ReferentielMedicamentsService} from "./referentiel-medicaments.service";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  medicaments: Array<Medicament> = [];
  valeur="coucou";

  constructor(public auth: AuthService, private referentiel: ReferentielMedicamentsService) {
    this.referentiel.medicaments().subscribe(medicamentsResponse=>this.medicaments=medicamentsResponse);
  }
}
