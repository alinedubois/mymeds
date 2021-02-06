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
        const avatarImage = await page.$(`img[class='MuiAvatar-img']`);
        await avatarImage.click();
        const elementsDuMenuDeProfil = await page.$$(`li`);
        await elementsDuMenuDeProfil[1].click();
        await page.waitForNavigation();
    }
}
