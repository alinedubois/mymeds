import {Component, Inject, OnInit} from '@angular/core';
import {Medicament} from "./fiche-medicament/fiche-medicament.component";
import {ReferentielMedicamentsService} from "./referentiel-medicaments.service";
import {AuthService} from "@auth0/auth0-angular";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  medicaments: Array<Medicament> = [];
  valeur="coucou";

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private referentiel: ReferentielMedicamentsService) {
    this.referentiel.medicaments().subscribe(medicamentsResponse=>this.medicaments=medicamentsResponse);
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(authenticated => {
      if (!authenticated) {
        this.auth.loginWithRedirect();
      }
    });
  }
}
