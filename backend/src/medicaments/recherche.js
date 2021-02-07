const {ok, badRequest} = require("aws-lambda-utils");

module.exports.rechercher = async event => {
    if (event.queryStringParameters && event.queryStringParameters.recherche && event.queryStringParameters.recherche.trim() !== ""){

        return ok([]);
    }
    return badRequest("Veuillez renseigner le paramètre recherche")
};