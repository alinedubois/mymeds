const { After, Before, AfterAll } = require('@cucumber/cucumber');
const scope = require('./support/scope');
const recupererUtilisateurs = require('./utilisateurs/recupererUtilisateurs');
const supprimerUtilisateur = require('./utilisateurs/supprimerUtilisateur');

Before(async () => {
    // You can clean up database models here
});

After(async () => {
    if (scope.browser && scope.context.currentPage) {
        const cookies = await scope.context.currentPage.cookies();
        if (cookies && cookies.length > 0) {
            await scope.context.currentPage.deleteCookie(...cookies);
        }
        await scope.context.currentPage.close();
        scope.context.currentPage = null;
    }
});

AfterAll(async () => {
    if (scope.browser) {
        await scope.browser.close();
    }
    const utilisateursDeTest = (await recupererUtilisateurs())
        .filter(utilisateur => utilisateur.name === 'Jose Garcia Moreno');
    for (const utilisateur of utilisateursDeTest) {
        await supprimerUtilisateur(utilisateur.user_id);
    }
});
