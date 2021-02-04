const fs = require('fs');
const DynamoDbBuilder = require("aws-sdk-fluent-builder").DynamoDbBuilder;
const dynamoDbRepository = new DynamoDbBuilder()
    .createIfNotExists()
    .withKeyName("identifiant")
    .withTableName(`my-meds-${process.env.STAGE}-medicaments`)
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
        });
        for (const medicament of medicaments) {
            await dynamoDbRepository.save(medicament);
        }
        return Promise.resolve();
    },
    down: async () => {

        return Promise.resolve()
    }
};
