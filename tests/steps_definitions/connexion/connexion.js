const {Given, Then, When} = require("@cucumber/cucumber");
const ManagementClient = require('auth0').ManagementClient;
const axios = require("axios").default;

Given('je me suis enregistré en tant que', async (table) => {

    /*try {
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
        const management = new ManagementClient({
            token: response.data.access_token,
            domain: 'dev-mymeds.eu.auth0.com'
        });
        const users = await management.getUsers();
        const userId = users[0].user_id;
        const userPermissions = await management.getUserLogs({
            id: userId
        });
        console.log(userPermissions);
    } catch (err) {
        // Handle error.
        console.error(err.message);
    }*/
})

When(`je me connecte à l'application avec`, (table) => {
})

Then(`je vois {string} affiché dans le bandeau de l'application`, (nom) => {
})
