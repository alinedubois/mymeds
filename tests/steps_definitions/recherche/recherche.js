const {Given, Then, When} = require("@cucumber/cucumber");
const pageDAccueil = require('../../pages/accueil');


When("je fais une recherche avec le mot {string}", async (motCle) => {
    await pageDAccueil.rechercher(motCle);
});

Then("la liste des résultats ne propose que des médicaments contenant le mot {string}", async (motCle) => {
   await pageDAccueil.verifierQueTousLesResultatsContiennentLeMot(motCle);
});