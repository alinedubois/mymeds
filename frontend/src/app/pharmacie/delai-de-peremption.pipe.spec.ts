import {DelaiDePeremptionPipe} from './delai-de-peremption.pipe';
import {DatePipe} from "@angular/common";

describe('DelaiDePeremptionPipe', () => {
  it('doit afficher une date de péremption dépassée', () => {
    const pipe = new DelaiDePeremptionPipe(new DatePipe("en"));
    expect(pipe.transform("2020-09-13T22:00:00.000+00:00")).toEqual("Périmé depuis le 14/09/2020");
  });

  it('doit afficher une date de péremption supérieure à 100 jours', () => {
    const pipe = new DelaiDePeremptionPipe(new DatePipe("en"));
    expect(pipe.transform("2030-09-13T22:00:00.000+00:00")).toEqual("Périme le 14/09/2030");
  });

  it('doit afficher une date de péremption inférieure à 100 jours', () => {
    const pipe = new DelaiDePeremptionPipe(new DatePipe("en"));
    const dateDuJour = new Date();
    const dateDansQuaranteJours = new Date();
    dateDansQuaranteJours.setDate(dateDuJour.getDate() + 40)
    expect(pipe.transform(dateDansQuaranteJours.toISOString())).toEqual("Périme dans 40 jours");
  });
});
