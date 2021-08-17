import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FicheMedicamentComponent} from './fiche-medicament/fiche-medicament.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {AuthModule} from "@auth0/auth0-angular";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {AppBarComponent} from './app-bar/app-bar.component';
import {CompteUtilisateurComponent} from './app-bar/compte-utilisateur/compte-utilisateur.component';
import {AjoutMedicamentComponent} from './app-bar/ajout-medicament/ajout-medicament.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {PharmacieComponent} from './pharmacie/pharmacie.component';

@NgModule({
  declarations: [
    AppComponent,
    FicheMedicamentComponent,
    AppBarComponent,
    CompteUtilisateurComponent,
    AjoutMedicamentComponent,
    PharmacieComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: 'mymeds.eu.auth0.com',
      clientId: 'ABQP9e89Grt7BXzWkaYCYqvb4oRfsec2'
    }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
