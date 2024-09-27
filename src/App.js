import TestPage from './TestPage';
import './App.css';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak'

function App() {
  return (
    <ReactKeycloakProvider 
        initOptions={{ onLoad: 'login-required' }}
        authClient={keycloak}
    >
    <div className="App">
      <TestPage />
    </div>
    </ReactKeycloakProvider>
  );
}

export default App;
