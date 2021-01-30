/**
 * Fonction qui tranforme un tableau Gherkin avec un entete en tableau d'objets dont les clé correspondent aux entêtes
 * @param table le tableau Gherkin
 * @returns tableau d'objets
 */
const tableauGherkinAvecEnteteVersTableauDObjets = (table) => {
    return table.rawTable.slice(1).map(ligne => {
        const objet = {};
        table.rawTable[0].forEach((entete, index) => {
            objet[entete] = ligne[index];
        });
        return objet;
    });
};

module.exports = tableauGherkinAvecEnteteVersTableauDObjets;
