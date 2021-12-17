import {DelaiDePeremptionPipe} from './delai-de-peremption.pipe';

describe('DelaiDePeremptionPipe', () => {
  it('doit afficher une date de péremption dépassée', () => {
    const pipe = new DelaiDePeremptionPipe();
    expect(pipe.transform({
      date: "09/2020",
      nombreDeJoursRestants: 0,
      estDepassee: true,
      estAuDelaDeTroisMois: false,
      estDansLesTroisMois: false
    })).toEqual("Périmé depuis le 09/2020");
  });

  it('doit afficher une date de péremption au dela de trois mois', () => {
    const pipe = new DelaiDePeremptionPipe();
    expect(pipe.transform({
      date: "09/2030",
      nombreDeJoursRestants: 0,
      estDepassee: false,
      estAuDelaDeTroisMois: true,
      estDansLesTroisMois: false
    })).toEqual("Périme le 09/2030");
  });

  it('doit afficher une date de péremption dans les trois mois', () => {
    const pipe = new DelaiDePeremptionPipe();
    expect(pipe.transform({
      date: "01/2022",
      nombreDeJoursRestants: 40,
      estDepassee: false,
      estAuDelaDeTroisMois: false,
      estDansLesTroisMois: true
    })).toEqual("Périme dans 40 jours");
  });
});
