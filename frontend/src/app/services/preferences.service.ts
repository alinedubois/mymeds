import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

export interface Preferences {
  notificationMail: boolean;
  notificationHeure: number;
  typeAffichageMedicaments: string;
}

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor(private httpClient: HttpClient ) {}

  preferences(identifiantUtilisateur: string): Observable<Preferences> {
    return this.httpClient.get<Preferences>(`${environment.apiPath}/api/${identifiantUtilisateur}/preferences`);
  }

}

