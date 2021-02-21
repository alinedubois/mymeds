const {ok, badRequest} = require("aws-lambda-utils");
const dynamoDbBuilder = require("aws-sdk-fluent-builder").DynamoDbBuilder;
const medicamentsDeLUtilisateur = new dynamoDbBuilder()
    .withTableName(process.env.MEDICAMENTS_UTILISATEURS_TABLE)
    .withKeyName("identifiantDuMedicament")
    .build();
const utilisateurConnecte = require('../authentification/utilisateurConnecte');

module.exports.ajouterAUtilisateur = async event => {
    const utilisateur = utilisateurConnecte (event);
    if (event.body && event.body.identifiantDuMedicament && event.body.dateDePeremption){
        const medicamentDeLUtilisateur = {
            identifiantDuMedicament : event.body.identifiantDuMedicament,
            identifiantDeLUtilisateur : utilisateur.email,
            dateDePeremption : event.body.dateDePeremption
        };
        await medicamentsDeLUtilisateur.save(medicamentDeLUtilisateur);

        return created(medicamentDeLUtilisateur);
    }
    return badRequest("Les paramètres identifiantDuMedicament et dateDePeremption sont obligatoires");
};