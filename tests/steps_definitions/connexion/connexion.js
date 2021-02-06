const creerUtilisateur = require("../utilisateurs/creerUtilisateur");
const tableauGherkinAvecEnteteVersTableauDObjets = require("../steps/tableauGherkinAvecEnteteVersTableauDObjets");
const {Given, Then, When} = require("@cucumber/cucumber");
const {setDefaultTimeout} = require('@cucumber/cucumber');
const pageDeLogin = require('../../pages/login');
const pageDAccueil = require('../../pages/accueil');
const ouvrir = require('../../pages/ouvrir');
const scope = require('../support/scope');
const {expect} = require('chai');

setDefaultTimeout(60 * 1000);

Given('je me suis enregistré en tant que', async (tableauGherkin) => {
    const utilisateur = tableauGherkinAvecEnteteVersTableauDObjets(tableauGherkin)[0];
    try {
        await creerUtilisateur(utilisateur.nom, utilisateur.email, utilisateur.motDePasse);
    } catch (error) {
        if (error.message.includes('The user already exists')) {
            console.log(`${utilisateur.email} : ${error.message}`);
        } else {
            throw error;
        }
    }
});

When(`je me connecte à l'application avec`, async (tableauGherkin) => {
    const utilisateur = tableauGherkinAvecEnteteVersTableauDObjets(tableauGherkin)[0];
    await ouvrir(pageDeLogin);
    await pageDeLogin.seConnecter(utilisateur.login, utilisateur.motDePasse);
});

Then(`je vois l'avatar de {string} affiché dans le bandeau de l'application`, async nom => {
    await pageDAccueil.doitContenirLAvatar(nom);
});

When(`je me déconnecte de l'application`, async () => {
    await pageDAccueil.seDeconnecter();
});

Then(`je vois la mire de connexion`, async () => {
    const page = scope.context.currentPage;
    await page.waitForNavigation();
    const html = await page.content();
    expect(html).to.contain('Connectez-vous à My Meds');
});
