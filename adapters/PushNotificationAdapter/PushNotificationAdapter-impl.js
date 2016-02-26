/*
*  Licensed Materials - Property of IBM
*  5725-G92 (C) Copyright IBM Corp. 2006, 2012. All Rights Reserved.
*  US Government Users Restricted Rights - Use, duplication or
*  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

java.lang.System.out.println("Hello World Push");

WL.Server.createEventSource({
	name: 'PushEventSource',
	onDeviceSubscribe: 'deviceSubscribeFunc',
	onDeviceUnsubscribe: 'deviceUnsubscribeFunc',
	securityTest: 'WL_IIPAuthenticatorRealmTest-mobile'
});

function deviceSubscribeFunc(userSubscription, deviceSubscription){
	//Test.run();
	java.lang.System.out.println(">> deviceSubscribeFunc");
	WL.Logger.info(">> deviceSubscribeFunc");
}

function deviceUnsubscribeFunc(userSubscription, deviceSubscription){
	WL.Logger.info(">> deviceUnsubscribeFunc");
	java.lang.System.out.println(">> deviceUnsubscribeFunc");
}

function submitNotification(userIdsstr,txt){
	WL.Logger.info(">> submitNotification");
	var i=0;
	var failsend="";
	var sentusers="";
	var userIds=userIdsstr.split(",");
	for(i=0;i<userIds.length;i++){
		
		
	
	var userSubscription = 
		WL.Server.getUserNotificationSubscription('PushNotificationAdapter.PushEventSource', userIds[i]);
	
	if (userSubscription==null){
		WL.Logger.info("No subscription found for user ::"+userIds[i]);
		failsend+=userIds[i]+",";
		//return { result: "No subscription found for user :: " + userIds[i] };
	}
	else{
		var notificationText = txt;
		WL.Logger.debug("submitNotification >> userId :: " + userIds[i] + ", text :: " + notificationText);
		var payload={};
		payload.msisdn=userIds[i];
		payload.message=notificationText;
		var notification=WL.Server.createDefaultNotification(notificationText,1, payload);
		notification.GCM.sound="soundbeep.mp3";
		notification.GCM.badge=1;
		WL.Server.notifyAllDevices(userSubscription, notification);
		//sentusers+","userIds[i];
		sentusers+=userIds[i]+",";
	}
	}
	
	return { result: "Notification sent to users :: " + sentusers+" No subscription found for user::" + failsend, };
}


function sendNotification(userIdsstr,txt){
	WL.Logger.info(">> submitNotification");
	var i=0;
	var failsend="";
	var sentusers="";
	var userIds=userIdsstr.split(",");
	for(i=0;i<userIds.length;i++){
		
		
	
	var userSubscription = 
		WL.Server.getUserNotificationSubscription('PushNotificationAdapter.PushEventSource', userIds[i]);
	
	if (userSubscription==null){
		WL.Logger.info("No subscription found for user ::"+userIds[i]);
		failsend+=userIds[i]+",";
		//return { result: "No subscription found for user :: " + userIds[i] };
	}
	else{
		var notificationText = txt;
		WL.Logger.debug("submitNotification >> userId :: " + userIds[i] + ", text :: " + notificationText);
		var payload={};
		payload.msisdn=userIds[i];
		payload.message=notificationText;
		var notification=WL.Server.createDefaultNotification(notificationText,1, payload);
		notification.GCM.sound="soundbeep.mp3";
		notification.GCM.badge=1;
		WL.Server.notifyAllDevices(userSubscription, notification);
		//sentusers+","userIds[i];
		sentusers+=userIds[i]+",";
	}
	}
	
	return { result: "Notification sent to users :: " + sentusers+" No subscription found for user::" + failsend, };
}