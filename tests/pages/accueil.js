const scope = require('../steps_definitions/support/scope');
const {expect} = require('chai');

module.exports = {
    adresse: '/',
    doitContenirLAvatar: async (nom) => {
        const page = scope.context.currentPage;
        const avatarImage = await page.$(`img[alt='${nom}']`);
        expect(avatarImage).not.to.be.undefined;
    }
}
