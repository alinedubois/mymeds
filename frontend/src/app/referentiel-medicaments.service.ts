import {Injectable} from '@angular/core';
import {Medicament} from "./fiche-medicament/fiche-medicament.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReferentielMedicamentsService {

  constructor(private httpClient:HttpClient) { }

  medicaments(nom: string): Observable<Array<Medicament>> {
    return this.httpClient.get<Array<Medicament>>(`/api/referentiel/medicaments?nom=${nom}`);
  }
}
