import Keycloak from "keycloak-js";

// no-args constructor will load settings from keycloak.json
// const keycloak = new Keycloak();

const config = {
    // url: 'http://localhost:8080',
    url: 'https://keycloak.local',
    // url: 'https://172.17.0.1',
    // url: 'https://auth.local',
    realm: 'vertx',
    clientId: 'vertx-service'
}
const keycloak = new Keycloak(config);

export default keycloak;
