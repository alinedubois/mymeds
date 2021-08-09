import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FicheMedicamentComponent } from './fiche-medicament/fiche-medicament.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {AuthModule} from "@auth0/auth0-angular";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    FicheMedicamentComponent,
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
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
