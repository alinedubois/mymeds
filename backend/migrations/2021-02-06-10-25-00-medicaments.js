const fs = require('fs');
const S3Builder = require("aws-sdk-fluent-builder").S3Builder;
const stockageEnLigne = new S3Builder()
    .createIfNotExists()
    .withBucketName("my-meds-fichiers")
    .asStorageService()
    .build();

module.exports = {
    up: async () => {

        const contenuDuFichierDesMedicaments = fs.readFileSync(__dirname + '/medicaments.txt', 'latin1');
        await stockageEnLigne.writeFile('medicaments.txt', Buffer.from(contenuDuFichierDesMedicaments));
/*
        const medicamentsAuFormatTexte = fs.readFileSync(, 'latin1').split('\r\n');

        const medicaments = medicamentsAuFormatTexte.map(medicament => {
            const informationsMedicament = medicament.split("\t");
            return {
                identifiant : informationsMedicament[0],
                nom : informationsMedicament[1],
                formePharmaceutique : informationsMedicament[2],
                voieAdministration : informationsMedicament[3],
                surveillanceRenforcee : informationsMedicament[11]
            };
        }).filter(medicament => medicament.nom && medicament.nom.trim() !== '');
*/
        return Promise.resolve();
    },
    down: async () => {

        return Promise.resolve()
    }
};
