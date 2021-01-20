'use strict';

const {ok} = require("aws-lambda-utils");
const DynamoDbBuilder = require("aws-sdk-fluent-builder").DynamoDbBuilder;
const dynamoDbRepository = new DynamoDbBuilder()
    .createIfNotExists()
    .withKeyName("tag")
    .withTableName(process.env.TAGS_TABLE)
    .build();

module.exports.list = async event => {
    const tags = await dynamoDbRepository.findAll();
    return ok(tags);
}

module.exports.get = async event => {
    const tag = await dynamoDbRepository.findById(event.pathParameters.id);
    return ok(tag);
}
