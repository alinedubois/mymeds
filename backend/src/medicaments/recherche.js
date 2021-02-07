const {ok, badRequest} = require("aws-lambda-utils");
const S3Builder = require("aws-sdk-fluent-builder").S3Builder;
const stockageEnLigne = new S3Builder()
    .createIfNotExists()
    .withBucketName("my-meds-fichiers")
    .asStorageService()
    .build();

module.exports.rechercher = async event => {
    if (event.queryStringParameters && event.queryStringParameters.recherche && event.queryStringParameters.recherche.trim() !== ""){
        const contenuDuFichier = await stockageEnLigne.readFile("medicaments.txt");
        const medicamentsAuFormatTexte = contenuDuFichier.toString().split('\r\n');

        const medicaments = medicamentsAuFormatTexte.map(medicament => {
            const informationsMedicament = medicament.split("\t");
            return {
                identifiant : informationsMedicament[0],
                nom : informationsMedicament[1],
                formePharmaceutique : informationsMedicament[2],
                voieAdministration : informationsMedicament[3],
                surveillanceRenforcee : informationsMedicament[11]
            };
        }).filter(medicament => medicament.nom && medicament.nom.trim() !== '')
            .filter(medicament => medicament.nom.toLowerCase().includes(event.queryStringParameters.recherche.toLowerCase()));
        return ok(medicaments);
    }
    return badRequest("Veuillez renseigner le paramètre recherche")
};