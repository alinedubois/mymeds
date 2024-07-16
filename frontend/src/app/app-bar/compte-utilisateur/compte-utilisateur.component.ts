import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {AuthService} from "@auth0/auth0-angular";
import {ReferentielMedicamentsService} from "../../services/referentiel-medicaments.service";
import {Router} from "@angular/router";

@Component({
  selector: 'compte-utilisateur',
  templateUrl: './compte-utilisateur.component.html',
  styleUrls: ['./compte-utilisateur.component.css']
})
export class CompteUtilisateurComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private referentiel: ReferentielMedicamentsService, private router: Router) {
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(authenticated => {
      if (!authenticated) {
        this.auth.loginWithRedirect();
      }
    });
  }

  navigateToPreferences() {
    this.router.navigate(['/preferences']);
  }

}
