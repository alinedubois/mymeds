const auth0 = require("./auth0");

const recupererUtilisateurs = async () => {
    const auth0Client = await auth0();
    return await auth0Client.getUsers();
}

module.exports = recupererUtilisateurs;
