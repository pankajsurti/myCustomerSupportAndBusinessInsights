const authConfig = {
    auth: {
        clientId: 'ENTER_CLIENT_ID',
        authority: 'https://login.microsoftonline.com/6e4ce203-3bc4-4838-9d68-d1c438b7ecc2'
    }
};
 // Add here scopes for id token to be used at MS Identity Platform endpoints.
const authScopes = {
    popUpLogin: [],
    m365Login: []
};

module.exports = {authConfig, authScopes }