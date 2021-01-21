const DynamoDbBuilder = require("aws-sdk-fluent-builder").DynamoDbBuilder;
const dynamoDbRepository = new DynamoDbBuilder()
    .createIfNotExists()
    .withKeyName("tag")
    .withTableName(`my-meds-${process.env.STAGE}-tags`)
    .build();

module.exports = {
    up: async () => {
        const tags = [
            {
                tag: "sommeil",
                label: "Sommeil",
                color: "#808fd2"
            },
            {
                tag: "douleurs",
                label: "Douleurs",
                color: "#f86363"
            },
            {
                tag: "fievre",
                label: "Fièvre",
                color: "#f5ee69"
            },
        ]
        for (const tag of tags) {
            await dynamoDbRepository.save(tag);
        }
        return Promise.resolve();
    },
    down: async () => {
        await dynamoDbRepository.deleteById("douleurs");
        await dynamoDbRepository.deleteById("fievre");
        await dynamoDbRepository.deleteById("sommeil");
        return Promise.resolve()
    }
}
