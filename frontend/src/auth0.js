import {Auth0Client} from "@auth0/auth0-spa-js";

export const domain = "dev-mymeds.eu.auth0.com";
export const clientId = "CudqgI5NIfKsEo7fEersJiDBF85FInOp";
export const audience = "https://my-meds-api-gateway/";

export default new Auth0Client({
    domain,
    client_id: clientId,
    audience
});
