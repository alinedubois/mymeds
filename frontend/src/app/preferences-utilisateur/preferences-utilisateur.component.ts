import {Component, OnInit} from '@angular/core';
import {Preferences, PreferencesService} from "../services/preferences.service";
import {AuthService, User} from "@auth0/auth0-angular";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-preferences-utilisateur',
  templateUrl: './preferences-utilisateur.component.html',
  styleUrls: ['./preferences-utilisateur.component.css'],
})
export class PreferencesUtilisateurComponent implements OnInit{
  selectedOption = 'option';
  panelOpenState = false;
  user: User | null | undefined;
  preferences: Preferences | null | undefined;

  constructor(public auth: AuthService, private preferencesService: PreferencesService) {
  }

  ngOnInit(): void {
    this.auth.user$.pipe(
      switchMap(user => {
        this.user = user;
        return this.preferencesService.preferences(user?.email!!);
      })).subscribe(preferences => this.preferences = preferences)
  }
}

