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

        return Promise.resolve();
    },
    down: async () => {

        return Promise.resolve()
    }
};
