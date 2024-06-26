import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FicheMedicamentComponent} from './fiche-medicament/fiche-medicament.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {AppBarComponent} from './app-bar/app-bar.component';
import {CompteUtilisateurComponent} from './app-bar/compte-utilisateur/compte-utilisateur.component';
import {AjoutMedicamentComponent} from './app-bar/ajout-medicament/ajout-medicament.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {PharmacieComponent} from './pharmacie/pharmacie.component';
import {MatCardModule} from "@angular/material/card";
import {DelaiDePeremptionPipe} from './pharmacie/delai-de-peremption.pipe';
import {DatePipe} from "@angular/common";
import {FilterPipe} from "./filter.pipe";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AjoutBoiteDeMedicamentDialogComponent} from './pharmacie/ajout-boite-de-medicament-dialog/ajout-boite-de-medicament-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {environment} from "../environments/environment";
import {AuthModule} from "@auth0/auth0-angular";
import {AuthHttpInterceptor} from "./auth-http-interceptor";
import { PreferencesUtilisateurComponent } from './preferences-utilisateur/preferences-utilisateur.component';
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from "@angular-material-components/datetime-picker";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    FicheMedicamentComponent,
    AppBarComponent,
    CompteUtilisateurComponent,
    AjoutMedicamentComponent,
    PharmacieComponent,
    DelaiDePeremptionPipe,
    FilterPipe,
    AjoutBoiteDeMedicamentDialogComponent,
    PreferencesUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: 'mymeds.eu.auth0.com',
      clientId: environment.auth0Client,
      redirectUri: window.location.origin,
      httpInterceptor: {
        allowedList: [
          '/api/*',
          'https://mymeds.ddns.net/api/*',
        ],
      },
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
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    MatListModule,
    MatSlideToggleModule,
    NgxMaterialTimepickerModule.setOpts('fr-FR', 'arab'),
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatExpansionModule
  ],
  providers: [
    DatePipe,
    {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
