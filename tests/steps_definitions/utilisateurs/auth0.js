const ManagementClient = require('auth0').ManagementClient;
const axios = require("axios").default;

const auth0 = async () => {
    const options = {
        method: 'POST',
        url: 'https://dev-mymeds.eu.auth0.com/oauth/token',
        headers: {'content-type': 'application/json'},
        data: {
            grant_type: 'client_credentials',
            client_id: process.env.OAUTH_CLIENT_ID,
            client_secret: process.env.OAUTH_CLIENT_SECRET,
            audience: 'https://dev-mymeds.eu.auth0.com/api/v2/'
        }
    };
    const response = await axios.request(options);
    return new ManagementClient({
        token: response.data.access_token,
        domain: 'dev-mymeds.eu.auth0.com'
    });
}

module.exports = auth0;
