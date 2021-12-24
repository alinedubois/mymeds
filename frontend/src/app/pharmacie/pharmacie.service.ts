import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Pharmacie {
  boitesDeMedicaments: Array<BoiteDeMedicament>
}

export interface DateDePeremption {
  date: string;
  estAuDelaDeTroisMois: boolean;
  estDansLesTroisMois: boolean;
  estDepassee: boolean;
  nombreDeJoursRestants: number;
}

export interface BoiteDeMedicament {
  id: number;
  nom: string;
  dateDePeremption: DateDePeremption;
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

  supprimerUneBoiteDeMedicament(boiteDeMedicamentId: number, identifiantUtilisateur: string): Observable<void> {
    return this.httpClient.delete<void>(BACKEND_URL + '/api/v2/pharmacies/' + identifiantUtilisateur + '/boites-de-medicaments/' + boiteDeMedicamentId);
  }
}
