
function getDEFAQs(interest) {
	
	//var credentials = JSON.stringify({username: username, password: password});

	var path=getPath(interest);
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path
	   // parameters: {credentials: credentials}
	};
	
	
	return WL.Server.invokeHttp(input);
}




function getPath(name) {
	if (name == undefined || name == '') {
		name = 'DEALERT';
	}
	return 'DEAlerts/apps/services/preview/DEAlerts/common/0/default/json/' + name + '.json';
	//return 'DeliveryExcellenceProject/apps/services/preview/DEAlerts/common/0/default/json/' + name + '.json';
	
}

