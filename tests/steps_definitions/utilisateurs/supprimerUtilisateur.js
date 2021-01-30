const auth0 = require("./auth0");

const supprimerUtilisateur = async (identifiant) => {
    const auth0Client = await auth0();
    await auth0Client.deleteUser({
        id: identifiant
    });
}

module.exports = supprimerUtilisateur;
