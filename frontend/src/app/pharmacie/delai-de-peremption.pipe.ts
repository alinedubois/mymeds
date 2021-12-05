import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'delaiDePeremption'
})
export class DelaiDePeremptionPipe implements PipeTransform {

  datePipe: DatePipe;

  constructor(datePipe: DatePipe) {
    this.datePipe = datePipe;
  }

  transform(dateDePeremption: string): string | null {
    // medicament périmé depuis le
    // médicament qui périme dans 100 jours
    // médicament qui périme le (supérieur à 100 jours)
    const dateDuJour = new Date();
    const dateDePeremptionDuMedicament = new Date(dateDePeremption);
    const differenceEnNombreDeJours = this.differenceEnNombreDeJours(dateDePeremptionDuMedicament,dateDuJour);

    if (differenceEnNombreDeJours > 100) {
      return "Périme le " + this.datePipe.transform(dateDePeremption, 'dd/MM/yyyy');
    } else if (differenceEnNombreDeJours >0 && differenceEnNombreDeJours <= 100) {
      return "Périme dans " + differenceEnNombreDeJours + " jours";
    } else {
      return "Périmé depuis le " + this.datePipe.transform(dateDePeremption, 'dd/MM/yyyy');
    }
  }

  private differenceEnNombreDeJours(date1: Date, date2: Date): number {
    // @ts-ignore
    let differenceEnMillisecondes = date1 - date2;
    return Math.ceil(differenceEnMillisecondes / (1000 * 60 * 60 * 24));
  }
}
