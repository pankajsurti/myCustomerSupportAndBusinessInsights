const authConfig = {
    auth: {
        clientId: '6ce260da-0be6-4452-a94a-0db72b9158ea', // Admin.ServiceHealth
        authority: 'https://login.microsoftonline.com/6e4ce203-3bc4-4838-9d68-d1c438b7ecc2'
    }
};
 // Add here scopes for id token to be used at MS Identity Platform endpoints.
const authScopes = {
    popUpLogin: [],
    m365Login: []
};

module.exports = {authConfig, authScopes }