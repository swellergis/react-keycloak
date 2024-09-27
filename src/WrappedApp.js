import React from 'react';
import { ReactKeycloakProvider, useKeycloak } from '@react-keycloak/web';
import keycloak from './keycloak'

const App = () => {
    const { keycloak, initialized } = useKeycloak();

    if (!initialized) {
        return <div>Loading...</div>;
    }

    if (!keycloak.authenticated) {
        return <div>Not authenticated</div>;
    }

    return (
        <div>
            <p>Welcome, {keycloak.tokenParsed.name}</p>
            <button onClick={() => keycloak.logout()}>Logout</button>
        </div>
    );
};

const WrappedApp = () => (
    <ReactKeycloakProvider 
        initOptions={{ onLoad: 'login-required' }}
        authClient={keycloak}
    >
        <App />
    </ReactKeycloakProvider>
);

export default WrappedApp;
