const scope = require('../steps_definitions/support/scope');

module.exports = {
    adresse: '/',
    seConnecter: async (login, motDePasse) => {
        const page = scope.context.currentPage;
        await page.waitForSelector('[name=email]', {
            visible: true
        });
        await page.type('[name=email]', login);
        await page.type('[name=password]', motDePasse);
        await page.click('[name=submit]');
        await page.waitForNavigation();
    }
}
