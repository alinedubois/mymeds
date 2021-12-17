import {Pipe, PipeTransform} from '@angular/core';
import {DateDePeremption} from "./pharmacie.service";

@Pipe({
  name: 'delaiDePeremption'
})
export class DelaiDePeremptionPipe implements PipeTransform {

  transform(dateDePeremption: DateDePeremption): string | null {
    // medicament périmé depuis le
    // médicament qui périme dans 100 jours
    // médicament qui périme le (supérieur à 100 jours)
    if (dateDePeremption.estAuDelaDeTroisMois) {
      return "Périme le " + dateDePeremption.date;
    } else if (dateDePeremption.estDansLesTroisMois) {
      return "Périme dans " + dateDePeremption.nombreDeJoursRestants + " jours";
    } else {
      return "Périmé depuis le " + dateDePeremption.date;
    }
  }
}
