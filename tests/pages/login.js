const scope = require('../steps_definitions/support/scope');

module.exports = {
    adresse: '/',
    seConnecter: async (login, motDePasse) => {
        const page = scope.context.currentPage;
        await page.waitForSelector('[name=username]', {
            visible: true
        });
        await page.type('[name=username]', login);
        await page.type('[name=password]', motDePasse);
        await page.click('[name=action]');
        await page.waitForNavigation();
    }
}
