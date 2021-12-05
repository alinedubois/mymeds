import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Pharmacie {
  boitesDeMedicaments: Array<BoiteDeMedicament>
}

export interface BoiteDeMedicament {
  id: string;
  nom: string;
  dateDePeremption: string;
}


const BACKEND_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class PharmacieService {

  constructor(private httpClient: HttpClient) {
  }

  pharmacie(identifiantUtilisateur: string): Observable<Pharmacie> {
    return this.httpClient.get<Pharmacie>(BACKEND_URL + '/api/v2/pharmacies/' + identifiantUtilisateur);
  }
}
