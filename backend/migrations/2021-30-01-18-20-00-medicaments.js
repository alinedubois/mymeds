const fs = require('fs');
const DynamoDbBuilder = require("aws-sdk-fluent-builder").DynamoDbBuilder;
const dynamoDbRepository = new DynamoDbBuilder()
    .createIfNotExists()
    .withKeyName("identifiant")
    .withTableName(`my-meds-${process.env.STAGE}-medicaments`)
    .withWriteCapacity(50)
    .build();

module.exports = {
    up: async () => {

        const medicamentsAuFormatTexte = fs.readFileSync(__dirname + '/medicaments.txt', 'latin1').split('\r\n');

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
        await dynamoDbRepository.saveAll(medicaments, 25);
        return Promise.resolve();
    },
    down: async () => {

        return Promise.resolve()
    }
};
