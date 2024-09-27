import { useKeycloak } from '@react-keycloak/web';

function TestPage() {
	const { keycloak } = useKeycloak();

    if (keycloak.idTokenParsed) {
        return (
            <div>
                <h1 className="text-black text-4xl">Welcome to the Protected Page.</h1>
                <h2>{JSON.stringify(keycloak.realmAccess)}</h2>
                <h2>{JSON.stringify(keycloak.idTokenParsed)}</h2>
            </div>
        );
    } else {
        return <div>Not authenticated</div>;
    }
}

export default TestPage;
