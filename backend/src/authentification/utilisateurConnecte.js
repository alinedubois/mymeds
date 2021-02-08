const ROLE_ADMINISTRATEUR = 'MY_MEDS_ADMIN';
const ROLE_UTILISATEUR = 'MY_MEDS_USER';

module.exports = (event) => {
    const claims = event.requestContext.authorizer.jwt.claims;
    const roles = claims[`https://mymeds/roles`] ? claims[`https://mymeds/roles`].split(',') : [];
    const email = claims[`https://mymeds/email`];
    const utilisateurVerifieParMail = claims[`https://mymeds/email_verified`];
    if (!email) {
        throw new Error(`L'utilisateur n'a pas d'email`);
    }
    if (!utilisateurVerifieParMail) {
        throw new Error(`L'utilisateur ${email} n'a pas été vérifié`);
    }
    if (!roles.includes(ROLE_UTILISATEUR)) {
        throw new Error(`L'utilisateur ${email} n'est pas autorisé à accéder à l'application`);
    }
    return {
        email,
        estAdministrateur: () => roles.includes(role => role === ROLE_ADMINISTRATEUR)
    };
}
