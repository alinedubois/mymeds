import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Moment} from "moment";
import {environment} from "../../environments/environment";

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
  medicamentId: string;
  nom: string;
  dateDePeremption: DateDePeremption;
}

@Injectable({
  providedIn: 'root'
})
export class PharmacieService {

  constructor(private httpClient: HttpClient) {
  }

  pharmacie(identifiantUtilisateur: string): Observable<Pharmacie> {
    return this.httpClient.get<Pharmacie>(`${environment.apiPath}/api/v2/pharmacies/${identifiantUtilisateur}`);
  }

  supprimerUneBoiteDeMedicament(boiteDeMedicamentId: number, identifiantUtilisateur: string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiPath}/api/v2/pharmacies/${identifiantUtilisateur}/boites-de-medicaments/${boiteDeMedicamentId}`);
  }

  ajouterUneBoiteDeMedicament(medicamentId: number, dateDePeremption: Moment, identifiantUtilisateur: string): Observable<void> {
    return this.httpClient.post<void>(`${environment.apiPath}/api/v2/pharmacies/${identifiantUtilisateur}/boites-de-medicaments`, {
      idMedicament : medicamentId,
      dateDePeremption :dateDePeremption
    });
  }
}
