
/* JavaScript content from js/main.js in folder common */
/* ***************************************************************** */
/*                                                                   */
/* IBM Confidential                                                  */
/*                                                                   */
/* OCO Source Materials                                              */
/*                                                                   */
/* Copyright IBM Corp. 2014                                          */
/*                                                                   */
/* The source code for this program is not published or otherwise    */
/* divested of its trade secrets, irrespective of what has been      */
/* deposited with the U.S. Copyright Office.                         */
/*                                                                   */
/* ***************************************************************** */
//var projectUom,sequence,updates,additional,notify,updated,timestamp;
var status;
var updated;
var globalSectorSelect=0;

$(document).ready(function(){

	$("#projectnames").hide();
	$('#sectorFormV').submit(function () {
		submitFun();
		 return false;
		});
	
	$( "#SectorSelect").change(function() {
		BonD.busierShow('login', Messages.loading_indicator_title);
		var selectedValue=$(this).val();
		// alert("selectedValue="+selectedValue,"DE Alert",null,"OK");
		globalSectorSelect=selectedValue;
		 $(sectorlSelectList).each(function(i,item){

			 if(selectedValue==item.SECTOR_ID){

				    $("#SectorLead").val(item.SECTOR_LEAD);
					$("#SectorDELead").val(item.SECTOR_DE_LEAD);
					$("#SectorLead").attr("disabled","disabled");
					$("#SectorDELead").attr("disabled","disabled");

				  }

	 });
	//  alert(globalSectorSelect,"DE Alert",null,"OK");
			if(selectedValue!=""){
		 var invocationData1 = {
					adapter : 'formAdapter',
					procedure : 'procedureUom',
					parameters : [globalSectorSelect]
				};

				WL.Client.invokeProcedure(invocationData1, {
					onSuccess : getSectorSuccess1,
					onFailure : getSectorfailureProjects
				});	
			}
	 
	});

		 $( "#UoMSelect").change(function() {


			 var selectedValue=$(this).val();
			// alert(selectedValue);
		    $(UomSelectList).each(function(i,item){

			 	 if(selectedValue==item.UOM_ID){

			 		    $("#ClientName").val(item.CLIENT_NAME);

                       if(selectedValue!=""){
                    	   
                       
						getService(selectedValue);	
						$("#GEOname").val(item.GEO);
			 			$("#GDCPalName").val(item.GDC_PAL);
			 			$("#GDCPamName").val(item.GDC_PM);
                        
			 			$("#ClientName").attr("disabled","disabled");
			 			$("#Serviceline").attr("disabled","disabled");
			 			$("#SALname").attr("disabled","disabled");
			 			$("#GEOname").attr("disabled","disabled");
			 			$("#GDCPalName").attr("disabled","disabled");
			 			$("#GDCPamName").attr("disabled","disabled");
                       }

			 		  }

			 });







   	});

});

function getSectorSuccess1(response){
	//alert("adp sucessy","DE Alert",null,"OK");
	
	$("#UoMSelect").empty();
	$("#UoMSelect").append($('<option>', {
	    value: "",
	    text: "Select Project"
	}));
	//alert("changing sector1");
//	alert(response);
	var set = response.invocationResult.resultSet;
	UomSelectList=set;
		//alert(set.length);
		for(var i=0; i<set.length; i++){
			UomName =set[i].UOM_NAME;
			UomId= set[i].UOM_ID;
		//  alert(sectorName + sectorId);

		  $("#UoMSelect").append($('<option>', {
			    value: UomId,
			    text: UomName
			}));

		}
		BonD.busierHide('login');
		$('#UoMSelect').selectmenu().selectmenu('refresh');
}

function getSectorfailureProjects(error){
	 alert("Failed to get Projects","DE Alert",null,"OK");
	 BonD.busierHide('login');
}

function getService(selectedValue){
	 var invocationData2 = {
				adapter : 'formAdapter',
				procedure : 'procedureService',
				parameters : [selectedValue]
			};

			WL.Client.invokeProcedure(invocationData2, {
				onSuccess : getSectorSuccess2,
				onFailure : getSectorfailure2
			});	

	function getSectorSuccess2(response){
		     //   alert(response);
		     //   alert(response.invocationResult);
				var set = response.invocationResult.resultSet;
			//	alert(set);   
				if(set.length == 0){
                update=true;
				}
				else{
					update=false;
					var invocationData2 = {
							adapter : 'formAdapter',
							procedure : 'procedureadditional',
							parameters : []
						};

						WL.Client.invokeProcedure(invocationData2, {
							onSuccess : getSectorSuccess3,
							onFailure : getSectorfailure2
						});	
					
				
				if(set[0].STATUS !='CLOSED'){
				$("#Serviceline").val(set[0].SERVICE_LINE);
	 			$("#SALname").val(set[0].SERVICE_AREA_LEAD);
	 			var split=set[0].IDENTIFIED_ON.split('T');
	 			$("#DateField").val(split[0]);
                $("#fromTo").val(set[0].FROM_TO);
                $("#Concerns").val(set[0].CONCERNS);
                $("#StatusSelect option:first-child").prop("selected", false);
                $("#StatusSelect option[value='"+set[0].STATUS+"']").prop("selected", true);
          	    $("#StatusSelect").selectmenu("refresh", true);
         	    if(set[0].DELIVERY_ISSUES=="Y"){
          	    	$("#checkbox-enhanced").prop('checked',true).checkboxradio('refresh');
             	    }
         	    else{
         	    	$("#checkbox-enhanced").prop('checked',false).checkboxradio('refresh');
         	    }
               $("#Updates").val(set[0].UPDATES);
               if(set[0].NOTIFY=="N"){
            	   $("#notify").prop('checked',false).checkboxradio('refresh');  
               }
               else{
            	   $("#notify").prop('checked',true).checkboxradio('refresh');
               }
              $("#additional").val(set[0].ADDITIONAL_NOTIFIERS);
				}
				}
			}	
	function getSectorfailure2(){
		 alert("Failed to Process","DE Alert",null,"OK");
		 BonD.busierHide('login');
	      }
}


//$(document).on("tap","#SubmitBtn",function(){

var notifusers=[];
var notiftext="";
    function submitFun(){
    	 
    	 
    	
    	console.log("submit clicked");
//	alert("submit button");
	var projectUom = $("#UoMSelect").val();
	var projectName = $("#UoMSelect option:selected").text();
	var sectorNamel=$("#SectorSelect option:selected").text();
	//alert(projectUom);
	var clientName =$("#ClientName").val();
	//alert(clientName);
	var serviceLine=$("#Serviceline").val();
	//alert(serviceLine);
	var sal=$("#SALname").val();
	//alert(sal);
	var geo=$("#GEOname").val();
	//alert(geo);
	var gdcPal=$("#GDCPalName").val();
	//alert(gdcPal);
	var gdcPam=$("#GDCPamName").val();
	//alert(gdcPam);
	var identified=$("#DateField").val();
//	alert(identified);

	var fromTo =$("#fromTo").val();
	//alert(fromTo);
	var concerns=$("#Concerns").val();
	//alert(concerns);
	status=$("#StatusSelect").val();
	//alert(status);
	var issues;
	if ($("#issues").is(":checked"))
	{
	  issues='Y';
	}
	else{
		issues='N';
	}

	//alert(issues);
     var updates=$("#Updates").val();
   // alert(updates);
     var notify;
	if ($("#notify").is(":checked"))
	{
	  notify='Y';
	}
	else{
		notify='N';
	}
	
	console.log("notify :"+ notify);
	/***********************************************************************/
	notiftext="";
	if(notify=='Y'){
		
		notifusers.push($("#SectorLead").val().trim());
		notifusers.push($("#SectorDELead").val().trim());
		notifusers.push(sal.trim());
		notifusers.push(gdcPal.trim());
		notifusers.push(gdcPam.trim());
		var others= $("#additional").val().trim().split(",");
		var j=0;
		for(j=0;j<others.length;j++){
			notifusers.push(others[j]);
			
		}
	
		 notiftext = "Escalation for "+sectorNamel+" Project "+projectName;
		
	}
	/***********************************************************************/	
	
	
	 var additional="additionals";
	 var updated=loggedInUser;
	 var identydate=getCurrentTimeFormated(new Date(identified)).split(" ")[0];
	 //console.log("identydate "+identydate);
	// alert(identydate);
	// var timestamp="2015-04-07"; 
	 var sequence="1";

		 uomHeader(projectUom,identydate,fromTo,concerns,status,issues,updated,getCurrentTimeFormated(new Date()),sequence,updates,additional,notify);
	// uomHeader(projectUom,identydate,fromTo,concerns,status,issues,updated,sequence,updates,additional,notify);
        
    }
    

	
	function sendNotification(notifusersl,txt){
		
		
		if(txt!=""){
		
		var invocationDataP = {
				adapter : 'PushNotificationAdapter',
				procedure : 'submitNotification',
				parameters : [notifusersl.toString(),txt]
			};

			WL.Client.invokeProcedure(invocationDataP, {
				onSuccess : getSectorSuccessP,
				onFailure : getSectorfailureP
			});	
		}
		
	}
	function getSectorSuccessP(response){
		//alert("Notification");
		//$(':input').val('');
		
		console.log("Notification sent Successfully");
		BonD.busierHide('login');
		//alert("Notification sent Successfully","DE Alert",null,"OK");
		
		 
		
		//$('#sectorFormV')[0].reset();
		
	}
	
	function getSectorfailureP(response){
	//	alert("fail to notify");
		BonD.busierHide('login');
		alert("Failed to Add data","DE Alert",null,"OK");
		console.log("Push Notification sending failed");
		
		
	}
		 //});/// submit end
	

function uomHeader(projectUom,identified,fromTo,concerns,status,issues,updated,timestamp,sequence,updates,additional,notify){
	BonD.busierShow('login', Messages.loadiidentydateg_indicator_title);
	if(updated==true){
		var invocationData3 = {
				adapter : 'formAdapter',
				procedure : 'updateUomHeader',
				parameters : [projectUom,identified,fromTo,concerns,status,issues,updated]
			};

			WL.Client.invokeProcedure(invocationData3, {
				onSuccess : getSectorSuccess3,
				onFailure : getSectorfailure3
			});	
	}
	else{
		var invocationData3 = {
				adapter : 'formAdapter',
				procedure : 'insertUomHeader',
				parameters : [projectUom,identified,fromTo,concerns,status,issues,updated]
			};

			WL.Client.invokeProcedure(invocationData3, {
				onSuccess : getSectorSuccess3,
				onFailure : getSectorfailure3
			});	

	}
	
		function getSectorSuccess3(response){
			
			
			uomDetails(projectUom,sequence,updates,additional,notify,updated);
			
			 
		}
		function getSectorfailure3(response){
			BonD.busierHide('login');
		     //console.log("Failing");
		     alert("Failed to Add data","DE Alert",null,"OK");
		}
}
function uomDetails(projectUom,sequence,updates,additional,notify,updated){
if(updated==true){
	var invocationData4 = {
			adapter : 'formAdapter',
			procedure : 'updateUomDetails',
			parameters : [projectUom,sequence,updates,additional,notify,updated]
		};

		WL.Client.invokeProcedure(invocationData4, {
			onSuccess : getSectorSuccess4,
			onFailure : getSectorfailure4
		});	

}else{
	var invocationData4 = {
			adapter : 'formAdapter',
			procedure : 'insertUomDetails',
			parameters : [projectUom,sequence,updates,additional,notify,updated]
		};

		WL.Client.invokeProcedure(invocationData4, {
			onSuccess : getSectorSuccess4,
			onFailure : getSectorfailure4
		});	

}
	
		function getSectorSuccess4(response){
			 
			
			BonD.busierHide('login');
			document.getElementById('sectorFormV').reset();
			alert("Escalation added","DE Alert",null,"OK");
			sendNotification(notifusers,notiftext);
			
			getbadgeCount(status);
			$("#StatusSelect1 option[value='"+status+"']").attr("selected", "selected");
			$("#StatusSelect1").selectmenu("refresh", true);
			$.mobile.pageContainer.pagecontainer("change", "#sectorPage", {
				transition : "slide"
			});
			$('#sectorFormV').trigger("reset");
			return false;
		}
		function getSectorfailure4(response){
			BonD.busierHide('login');
			 //console.log("Failing");
		     alert("Failed to Add data","DE Alert",null,"OK");
		}
}
/*function getTime(){

	var invocationData5 = {
			adapter : 'formAdapter',
			procedure : 'insertTime',
			parameters : []
		};

		WL.Client.invokeProcedure(invocationData5, {
			onSuccess : getSectorSuccess5,
			onFailure : getSectorfailure5
		});	

		function getSectorSuccess5(response){
			var set = response.invocationResult.resultSet;
			//	alert(set); 
			 k=1;
			 alert("time");
				alert(set[0].k);
			//alert("working");
		   //  alert(response);
		}
		function getSectorfailure5(response){
		     alert("Failing");
		}
}*/

var sectorlSelectList=[];
var UomSelectList=[];

function onDeviceReady() {
    document.addEventListener("backbutton", BonD.deviceBackbutton, false);
}

function wlCommonInit(){
	// Common initialization code goes here
	/*Form Page*************************************8*/
	
	 	
	
	
	//WL.Client.connect({onSuccess: connectSuccess, onFailure: connectFailure});
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//	document.addEventListener("deviceready", onDeviceReady, false);
	if (window.device) {
	 	
		//Disable direct update feature of Worklight
		  WL.iosDeviceProfileData[WL.EPField.SUPPORT_DIRECT_UPDATE_FROM_SERVER] = false;
		 WL.iphoneProfileData[WL.EPField.SUPPORT_DIRECT_UPDATE_FROM_SERVER] = false;
		 WL.ipadProfileData[WL.EPField.SUPPORT_DIRECT_UPDATE_FROM_SERVER] = false;
		 WL.androidProfileData[WL.EPField.SUPPORT_DIRECT_UPDATE_FROM_SERVER] = false;  
		 //
		 BonD.enableIMC = true;
		 if (BonD.appMode == 'dev') {
			 BonD.appServer = BonD.locServer;
		 }
		 
		 document.addEventListener("resume", $.proxy(BonD.deviceOnResume, BonD), false);
		 document.addEventListener("online", $.proxy(BonD.deviceOnline, BonD), false);
		 document.addEventListener("offline", $.proxy(BonD.deviceOffline, BonD), false);
		  document.addEventListener("backbutton", $.proxy(BonD.deviceBackbutton, BonD), false);

		 //openCache();
		 console.log('Device model: '+device.model);
		 if (isIOSEnv() || isAndroidEnv()) {
			 if (isSIMEnv()) {
				 window.j_os = window.device.platform;
				 console.log('window.os: ' +window.j_os);
			 } else {
				 window.plugins.getSerial.getSerial($.proxy(function(result) {
						window.j_serial = result.serial||result;
						window.j_os = window.device.platform;
						console.log('window.serial: ' +window.j_serial);
						console.log('window.os: ' +window.j_os);
				 }, window));
			 }
		 }
	 } else {
		 BonD.enableJSONStore = false;
		 var host = '//'+(location.host || location.hostname);
		 var isExternal = host.match(/(lmc)/i);
		 BonD.enableIMC = (isExternal ? true : false);
		 BonD.webServer.host = host;
		 //clean up the current session if any
		 WL.Client.logout(BonD.WL_AUTHEN_REALM,{onSuccess: function(){
			 console.log('Cleanup the old session on callback');
		 }});
	 }
	 
	 //open cache info
	 //Authen.getUser();
}



function connectSuccess() {
	WL.Logger.debug ("Successfully connected to Worklight Server.");
	WL.SimpleDialog.show("Successfully connected to Worklight Server.", 
			[{
				text : 'Ok',
				handler : function() {}
			},
			{
				text: 'Close',
				handler : function() {}
			}]
		);
}

function connectFailure() {
	WL.Logger.debug ("Failed connecting to Worklight Server.");
	WL.SimpleDialog.show("Push Notifications", "Failed connecting to Worklight Server. Try again later.", 
			[{
				text : 'Reload',
				handler : WL.Client.reloadapp
			},
			{
				text: 'Close',
				handler : function() {}
			}]
		);
}

function isPushSupported() {
	var isSupported = false;
	if (WL.Client.Push){
		isSupported = WL.Client.Push.isPushSupported();
	}	
	return isSupported;
}

function isPushSubscribed() {
	var isSubscribed = false;
	if (WL.Client.Push){
		isSubscribed = WL.Client.Push.isSubscribed('myPush');
	}
	return isSubscribed;
}




/**
 * SIM environment
 */
window.isSIMEnv = function () {
	if (!window.device) {
		return false;
	}
	//iOS Simulator
	var m = window.device.model;
	return ('x86_64' == m || 'x86_32' == m/* || 'sdk' == m*/);
};
/**
 * iOS environment
 */
window.isIOSEnv = function () {
	var env = WL.Client.getEnvironment();
	return (env == WL.Environment.IPHONE || env == WL.Environment.IPAD);
};
/**
 * Android environment
 */
window.isAndroidEnv = function () {
	var env = WL.Client.getEnvironment();
	return (env == WL.Environment.ANDROID);
};

//define shortcut functions
window.device = (window.device || null);
window.winAlert = window.alert || alert;
window.alert = function(message, title,alertCallback, buttonNames) {
	console.log('alert', title, message);
	if (!title || title.length == 0) {
		title = 'Alert';
	}
	if (!buttonNames || buttonNames.length == 0) {
		buttonNames = 'OK';
	}
	if (!alertCallback) {
		alertCallback = function(i) {
			console.log("OK button was clicked, index: " + i);
			//WL.Client.reloadApp();
			console.log("App logged out sucessfully" + i);
		};
	}
	//open dialog
	if (window.device) {
		navigator.notification.alert(message, alertCallback, title, buttonNames);
	} else {
		openDialog('Alert', message, alertCallback, buttonNames);
	}
};
/**
 * open a dialog
 */
window.openDialog = function(title, message, okBtnCb, buttonNames) {
	var _confirmCallback = function(i) {
		console.log("button index: " + i);
		var ok = window.device? 1: 0;
		if (i == ok) {
			okBtnCb(i);
		}
	};
	if (!okBtnCb) {
		okBtnCb = function(i) {
			console.log("OK button was clicked");
		};
	}
	if (!title || title.length == 0) {
		title = 'Confirm';
	}
	if (!buttonNames || buttonNames.length == 0) {
		buttonNames = 'OK, Cancel';
	}
	//open dialog
	if (window.device) {
		navigator.notification.confirm(message, _confirmCallback, title, buttonNames);
	} else {
		openJDialog(title, message, okBtnCb);
	}
};
/**
 * open jquery dialog
 */
window.openJDialog = function(title, message, okBtnCb) {
	var isAlert = (title == 'Alert');
	try {
		  var jcontent =  $("<div/>", { id: 'popupMsg' });
		  var msg = $("<div/>", { style : 'min-width:200px;min-height:60px;'}).appendTo(jcontent);
		  $("<h3/>", { text : title }).appendTo(msg);
		  $("<p/>", { text : message.replace(/\/n/g, '<br\/>') }).appendTo(msg);
		  var btns = $("<div/>", { style: 'text-align:center;'}).appendTo(jcontent);
		  if (isAlert) {
			  $("<button>", { text : 'OK', id: 'popupOK' }).buttonMarkup({ 'inline' : true }).appendTo(btns);
		  } else {
			  $("<button>", { text : 'Cancel', id: 'popupCancel'  }).buttonMarkup({ 'inline' : true }).appendTo(btns);
			  $("<button>", { text : 'OK', id: 'popupOK'  }).buttonMarkup({ 'inline' : true }).appendTo(btns);
		  }
		setTimeout(function(){
			$.dynamic_popup({content: jcontent})
			.bind(
				{ popupafteropen: function(e){
			        console.log('Opened the popup! ' +title +','+ message);
			        window._popupCloseCb = function(cb, e){
			        	var popId = '#popup' + $.mobile.activePage.attr('id');
						  $(popId).popup('close');
						 // if (cb) cb();
					  };
					  window._popupCloseNoneCb = $.proxy(window._popupCloseCb, window, null);
					  window._popupCloseOkCb = $.proxy(window._popupCloseCb, window, okBtnCb);
					  $('#popupOK').on('tap', _popupCloseOkCb);
					  $('#popupCancel').on('tap', _popupCloseNoneCb);
			    }, popupafterclose: function(e){
			    	console.log('Closed the popup! ' +title +','+ message);
			    	$(this).remove();
			    }
			});
		}, 100);
	} catch (e) {
		console.log(e);
		if (isAlert) {
			winAlert(message);
		} else {
			if (okBtnCb && confirm(message)) {
				okBtnCb();
			}
		}
	}
};
/**
 * jquery loading indicator
 */
window.jLoading = function(show) {
	if ('show' == show) {
		var option = {
				text: Messages.loading_indicator_title,
				textVisible: true,
				theme: 'a',
				textonly: false,
				html: '' };
		$.mobile.loading( show , option);
		setTimeout(function(){
			$( 'div.ui-loader' ).loader( "fakeFixLoader" );
			$( 'div.ui-loader' ).loader( "checkLoaderPosition" );
		}, 100);
	} else {
		$.mobile.loading( show );
	}
};
/**
 * jquery change page from/to 
 */
window.changePageTo = function(uri, options) {
	var settings = $.extend({'transition' : 'slide'}, options);
	$.mobile.pageContainer.pagecontainer("change", uri, settings);
};
/**
 * jquery load a page
 */
window.loadPage = function(uri, options) {
	var settings = $.extend({'role' : 'page'}, options);
	$.mobile.pageContainer.pagecontainer("load", uri, settings);
};

window.getActivePage = function() {
	var activePage = $.mobile.pageContainer.pagecontainer( "getActivePage" );
	return activePage;
};

//UI sections
$( document ).on( "pagecreate", function( event, ui ) {
	console.log('document pagecreate');
	//add a space for the status bar of ios 7 or later
	if (window.device && parseFloat(window.device.version) >= 7.0){
	      $(".ui-header").css("margin-top", "20px");
	      $(".ui-header .ui-btn").css("margin-top", "");
	      $(".DEsubheader").css("margin-top", "");
	      $(".panel").css("margin-top", "80px");
	 }
	if (WL.Client.getEnvironment() == WL.Environment.IPHONE) {
		$(".ui-slider-handle").css("margin-top", "");
		$(".ui-radio label").css("margin-top", "");
		
	}
});
$( document ).on( "pageshow", function( event, ui ) {
	console.log('document pageshow');
	if (isAndroidEnv()) {
		var activePage = getActivePage().attr("id");
		BonD.pageIdHistory.push(activePage);
	}
	// This is for moving down the search field, but
	// for now it's a temp solution as either mobileinit or 
	// ready event is not fired at all
 	$('.ui-field-contain input').off('blur');
 	$('.ui-field-contain input').on('blur', function(evt){
 		setTimeout(function(){
 			$.mobile.silentScroll(0);
 		}, 100);
 	});
});

$( document ).ready(function() {
	console.log( "ready!" );
	//append footer for the pages
	$("section[data-role='page']").each(function( i ) {
		if (this.id != 'login') {
			console.log('append the footer for the page: ' + this.id);
			var footer = '<footer id="footer" data-role="footer" data-theme="c" data-tap-toggle="false" data-position="fixed"><div class="sprite ibm ftr"></div></footer>';
			$(this).append(footer);
		}
	});
	
	//append the prefs for header of home page
	$("section[class='home'] header[data-role='header']").each(function( i ) {
		console.log('append the preferences for this header: ', i);
		var id = 'preferences'+i;
		var prefsAnchor = '<a href="#' + id + '" class="ui-btn-right ui-btn ui-btn-inline ui-mini ui-corner-all ui-btn-icon-right ui-icon-gear ui-btn-icon-notext">Preferences</a>';
		var prefs = '<div data-role="panel" id="' + id + '" class="preferences" data-position="right" data-display="overlay" data-theme="a" data-position-fixed="true">' +
						'<h3>Preferences</h3>' +
						'<form>' +
							'<ul data-role="listview" data-inset="true">' +
								'<li class="field-contain">' +
									'<label for="filters">Auto-load active charts</label>' +
									'<select name="filters" id="flip-2" data-role="slider" disabled="disabled">' +
										'<option value="off">Off</option>' +
										'<option value="on">On</option>' +
									'</select>' +
								'</li>' +
								'<li class="field-contain">' +
									'<fieldset data-role="controlgroup">' +
													'<legend>Search in</legend>' +
													'<input type="radio" name="radio1" id="radio1_0" value="IBMREQ001" onchange="changeSearchIn(this.value)" checked="checked"/>' +
													'<label for="radio1_0">Americas</label>' +
													'<input type="radio" name="radio1" id="radio1_1" value="IBMREQ002" onchange="changeSearchIn(this.value)"/>' +
													'<label for="radio1_1">EU Europe</label>' +
													'<input type="radio" name="radio1" id="radio1_2" value="IBMREQ003" onchange="changeSearchIn(this.value)"/>' +
													'<label for="radio1_2">Asia Pacific</label>' +
									'</fieldset>' +
								'</li>' +
								'<li class="field-contain"><a href="#" onclick="javascript:Authen.logout()" class="ui-btn">Logout</a></li>' +
							'</ul>' +
						'</form>' +
					'</div>';
		$(this).append(prefsAnchor);
		$(this).append(prefs);
		
		
	});
});



///////////////////// Push Notification Related Code ///////////////////
if (WL.Client.Push){
WL.Client.Push.onReadyToSubscribe = function(){
  //	alert("onReadyToSubscribe");
  	console.log("Push : fn onReadyToSubscribe : ");
    WL.Client.Push.registerEventSourceCallback(
  			"myPush", 
  			"PushNotificationAdapter", 
  			"PushEventSource", 
  			pushNotificationReceived);
  };
  	
}
  
  function getSecretDataPush(){
	  
	//  alert(WL.Client.Push.isSubscribed('myPush'),"DE Alert",null,"OK");
	  BonD.busierShow('login', Messages.loading_indicator_title);	
  if(!WL.Client.Push.isSubscribed('myPush'))
  {
  	 WL.Client.Push.subscribe("myPush", {
			onSuccess: function(){
				console.log("Push : subscribed : form button ");
				BonD.busierHide('login');
				 alert("Push Notification subscribed","DE Alert",null,"OK");
					
				//alert("subscribed");
				
			},
			onFailure:  function(res){
				console.log("Push : failure subscribe : from button ");
				BonD.busierHide('login');
				alert("Failed to subscribe Push Notification","DE Alert",null,"OK");
				
				//alert(res);
				
			}
		});
  }else{
  	//alert("already subscribed");
	  BonD.busierHide('login');
  	console.log("Push : already subscribed from button ");
  	 alert("Already subscribed Push Notification","DE Alert",null,"OK");
		
  }
  }
   
  function pushNotificationReceived(props, payload){
	 // alert("payload ","DE Alert",null,"OK");
		
	 // alert("payload "+JSON.stringify(payload),"DE Alert",null,"OK");
	  WL.SimpleDialog.show(
				"Notification", payload.message,
				[{text: "Ok"}]
		);
		
		/*WL.Logger.debug("pushNotificationReceived invoked");
		WL.SimpleDialog.show(
				"Notification", msg,
				[{text: "Ok"}]
		);*/
}
  
  

/*function getSecretData(){
	console.log("Push : fn getSecretData : ");
	var invocationData = {
			adapter : "bluePageLoginAdapter",
			procedure: "submitAuthentication",
			parameters: []
	};
	
	WL.Client.invokeProcedure(invocationData, {
		onSuccess: getSecretDataOK, 
		onFailure: getSecretDataFAIL
	});
}*/

function getSecretDataOK(response){
	console.log("Push : fn getSecretData  success: ");
	  if(!WL.Client.Push.isSubscribed('myPush'))
	  {
	  	 WL.Client.Push.subscribe("myPush", {
				onSuccess: function(){
					console.log("Push : subscribed : ");
					alert("Push Notification subsribed Successfully","DE Alert",null,"OK");
					//alert("subscribed");
					
				},
				onFailure:  function(res){
					console.log("Push : failure subscribe : ");
					alert("Failed to subscribe  Push Notification ","DE Alert",null,"OK");
					
					//alert(res);
					
				}
			});
	  }else{
	  //	alert("already subscribed");
	  	console.log("Push : already subscribed ");
	  }
	//$("#ResponseDiv").html(JSON.stringify(response.invocationResult));
	  $("#ResponseDiv").empty();
	  $("#ResponseDiv").append(JSON.stringify(response.invocationResult));
}

function getSecretDataFAIL(response){
	console.log("Push : fn getSecretData  failure: ");
	$("#ResponseDiv").html(JSON.stringify(response.invocationResult));
}

function getSectorSuccess3(response){
	var resultset=response.invocationResult.resultSet;
	var length=resultset.length;
	var names='';
	var j=1;
	for(var i=0;i<length;i++){
		if(j==length){
			 names +=resultset[i].USER_ID;
		}
		else{
			 names +=resultset[i].USER_ID+',';	
			 j++;
		}
	
	}
	$("#additional").val(names);
}


/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}