import {Pipe, PipeTransform} from '@angular/core';
import {DateDePeremption} from "../services/pharmacie.service";

@Pipe({
  name: 'delaiDePeremption'
})
export class DelaiDePeremptionPipe implements PipeTransform {

  transform(dateDePeremption: DateDePeremption): string | null {

    if (dateDePeremption.estAuDelaDeTroisMois) {
      return "Périme le " + dateDePeremption.date;
    } else if (dateDePeremption.estDansLesTroisMois) {
      return "Périme dans " + dateDePeremption.nombreDeJoursRestants + " jours";
    } else {
      return "Périmé depuis le " + dateDePeremption.date;
    }
  }
}
