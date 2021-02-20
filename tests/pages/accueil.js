const scope = require('../steps_definitions/support/scope');
const {expect} = require('chai');

module.exports = {
    adresse: '/',
    doitContenirLAvatar: async (nom) => {
        const page = scope.context.currentPage;
        const avatarImage = await page.$(`img[alt='${nom}']`);
        expect(avatarImage).not.to.be.undefined;
    },
    seDeconnecter: async () => {
        const page = scope.context.currentPage;
        const selecteurDeLAvatar = `img[class='MuiAvatar-img']`;
        await page.waitForSelector(selecteurDeLAvatar, {
            visible: true
        });
        const avatarImage = await page.$(selecteurDeLAvatar);
        await avatarImage.click();
        const elementsDuMenuDeProfil = await page.$$(`li`);
        await elementsDuMenuDeProfil[1].click();
        await page.waitForNavigation();
    },
    rechercher: async  (motCle) => {
        const page = scope.context.currentPage;
        await page.type(`input[id='recherche']`, motCle);
    },
    verifierQueTousLesResultatsContiennentLeMot : async (motCle) => {
        const page = scope.context.currentPage;
        const resultatsDeRecherche = await page.$$(`div[data-testid='resultat-recherche']`);

        for (const resultat of resultatsDeRecherche){
            expect (resultat.innerText.toLowerCase()).to.equal(motCle.toLowerCase());
        }
    }
};
