import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PreferencesUtilisateurComponent} from "./preferences-utilisateur/preferences-utilisateur.component";
import {PharmacieComponent} from "./pharmacie/pharmacie.component";

const routes: Routes = [
  {path: '', component: PharmacieComponent},
  {path: 'preferences', component: PreferencesUtilisateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
