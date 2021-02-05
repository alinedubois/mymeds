'use strict';

const {ok, unauthorized} = require("aws-lambda-utils");
const DynamoDbBuilder = require("aws-sdk-fluent-builder").DynamoDbBuilder;
const dynamoDbRepository = new DynamoDbBuilder()
    .createIfNotExists()
    .withKeyName("tag")
    .withTableName(process.env.TAGS_TABLE)
    .build();
const utilisateurConnecte = require('../authentification/utilisateurConnecte');

module.exports.list = async event => {
    const tags = await dynamoDbRepository.findAll();
    return ok(tags);
}

module.exports.get = async event => {
    const tag = await dynamoDbRepository.findById(event.pathParameters.id);
    return ok(tag);
}

module.exports.auth = event => {
    const utilisateur = utilisateurConnecte(event);
    if (utilisateur.estAdministrateur()) {
        return ok('ADMIN');
    }
    return unauthorized('USER');
}
