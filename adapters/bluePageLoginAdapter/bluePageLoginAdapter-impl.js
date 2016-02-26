function checkSession() {
	return {
		'isValidSession': true
	};
}


function getSecretData(){
	return {
		secretData: "A very very very very secret data"
	};
}


function submitAuthentication(){

	java.lang.System.out.println("fn submitAuthentication");
		/*var userIdentity = {
				userId: username,
				displayName: username, 
				attributes: {
					foo: "bar"
				}
		};

		WL.Server.setActiveUser("WL_IIPAuthenticatorRealm", userIdentity);*/
		
}



function onLogout(){
	WL.Server.setActiveUser("WL_IIPAuthenticatorRealm", null);
	WL.Logger.debug("Logged out");
	java.lang.System.out.println("onLogout function");
}
