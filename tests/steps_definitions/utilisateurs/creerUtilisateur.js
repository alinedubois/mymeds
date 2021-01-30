const auth0 = require("./auth0");

const creerUtilisateur = async (nom, login, motDePasse) => {
    const auth0Client = await auth0();
    const users = await auth0Client.createUser({
        email: login,
        email_verified: true,
        name: nom,
        password: motDePasse,
        verify_email: false,
        connection: "Username-Password-Authentication"
    });
}

module.exports = creerUtilisateur;
