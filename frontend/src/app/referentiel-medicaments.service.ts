import { Injectable } from '@angular/core';
import {Medicament} from "./fiche-medicament/fiche-medicament.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReferentielMedicamentsService {

  constructor(private httpClient:HttpClient) { }

  medicaments(): Observable<Array<Medicament>> {
    return this.httpClient.get<Array<Medicament>>('http://mymeds-backend.herokuapp.com/api/referentiel/medicaments?nom=dol');
  }
}
