
/* JavaScript content from js/events.js in folder common */
$(document).on("mobileinit", function() {
	 	console.log('mobileinit');
		$.mobile.hashListeningEnabled = true;
		 $.mobile.defaultPageTransition="slide";
		//$.mobile.selectmenu.prototype.options.nativeMenu = false;
		// We want popups to cover the page behind them with a dark background
		//$.mobile.popup.prototype.options.overlayTheme = "b";
		// Set a namespace for jQuery Mobile data attributes
		//$.mobile.ns = "jqm-";
	});

var countIGA=0,countFin=0,countDist=0,countInd=0,countPublic=0,countComm=0,countCross=0, serviceLine,uomId;
var selSector="";
var selSectorValue=0;
var allSectorDetails=[];
var uomId,sequenceParticularUomId,uomName,uomEscStatus;
var CurrentTimestamp;
var curpage;
var searchTextVal="";
var mailContent="";
var mailContentMain="";
var userInfo={};
var flag=0;
var selusersforrespo;
var isintervalon=false;
var onlychatpage=false;
var allprojects = [];
$(document).ready(function(){
	
	
/*  juhi */
	
	$(document).bind('pagechange', function() {
		
		var curpage=$.mobile.activePage.attr('id');
		if(curpage=="askSupportid"){
			onlychatpage=true;
			 
		}else{
			onlychatpage=false;
			// isintervalon=true;
		}
		if(curpage=="askSupportid" && isintervalon==false){
			
			  myVar = setInterval(function(){getUserChatHistory(); }, 10000);
			  isintervalon=true;
			
		}else{
			if(onlychatpage!=true){
			clearchatinterval();
			isintervalon=false;
			}
		}
		  $('.ui-page-active .ui-listview').listview('refresh');
		  $('.ui-page-active :jqmData(role=content)').trigger('create');
		   
		  
		  var location="#";
		 
		  
		  curpage=$.mobile.activePage.attr('id');
		   console.log("page chenged  cupage "+curpage);
		   if(curpage=="sectorPage"){
			   location = $('#homemenuID a').attr("href");
			   if(ispm==false){
				   $("#formmenuID a").removeClass("menuDisabled");
				   
			   }
			   else{
				   $("#formmenuID a").addClass("menuDisabled");  
			   }
			  
			   $("#formmenuID a").attr("href", "#formPage");
			   $("#homemenuID a").addClass("menuDisabled");
			   $("#formmenuID").addClass("doform");
			   $("#homemenuID a").removeAttr('href');
		   }else if (curpage=="formPage"){
			   location = $('#formmenuID a').attr("href");
			   $("#homemenuID a").removeClass("menuDisabled");
			   $("#homemenuID a").attr("href", "#sectorPage");
			   $("#formmenuID a").addClass("menuDisabled");
			   $("#formmenuID").removeClass("doform");
			   $("#formmenuID a").removeAttr('href');
		   } else {
			   
			   
			   $("#formmenuID").addClass("doform");
			   $("#homemenuID a").attr("href", "#sectorPage");
			   if(ispm==false){
				   $("#formmenuID a").removeClass("menuDisabled"); 
				   $("#homemenuID a").removeClass("menuDisabled");
			   }
			   else{
				   $("#formmenuID a").addClass("menuDisabled");
				   $("#formmenuID a").addClass("menuDisabled");
			   }
			   
			   $("#formmenuID a").attr("href", "#formPage");
			 //  $("#homemenuID a").attr("href", location);
		   } 
		 
		   
          
		});
	
	if(localStorage.getItem('username') != null) {
		$("#j_username").val(localStorage.getItem('username'));
	}
	$(".menupanel").html(
			'<ul data-role="listview" class="listviewClass">\
			 <li data-icon="false" id="homemenuID" class="active"><a  href="#sectorPage">Home</a></li>\
			 <li data-icon="false"  id="formmenuID" class="active doform"><a  href="#formPage">Add Escalation</a></li>\
			 <li data-icon="false"  class="active cmndashID"><a  href="#cmnDashBoard">Common Dashboard</a></li>\
			 <li data-icon="false"  class="active cmmidashID"><a  href="#cmmiDashBoard">CMMI Dashboard</a></li>\
			 <li data-icon="false" ><a class="menuDisabled" href="#taskPage">Unsubscribe Push Notification</a></li>\
			 <li data-icon="false" ><a class="menuDisabled" href="#helpPage">Help</a></li>\
			 <li data-icon="false" onclick="getFAQs();"><a class="active" href="#">FAQ</a></li>\
			 <li data-icon="false"  ><a class="active isbluegroupuser" href="#"></a></li>\
			 <li data-icon="false" class="active logoutclick" onclick="Authen.performLogout();"><a href="#">Log Out</a></li>\
		  </ul>');
	
	/* juhi */
	
	
	//<li data-icon="false" class="active" onclick="getSecretDataPush()"><a  href="#">Subscribe Push Notification</a></li>\
	
	$("#srchbtn").on("click",function(){
	
		dosearchValid();
		//alert("search");
		
		
	});
	
	 
	
	$(".isbluegroupuser").on("click",function(){
		
		 var menuhtml1=$(this).html().split("<span")[0];
		 if(menuhtml1=="Ask Support"){
			 
			 $(".chatmainheader").html("Ask <br/>Support");
			 isSupportChat=false;
			 getUserChatHistory();
			 
			 
		 }else{
			 $(".chatmainheader").html("Provide <br/>Support");
              getUserRequiestList();
              isSupportChat=true;
			 $.mobile.pageContainer.pagecontainer("change", "#provideSupportid", {
					transition : "slide"
				});
			 
		 }
		 
		
	});
	
	$("#SubmitChatusers").on("click",function(){
		
		  submitUserQuery();
		
	});
	
	
 
	
	
	
	$( "#txtquerytosubmit" ).keyup(function() {
		  //console.log( $(this).val());
		  var cmntvalue=$(this).val().trim();
		  if(cmntvalue == ""){
			  
			  $("#SubmitChatusers").attr("disabled", true);
			 }else{
				 
				 $("#SubmitChatusers").removeAttr("disabled");
			 }
		  
		});
	
	
	
	
	
	$(".askedsupportuserslistclick").on("click",function(){
		
		 
		
	});
	
	$('#usersListforProvideSupport').on('click', 'li a', function () {
		selusersforrespo=$(this).html().split("<")[0];
		
		  getUsersRequestDetails();
	});
	function dosearchValid(){
		
		 searchTextVal=$("#srchtext").val().trim();
		//console.log("srchtext.length "+searchTextVal.length);
		if(searchTextVal.length < 3){
			
			alert("Please enter minimum 3 characters", null, Messages.application_title,"OK");
			return false;
		}else{
			
			
			doSearch(searchTextVal);
			//alert("Search done");
		}
	 
	}
	
	$(".sectorgrids").on("click", function(){
		$("#SectorResultList").empty();
	    selSector=$(this).attr("id");
	    var pageheading="";
	   
	   if(selSector=="COMMPage"){
		   pageheading = "COMMUNICATION";
		   selSectorValue=1;
	   } else  if(selSector=="DISTPage"){
		   pageheading = "DISTRIBUTION";
		   selSectorValue=2;
	   } else  if(selSector=="FSSPage"){
		   pageheading="FINANCIAL";
		   selSectorValue=3;
	   } else  if(selSector=="IGAPage"){
		   pageheading = "IGA";
		   selSectorValue=4;
	   } else  if(selSector=="INDUSPage"){
		   pageheading = "INDUSTRIAL";
		   selSectorValue=5;
	   } else  if(selSector=="PUBLICPage"){
		   pageheading = "PUBLIC";
		   selSectorValue=6;
	   } else if(selSector=="CROSSSECTPage"){
		   pageheading = "CROSS SECTOR";
		   selSectorValue=7;
	   }
	   
	   $("#sectorResultPage .DEsubheader h2").html(pageheading);
	  // var selectedstatus=document.getElementById('StatusSelect1').value;
	   if(flag==1){
		   $('#checkboxlist input[type=checkbox]').prop('checked',false).checkboxradio('refresh');  
	   }
	   $('#filtericon').removeClass('fullfilter');
		$('#filtericon').addClass('emptyfilter');
	   BonD.busierShow('login', Messages.loading_indicator_title);
		
	   var invocationData = {
				adapter : 'formAdapter',
				procedure : 'procedurec',
				parameters : []
			};
		
		
		
		WL.Client.invokeProcedure(invocationData, {
			onSuccess : getSuccess,
			onFailure : getFailure
		});	
		
	});
		
		$(".backlanding").on("click",function(){
			
			
			
			
			 
				
				/*WL.Client.reloadApp();
				$.mobile.pageContainer.pagecontainer("change", "#login", {
					transition : "slide"
				});
				*/
				Authen.performLogout();
				
		 
			
			
		});
		
	/*	$(document).on("pageshow","#sectorPage",function(){  
*/
			
		
		$(document).on("tap", ".doSectorDetials", function(){
			$("#detailPageDiv").empty();
			//console.log("sector details");
			var idindex=$(this).attr("id");
			doSectorDetialsfun(parseInt(idindex));
			
			
		});
			
		
		 
			
			$(document).on("tap", ".doform", function(){
				
				//alert();
				
				//alert($(this).hasClass("doform"),"DE Alert",null,"OK");
				
				getFormdata();
				
				
			});
			
			
			
			

			$(document).on("tap", ".updateform", function(){
				 
				getUpdateFormdata();
				
				
			});
			
			$(document).on("tap","#SubmitBtn2",function(){

				var updates1=$("#Updates1").val();
				 // alert(updates1);
			    var notify1;
					if ($("#notify1").is(":checked"))
					{
					  notify1='Y';
					}
					else{
						notify1='N';
					}
				 //alert(notify1);
				var additional1=$("#additional1").val();
				//alert(additional1);

				//var sequence=sequenceParticularUomId+1;
				//alert(sequence);
				//var updatedBy="ankit";
			//	var curdate=;//"2015-04-08";
			   
			    var updatedtime=getCurrentTimeFormated(new Date());
			   // alert(updatedtime);
				insertFormToUomDetails(updates1,additional1,notify1,updatedtime);

			});
			
	
	});
	

function getCurrentTimeFormated(ctime){
	
	var cmont=(ctime.getMonth()+1);
	var cdate=(ctime.getDate());
	var datetext = ctime.toTimeString();
	 
	datetext = datetext.split(' ')[0];
	//var curtime = moment(ctime).format('hh:mm:ss');
	var updatedtime=ctime.getFullYear()+"-"+((cmont<10?"0"+cmont:cmont))+"-"+((cdate<10?"0"+cdate:cdate));
	return updatedtime+" "+datetext;
    
	
}

function insertFormToUomDetails(updates1,additional1,notify1,timestamp){

//alert(uomName+(sequenceParticularUomId+1)+updates1+additional1+notify1+loggedInUser+timestamp);
	  BonD.busierShow('login', Messages.loading_indicator_title);
		
	var invocationData = {
			adapter : 'formAdapter',
			procedure : 'insertUomDetails',
			parameters : [uomId,(sequenceParticularUomId+1),updates1,additional1,notify1,loggedInUser,timestamp]
		};
	
	

		WL.Client.invokeProcedure(invocationData, {
			onSuccess : insertFormToUomDetailsSuccess,
			onFailure : insertFormToUomDetailsFailure
		});	

		function insertFormToUomDetailsSuccess(response){
			BonD.busierHide('login');
//			alert("Data updated successfully","DE Alert",null,"OK");
			$("#Updates1").val("");
			$("#notify1").val("");
			var notiftext="Escalation Updates";
			if(notify1=='Y'){
				
				
			
				 notiftext = "Escalation Updates: "+updates1;
				
			}
			sendNotification(additional1,notiftext);
			updatesform(uomId);
			UpdateFormToUomHeader(uomId);
			$.mobile.pageContainer.pagecontainer("change", "#detailPage", {
				transition : "slide"
			});
			return false;
		}
		function insertFormToUomDetailsFailure(response){
			//alert("Failed to submit data");
			BonD.busierHide('login');
			alert("Failed to submit data","DE Alert",null,"OK");
			
		}
}
function UpdateFormToUomHeader(uomId){

	//alert(uomName+(sequenceParticularUomId+1)+updates1+additional1+notify1+loggedInUser+timestamp);
		  BonD.busierShow('login', Messages.loading_indicator_title);
		  var Escalation_StatusSelect = $("#Escalation_StatusSelect").val();	
		var invocationData = {
				adapter : 'formAdapter',
				procedure : 'updateUomESCHeader',
				parameters : [Escalation_StatusSelect,uomId]
			};
		
		

			WL.Client.invokeProcedure(invocationData, {
				onSuccess : updateFormToUomheaderSuccess,
				onFailure : updateFormToUomheaderFailure
			});	

			function updateFormToUomheaderSuccess(response){
				BonD.busierHide('login');
				alert("Data updated successfully","DE Alert",null,"OK");
				var notiftext="Escalation Updates";
				
				if(notify1=='Y'){
					
					
				
					 notiftext = "Escalation Updates: "+updates1;
					
				}
				sendNotification(additional1,notiftext,Escalation_StatusSelect);
				updatesform(uomId);
				
				$.mobile.pageContainer.pagecontainer("change", "#detailPage", {
					transition : "slide"
				});
				return false;
			}
			function updateFormToUomheaderFailure(response){
				//alert("Failed to submit data");
				BonD.busierHide('login');
				alert("Failed to submit data","DE Alert",null,"OK");
				
			}
	}

		
	
	
	
function getSuccess(response){
	var set = response.invocationResult.resultSet;
	
	
	var tempEscalated = [];
	var tempTroubled = [];
	var tempPotential = [];
	var tempWarning = [];
	var tempOthers = [];
	
	allSectorDetails=set;
	
	
	$(set).each(function( i, item) {
		//var innerImgHtml="";
		if(item.SECTOR_ID==selSectorValue){

	
			var escstatus=item.ESCALATION_STATUS.trim().toUpperCase();
			var trbstatus=item.TROUBLED_STATUS.trim().toUpperCase();
			
			if (escstatus=="ESCALATED"){
				tempEscalated.push(item);
			}
			else if (trbstatus=="TROUBLED"){
				tempTroubled.push(item);	
				} 
			else if (escstatus=="POTENTIAL"){
				tempPotential.push(item);
			}
			else if (trbstatus=="EARLY WARNING"){
				tempWarning.push(item);
			}
			else if(escstatus!="ESCALATED" && trbstatus!="TROUBLED" && escstatus!="POTENTIAL" && trbstatus!="EARLY WARNING"){
				tempOthers.push(item);
			}
			
		}
		
	});
	
	
			allprojects = tempEscalated.concat(tempTroubled,tempPotential,tempWarning,tempOthers);
			
			$(allprojects).each(function(i,item){
				
				var innerImgHtml="";
				if(item.SECTOR_ID==selSectorValue){
				var escstatus=item.ESCALATION_STATUS.trim().toUpperCase();
				var trbstatus=item.TROUBLED_STATUS.trim().toUpperCase();
		//	console.log("rs " +JSON.stringify(item));
				
			
		if((trbstatus=="TROUBLED")&&(escstatus!="")){
			
			innerImgHtml='<img src="images/exclaimationRed.PNG" style="float:left; padding-right:10px" />';
		}
		else if((trbstatus=="TROUBLED")&&(escstatus=="")){
			
			innerImgHtml='<img src="images/exclaimationRed.PNG" style="float:left; padding-right:10px" />';
		}
		
        else if(escstatus=="ESCALATED"){
			
			innerImgHtml='<img src="images/exclaimationRed.PNG" style="float:left; padding-right:10px" />';
		}
       
     
        else if((trbstatus=="EARLY WARNING")&&(escstatus!="")){
			
			innerImgHtml='<img src="images/exclaimationOrange.PNG" style="float:left; padding-right:10px" />';
		}
        else if((trbstatus=="EARLY WARNING")&&(escstatus=="")){
        	
			innerImgHtml='<img src="images/exclaimationOrange.PNG" style="float:left; padding-right:10px" />';
		}
		
        
        else if((trbstatus!="TROUBLED")&&(trbstatus!="EARLY WARNING")){
        	if(escstatus=="POTENTIAL"){
        		innerImgHtml='<img src="images/exclaimationOrange.PNG" style="float:left; padding-right:10px" />';
        	}
        	else if(escstatus=="CLOSED"){
        		innerImgHtml='<img src="images/exclaimationGREEN.PNG" style="float:left; padding-right:10px" />';
        	}
        	else if(escstatus==""){
        		
        		innerImgHtml='<img src="images/exclaimationGREEN.PNG" style="float:left; padding-right:10px" />';
        	}
        }
			
			
			
			
					$("#SectorResultList").append('<li class="detailsView"><a href="#detailPage" class="doSectorDetials" id="'+i+'"><div class="styles"><strong>'
											+item.UOM_NAME+'</strong>'+'<p style="line-height: 22px;">'+item.SERVICE_LINE
											+innerImgHtml
											+'</p>'+'<p><strong style="color:blue;">GDC_PAL:</strong> '+item.GDC_PAL+'</p>'+'<p><strong style="color:blue;">GDC_PM:</strong> '
											+item.GDC_PM+'</p></div>'
											+'</a></li>');
			
			/*var projects = [];
			$(projects).append('<li class="detailsView"><a href="#detailPage" class="doSectorDetials" id="'+i+'"><div class="styles"><strong>'
					+item.UOM_NAME+'</strong>'+'<p style="line-height: 22px;">'+item.SERVICE_LINE
					+innerImgHtml
					+'</p>'+'<p>GDC_PAL: '+item.GDC_PAL+'</p>'+'<p>GDC_PM: '
					+item.GDC_PM+'</p></div>'
					+'</a></li>');
					if (escstatus=="")
					
					
			
		*/	
				}			
					
		
		
		
	}); 
	
	BonD.busierHide('login');
	$("#SectorResultList").listview("refresh");
	
	
	
	
}
function doSectorDetialsfun(indexsect){
	
	//console.log(JSON.stringify(allSectorDetails));
$.mobile.pageContainer.pagecontainer("change", "#detailPage", {
	transition : "slide"
});
	var item=allprojects[indexsect];
	//alert("ff");
	var innerImgHtml="";
	//item.ESCALATION_STATUS="";
	var detailescStatus="";
	var detailtrbStatus="";
	
	var escstatus=item.ESCALATION_STATUS.trim().toUpperCase();
	var trbstatus=item.TROUBLED_STATUS.trim().toUpperCase();
	
//	console.log("rs " +JSON.stringify(item));
			if((trbstatus=="TROUBLED")&&(escstatus!="")){
				detailescStatus=item.ESCALATION_STATUS.toUpperCase().trim();
				detailtrbStatus=item.TROUBLED_STATUS.toUpperCase().trim();
			innerImgHtml='<img src="images/exclaimationRed.PNG" style="float:left; padding-right:10px" />';
		}
		else if((trbstatus=="TROUBLED")&&(escstatus=="")){
			detailescStatus='NONE';
			detailtrbStatus=item.TROUBLED_STATUS.toUpperCase().trim();
			innerImgHtml='<img src="images/exclaimationRed.PNG" style="float:left; padding-right:10px" />';
		}
		
        else if(escstatus=="ESCALATED"){
        	if(trbstatus==""){
        		detailtrbStatus='NONE';
        		detailescStatus=item.ESCALATION_STATUS.toUpperCase().trim();
            	innerImgHtml='<img src="images/exclaimationRed.PNG" style="float:left; padding-right:10px" />';	
        	} else if(trbstatus!=""){
        		detailtrbStatus=item.TROUBLED_STATUS.toUpperCase().trim();
        		detailescStatus=item.ESCALATION_STATUS.toUpperCase().trim();
        		innerImgHtml='<img src="images/exclaimationRed.PNG" style="float:left; padding-right:10px" />';
        	}
			
			
		}
       
     
        else if((trbstatus=="EARLY WARNING")&&(escstatus!="")){
        	detailescStatus=item.ESCALATION_STATUS.toUpperCase().trim();
        	detailtrbStatus=item.TROUBLED_STATUS.toUpperCase().trim();
			innerImgHtml='<img src="images/exclaimationOrange.PNG" style="float:left; padding-right:10px" />';
		}
        else if((trbstatus=="EARLY WARNING")&&(escstatus=="")){
        	detailescStatus='NONE';
        	detailtrbStatus=item.TROUBLED_STATUS.toUpperCase().trim();
			innerImgHtml='<img src="images/exclaimationOrange.PNG" style="float:left; padding-right:10px" />';
		}
		
        
        else if((trbstatus!="TROUBLED")&&(trbstatus!="EARLY WARNING")){
        	if(trbstatus==""){
        		if(escstatus=="POTENTIAL"){
        			detailtrbStatus='NONE';
        			detailescStatus=item.ESCALATION_STATUS.toUpperCase().trim();
        		innerImgHtml='<img src="images/exclaimationOrange.PNG" style="float:left; padding-right:10px" />';
        	}
        		else if(escstatus=="CLOSED"){
        			detailtrbStatus='NONE';
        			detailescStatus=item.ESCALATION_STATUS.toUpperCase().trim();
        		innerImgHtml='<img src="images/exclaimationGREEN.PNG" style="float:left; padding-right:10px" />';
        	}
        		else if(escstatus==""){
        			detailescStatus='NONE';
        			detailtrbStatus=item.TROUBLED_STATUS.toUpperCase().trim();
        		innerImgHtml='<img src="images/exclaimationGREEN.PNG" style="float:left; padding-right:10px" />';
        	}
        	}
        	else if(trbstatus!=""){
        		if(escstatus=="POTENTIAL"){
        			detailescStatus=item.ESCALATION_STATUS.toUpperCase().trim();
        			detailtrbStatus=item.TROUBLED_STATUS.toUpperCase().trim();
            		innerImgHtml='<img src="images/exclaimationOrange.PNG" style="float:left; padding-right:10px" />';
            	}
            		else if(escstatus=="CLOSED"){
            			detailescStatus=item.ESCALATION_STATUS.toUpperCase().trim();
            			detailtrbStatus=item.TROUBLED_STATUS.toUpperCase().trim();
            		innerImgHtml='<img src="images/exclaimationGREEN.PNG" style="float:left; padding-right:10px" />';
            	}
            		else if(escstatus==""){
            		detailescStatus='NONE';
            		detailtrbStatus=item.TROUBLED_STATUS.toUpperCase().trim();
            		innerImgHtml='<img src="images/exclaimationGREEN.PNG" style="float:left; padding-right:10px" />';
            	}
        		
        	}
        }
	
	//console.log(JSON.stringify(item));
	//console.log("list click");
	var d = new Date(item.IDENTIFIED_ON);
	$("#uomNameDiv").html("<h2 style='padding: 10px !important; font-size: 12px !important;'>"+item.UOM_NAME+"</h2>");
	//item.IDENTIFIED_ON
	$("#detailPageDiv").html("<li style='padding:20px;line-height:25px;'><p><strong>"+item.SERVICE_LINE+"</strong></p><p><strong style='color:blue;'>PAL:</strong>  "+item.GDC_PAL+"</p><p><strong style='color:blue;'>PM:</strong>  "+item.GDC_PM+"</p><p style='font-size:.9em';><strong style='color:blue;'>ESCALATED STATUS:</strong>  "+detailescStatus.toUpperCase().trim()+innerImgHtml+"</p><p style='font-size:.9em';><strong style='color:blue;'>TROUBLED STATUS: </strong> "+detailtrbStatus.toUpperCase().trim()+"</p><p style='font-size:.9em';><strong style='color:blue;'>IDENTIFIED:</strong>"+d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate()+"</p></li>");
	$("#concerns").html("CONCERN:  "+item.CONCERNS);
	
	$("#loggeduser").html(item.UPDATED_BY);
	//alert("welcome :"+loggedInUser);
	//$("#detailPageDiv").listview("refresh");
	 uomId = item.UOM_ID ; 
	 uomName=item.UOM_NAME;
	 uomEscStatus=escstatus;
	//	alert(uomId);
	 updatesform(uomId);

	 
}
	
function updatesform(uomId){
	 BonD.busierShow('login', Messages.loading_indicator_title);
	
	var invocationDataUpdate = {
			adapter : 'formAdapter',
			procedure : 'procedureAll',
			parameters : [uomId]
		};



	WL.Client.invokeProcedure(invocationDataUpdate, {
		onSuccess : getUpdate,
		onFailure : getFailure
	}); 
	
}


function getUpdate(response){
	$("#updateList").empty();
//	alert("in update success");

	var set = response.invocationResult.resultSet;
  // alert(set); 
	sequenceParticularUomId=set.length;
	for(var i=0;i< set.length;i++){
		var t = new Date(set[i].UPDATED_TIMESTAMP);
		$("#updateList").append("<li><p><span>From<b> "+set[i].UPDATED_BY+"</b></span><span>  on "+t.getFullYear()+"/"+(t.getMonth()+1)+"/"+t.getDate()+"</span></p><p><b>"+set[i].UPDATES+"</b></p></li><hr>");	
	}
	BonD.busierHide('login');
	//$("#updateList").listview("refresh");

	$("#detailPage").trigger('pagecreate');
}




function getFailure(response){
BonD.busierHide('login');
alert("Failed to load data","DE Alert",null,"OK");

	
}




function getAccountbal1Success(response) {

			var set = response.invocationResult.resultSet;
		//	alert(set);
			for(var i=0; i<set.length; i++){
				sector =set[i].SECTOR_ID;
	

				  if (sector==4){

					   countIGA+=1;
				} else if (sector==3){
						countFin+=1;
				}else if (sector==2){
						countDist+=1;
				}else if (sector==5){
						countInd+=1;
				}else if (sector==6){
						countPublic+=1;
				}else if (sector==1){
						 countComm+=1;
				}
			//changes by Saurabh
				else if (sector==7){
						countCross+=1;
				}
					 
					 
				 						

			}	

		//		  alert("IGA=" + countIGA +" Financial=" + countFin +" Distribution=" + countDist +" Industrial=" + countInd +" Public=" + countPublic + " Communications=" + countComm);

		if(countComm>0){

			$("#Comm span").text(countComm);
			$("#Comm").show();
		}
		else{
			$("#Comm").hide();
		}
		if(countDist>0){
			$("#Dist span").text(countDist);
			$("#Dist").show();
		}
		else{
			$("#Dist").hide();
		}
		if(countFin>0){

			$("#FSS span").text(countFin);
			$("#FSS").show();
		}
		else{
			$("#FSS").hide();
		}
		if(countIGA>0){

			$("#IGA span").text(countIGA);
			$("#IGA").show();
		}
		else{
			$("#IGA").hide();
		}
		if(countInd>0){

			$("#Indus span").text(countInd);
			$("#Indus").show();
		}else{
			$("#Indus").hide();	
		}
		if(countPublic>0){

			$("#Public span").text(countPublic);
			$("#Public").show();
		}else{
			$("#Public").hide();
		}
		if(countCross>0){

			$("#Cross span").text(countCross);
			$("#Cross").show();
		}else{
			$("#Cross").hide();
		}



		countIGA=0,countFin=0,countDist=0,countInd=0,countPublic=0,countComm=0,countCross=0; //changes by saurabh	
		BonD.busierHide('login');
       //console.log(set);
}


function getAccountbal1failure(response) {
BonD.busierHide('login');
alert("Failed to get updates","DE Alert",null,"OK");

}
	

function getbadgeCount(){

//console.log("getting counts");
BonD.busierShow('login', Messages.loading_indicator_title);

var invocationData = {
adapter : 'formAdapter',
procedure : 'procedurea',
parameters : []
};

WL.Client.invokeProcedure(invocationData, {
onSuccess : getAccountbal1Success,
onFailure : getAccountbal1failure
});

}
/*************************************************************************************************************************************/
/*FORM PAGE JS*/


/*
form data*/

function getFormdata(){
BonD.busierShow('login', Messages.loading_indicator_title);
//console.log("getting form data");
var invocationData = {
	adapter : 'formAdapter',
	procedure : 'procedure1',
	parameters : []
};

WL.Client.invokeProcedure(invocationData, {
	onSuccess : getSectorSuccess,
	onFailure : getSectorfailureMain
});

/*	var invocationData1 = {
		adapter : 'formAdapter',
		procedure : 'procedure2',
		parameters : []
	};

	WL.Client.invokeProcedure(invocationData1, {
		onSuccess : getSectorSuccess1,
		onFailure : getSectorfailure
	});	

*/


}


function getSectorSuccess(response){
var set = response.invocationResult.resultSet;
sectorlSelectList=set;
$("#SectorSelect").empty();
$("#SectorSelect").append($('<option>', {
   value: "",
   text: "Select Sector"
}));
	//alert(set);
	for(var i=0; i<set.length; i++){
		sectorName =set[i].SECTOR_NAME;
		sectorId= set[i].SECTOR_ID;
	//  alert(sectorName + sectorId);

	  $("#SectorSelect").append($('<option>', {
		    value: sectorId,
		    text: sectorName
		}));

	}
	BonD.busierHide('login');
	$('#SectorSelect').selectmenu().selectmenu('refresh');
	//BonD.busierHide('login');
		  /*1. Communications
		  2. Distribution
		  3. Financial
		  4. IBM Global Account
	  5. Industrial
		  6. Public*/
}

/*function getSectorSuccess1(response){
var set = response.invocationResult.resultSet;
UomSelectList=set;
	//alert(set);
	for(var i=0; i<set.length; i++){
		UomName =set[i].UOM_NAME;
		UomId= set[i].UOM_ID;
	//  alert(sectorName + sectorId);

	  $("#UoMSelect").append($('<option>', {
		    value: UomId,
		    text: UomName
		}));

	}
}*/

function getSectorfailureMain(){
BonD.busierHide('login');
//alert("");
alert("Failed to get Data","DE Alert",null,"OK");
}

/*
update form data*/


function getUpdateFormdata(){



//alert("sequenceParticularUomId" +sequenceParticularUomId);
// alert("uomName "+uomName);
$(".uomName123").html(uomName);

if(uomEscStatus==""){
	
	uomEscStatus="NONE";
}

$("#Escalation_StatusSelect").val(uomEscStatus);
var invocationData2 = {
		adapter : 'formAdapter',
		procedure : 'procedureadditional',
		parameters : []
	};

	WL.Client.invokeProcedure(invocationData2, {
		onSuccess : function(res){
			var resultset=res.invocationResult.resultSet;
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
			$("#additional1").val(names);
			
		},
		onFailure : function(reserro){
			
			
		}
	});	
	//$('#detailPage').trigger('create'); 
	$('#Escalation_StatusSelect').selectmenu('refresh');




}

function getFAQs(){

if(!faqResult){
BonD.busierShow('login');
var invocationDataMax = {
adapter : 'DEalertFAQ',
procedure : 'getDEFAQs',
parameters : ['DEALERT']
};

WL.Client.invokeProcedure(invocationDataMax, {
onSuccess : getFAQSuccess,
onFailure : getFAQFailure
});

}
else{
	$.mobile.pageContainer.pagecontainer("change", "#FAQPage", {
		transition : "slide"
	});
	
}



}

var deFAQData={};
var faqResult=false;

function getFAQSuccess(result){
BonD.busierHide('login');
//console.log(JSON.stringify(result));
//alert(Messages.please_check_connection, null, Messages.application_title);
if(result.invocationResult.questions){
	deFAQData=result.invocationResult.questions;
	//console.log(JSON.stringify(myPocketData[0]));
	// console.log(JSON.stringify(deFAQData));
	isserach=false;
	 createFAQpage(deFAQData);
	   

}
}

function getFAQFailure(response){
	alert("No network found.");
BonD.busierHide('login');
//createcmnCollpPage(staticData.myPocketData[0].getstarted);
alert(Messages.please_check_connection, null, Messages.application_title,"OK");
}
var mailContentMain="";
function createFAQpage(data){
mailContentMain="";

if(isserach){
	
	faqResult=false;
}else{
	

faqResult=true;
}


//console.log("inside create col list");
$("#FAQdatacolset").empty();
$("#FAQdatacolset").html("");
//alert(data.length);
//alert(JSON.stringify(data));
var taclass="";

$(data).each(function( index ,item) {

var mailContent="";
var inHtml="";

	 mailContent+='<h3>'+item.name+'</h3>';
	 inHtml='<div data-role="collapsible" ><h3 class="decolmain">'+item.name+'</h3><div data-role="collapsibleset" data-theme="a" data-content-theme="a"\
	data-collapsed-icon="arrow-rs" data-expanded-icon="arrow-ds" class="cmnCollapsibleContent"'+index+'>';
	



$(item.data).each(function( indexin ,itemin) {
	var colInContent=itemin.ans.split("@&");
	inHtml+='<div id="subcol"+'+indexin+' data-role="collapsible">\
		     <h3>'+ itemin.key + '</h3>';
	 mailContent+='<h4>'+itemin.key+'</h4><ol>';
	 
	$(colInContent).each(function( indexc ,itemc) {
		   
		
			var headContent="";
			var colcontentdata="";
			if(itemc.indexOf("::") > -1){
				 headContent=itemc.split("::")[0];
				 colcontentdata=itemc.split("::")[1];
				// colcontentdata=replaceURLWithHTMLLinks(itemin.split("::")[1]);
				 mailContent+='<li><b>'+headContent+':--></b><p>'+colcontentdata+'</p></li>';
				 inHtml+='<span class="calSubheading">'+headContent+'</span><p class="bulletimage">'+colcontentdata+'</p>';
			}
			
			else{  
				 mailContent+='<li><p>'+itemc+'</p></li>';
			   inHtml+='<p class="bulletimage '+taclass+'">'+itemc+'</p>';
		  
		   }
			
		});
	inHtml+='</div>';
mailContent+='</ol>';
//$("#subcol"+'+indexin+').collapsible().trigger("create");;
	
	
});

	
	 					
inHtml+='</div></div>';
	
	

mailContentMain+=mailContent;


//console.log("innder html >>> "+inHtml);


	





//$(".cmnCollapsibleContent"+index).collapsible();
//$(".cmnCollapsibleContent"+index).collapsible().trigger("create");
//var content = "<div data-role='collapsible' ><h3>" + item.key + "</h3><p>I am the collapsible content in a set so this feels like an accordion. I am hidden by default because I have the 'collapsed' state; you need to expand the header to see me.</p></div>";
$("#FAQdatacolset").append( inHtml );

// console.log("mailContent" +mailContent);

$(".cmnCollapsibleContent"+index).collapsible().trigger("create");
$('#FAQPage').trigger('create'); 

});


//changePage("#",false);
$.mobile.pageContainer.pagecontainer("change", "#FAQPage", {
transition : "slide"
});
//alert(Messages.please_check_connection, null, Messages.application_title);

BonD.busierHide('login');
}

$(".mailButton").on("click",function(){

//alert("send mail");
//Authen.logout();
sendMail();

});



function sendMail(){
BonD.busierShow('login');
var subject="DE Alerts FAQ's";
mailContentMain+='<br/><br/><br/>Thanks and Regards<br/><h3 style="color:#029acc;">DE FAQ</h3>';
var data = {
	adapter: "SendEmailAdapter",
	procedure: 'sendMail',
	parameters: [loggedInUser,loggedInUser,subject,mailContentMain]
};
var options = {
onSuccess: function(result){
	//alert(JSON.stringify(result))	;	
	BonD.busierHide('login');
	alert(subject +" details email has been sent", null, Messages.application_title,"OK");
	
},
onFailure: function(err){
	BonD.busierHide('login');
	//console.error("Error calling SendEmailAdapter",JSON.stringify(err));
	alert(subject +" details email has been sent", null, Messages.application_title,"OK");
				
	// alert("Error while sending email", null, Messages.application_title,"OK");
}
};

WL.Client.invokeProcedure(data,options);
}

var SerchReslutList={};
var SerchReslutListsub=[];

SerchReslutList.data=[];
var isserach=false;
function doSearch(searchTextValParm){
SerchReslutListsub=[];
//myPocketData1

//faqResult=false;
SerchReslutList.name="Search Result for "+searchTextValParm;

//var PocketListSrch=myPocketData1.invocationResult.myPocketData;
$(deFAQData).each(function(sin ,item) {
	

	
	
	$(item.data).each(function(sinin ,itemin) {
		
		  var newPair=item.name+" "+itemin.key+" "+itemin.ans;
		   var matches=newPair.toLowerCase().indexOf(searchTextValParm.toLowerCase());
		 //  console.log('newPair ' + newPair);
		 //  console.log('matches ' + matches);
			if(matches > -1 ){
				
				//console.log("match found");
				
				SerchReslutListsub.push(itemin);
			//	alert("adding insed");
				
			}
		
		
		
	});
	
	SerchReslutList.data=SerchReslutListsub;
	
});
	

	
//console.log("reslut found "+SerchReslutListsub.length);
isserach=true;
if(SerchReslutListsub.length){
	$(".cmnHeaderSearch").show(300);
	createFAQpage(SerchReslutList); 
	 $(".pageHeading").html(" Search Results for "+searchTextValParm);
}else{
	createFAQpage(SerchReslutList); 
	 $(".cmnHeaderSearch").show(300);
	 $(".pageHeading").html("No Result found for "+searchTextValParm );
	
}
}

function formpagevalidate(){
var username=$('#j_username').val();
//var username='tarun.bandyopadhyay@in.ibm.com';
var invocationData = {
       adapter : 'formAdapter',
       procedure : 'checkifpm',
       parameters : [username]
};

WL.Client.invokeProcedure(invocationData, {
   onSuccess : getformpagevalidate,
   onFailure : getformvalidatefail
});

}
function getformpagevalidate(response){
var invocationresult=response.invocationResult;
var resultset=invocationresult.resultSet;
var length=resultset.length;
if(length==0){
	ispm=false;
}
else{
	ispm=true;
	}
}
function getformvalidatefail(response){
	BonD.busierHide('login');
alert("failed in validating if PM", null, Messages.application_title,"OK");


}




function searchbyproject(projectname){
$("#SectorResultList").empty();

var invocationData = {
		adapter : 'formAdapter',
		procedure : 'procedurepn',
		parameters : [projectname]
	};



WL.Client.invokeProcedure(invocationData, {
	onSuccess : getpnSuccess,
	onFailure : getFailure
});	
}
function getpnSuccess(response){
var set = response.invocationResult.resultSet;
allSectorDetails=set;
if(flag==1){
	   $('#checkboxlist input[type=checkbox]').prop('checked',false).checkboxradio('refresh');  
  }
  $('#filtericon').removeClass('fullfilter');
	$('#filtericon').addClass('emptyfilter');
if(set.length==0){
	$("#SectorResultList").append('<p style="line-height: 22px;">No Matches Found</p>');	
}
else{
	
selSectorValue=set[0].SECTOR_ID;
$(set).each(function( i, item) {
	var innerImgHtml="";
	
		//console.log("rs " +JSON.stringify(item));
		if(item.ESCALATION_STATUS=="POTENTIAL"){
			
			innerImgHtml='<img src="images/exclaimationOrange.PNG" style="float:left; padding-right:10px" />';
		}else if(item.ESCALATION_STATUS=="ESCALATED"){
			
			innerImgHtml='<img src="images/exclaimationRed.PNG" style="float:left; padding-right:10px" />';
		}else if(item.ESCALATION_STATUS=="CLOSED"){
			
			innerImgHtml='<img src="images/exclaimationGREEN.PNG" style="float:left; padding-right:10px" />';
		}else if(item.TROUBLED_STATUS=="TROUBLED"){
			
			
				innerImgHtml='<img src="images/exclaimationRed.PNG" style="float:left; padding-right:10px" />';	
			
		}
		
		
		$("#SectorResultList").append('<li class="detailsView"><a href="#" class="doSectorDetials" id="'+i+'"><div class="styles"><strong>'
										+item.UOM_NAME+'</strong>'+'<p style="line-height: 22px;">'+item.SERVICE_LINE
										+innerImgHtml
										+'</p>'+'<p>GDC_PAL: '+item.GDC_PAL+'</p>'+'<p>GDC_PM: '
										+item.GDC_PM+'</p></div>'
										+'</a></li>');
		
	
	
	
});
}
$.mobile.changePage( "#sectorResultPage",{ 
	allowSamePageTransition : true,
     transition              : 'none',
     showLoadMsg             : false,
     reloadPage              : false});

BonD.busierHide('login');
$("#SectorResultList").listview("refresh");




}


function getuomnames(){
var invocationData={
		adapter : 'formAdapter',
		procedure : 'procedureuomnames',
		parameters : []
		
};
WL.Client.invokeProcedure(invocationData, {
	onSuccess : getprojectnameSuccess,
	onFailure : getprojnameFailure
});	

}
function getprojectnameSuccess(response){
var resultset=response.invocationResult.resultSet;
var length=resultset.length;
var ul=document.getElementById('projectnames');

for(var i=0;i<length;i++){
	var li=document.createElement('li');
	var a =document.createElement('a');
	a.setAttribute('href',"#");
	a.setAttribute('id','uomnames'+(i+1));
	a.setAttribute('onclick','assigntext(id);');
	a.innerHTML = resultset[i].UOM_NAME;
	li.appendChild(a);
	ul.appendChild(li);
}
}
function getprojnameFailure(response){
	BonD.busierHide('login');
alert("Failed to get data","DE Alert",null,"OK");
}
function assigntext(id){
$('input[data-type="search"]').val('');
$('input[data-type="search"]').trigger("keyup");
var value=document.getElementById(id).innerHTML;
searchbyproject(value);
}
$(document).on( 'pageinit',function(event){
$('input[data-type="search"]').bind('keypress',(function(e){
$("#projectnames").show();
}));
});
function selectedlist(){
$("#SectorResultList").empty();
var allVals = [];
$('#checkboxlist :checked').each(function() {
      allVals.push($(this).val());
    });
if(allVals.length>0){
	flag=1;
	$('#filtericon').removeClass('emptyfilter');
	$('#filtericon').addClass('fullfilter');
	for(var i=0;i<allVals.length;i++){
		for(var j=0;j<allprojects.length;j++){
			
				var innerImgHtml="";
				
				if(allprojects[j].SECTOR_ID==selSectorValue){
					//console.log("rs " +JSON.stringify(allSectorDetails));
					if(allprojects[j].ESCALATION_STATUS.toUpperCase().trim()==allVals[i]){
						if(allprojects[j].ESCALATION_STATUS.toUpperCase().trim()=="POTENTIAL"){
							if(allprojects[j].TROUBLED_STATUS.toUpperCase().trim()=="TROUBLED"){
								innerImgHtml='<img src="images/exclaimationRed.PNG" style="float:left; padding-right:10px" />';
							}else if(allprojects[j].TROUBLED_STATUS.toUpperCase().trim()!="TROUBLED"){
								innerImgHtml='<img src="images/exclaimationOrange.PNG" style="float:left; padding-right:10px" />';							
								}
							
							
						}else if(allprojects[j].ESCALATION_STATUS.toUpperCase().trim()=="ESCALATED"){
							
							innerImgHtml='<img src="images/exclaimationRed.PNG" style="float:left; padding-right:10px" />';
						}
						//else if(allSectorDetails[j].ESCALATION_STATUS=="CLOSED"){
							
						//	innerImgHtml='<img src="images/exclaimationGREEN.PNG" style="float:left; padding-right:10px" />';
					//	}
						
						$("#SectorResultList").append('<li class="detailsView"><a href="#" class="doSectorDetials" id="'+j+'"><div class="styles"><strong>'
														+allprojects[j].UOM_NAME+'</strong>'+'<p style="line-height: 22px;">'+allprojects[j].SERVICE_LINE
														+innerImgHtml
														+'</p>'+'<p><strong style="color:blue;">GDC_PAL: </strong>'+allprojects[j].GDC_PAL+'</p>'+'<p><strong style="color:blue;">GDC_PM:</strong> '
														+allprojects[j].GDC_PM+'</p></div>'
														+'</a></li>');
					}
					
					
			
				
				else if(allprojects[j].TROUBLED_STATUS.toUpperCase().trim()==allVals[i]){
					if(allprojects[j].TROUBLED_STATUS.toUpperCase().trim()=="TROUBLED"){
							innerImgHtml='<img src="images/exclaimationRed.PNG" style="float:left; padding-right:10px" />';
						}
					$("#SectorResultList").append('<li class="detailsView"><a href="#" class="doSectorDetials" id="'+j+'"><div class="styles"><strong>'
							+allprojects[j].UOM_NAME+'</strong>'+'<p style="line-height: 22px;">'+allprojects[j].SERVICE_LINE
							+innerImgHtml
							+'</p>'+'<p><strong style="color:blue;">GDC_PAL:</strong> '+allprojects[j].GDC_PAL+'</p>'+'<p><strong style="color:blue;">GDC_PM:</strong> '
							+allprojects[j].GDC_PM+'</p></div>'
							+'</a></li>');
						
						
						
					}
		 

				else  if (allVals[i]=="OTHERS"){
				
					if(allprojects[j].TROUBLED_STATUS.toUpperCase().trim() != "TROUBLED" && allprojects[j].ESCALATION_STATUS.toUpperCase().trim() !=  "ESCALATED" &&  allprojects[j].ESCALATION_STATUS.toUpperCase().trim() != "POTENTIAL" ){
						if((allprojects[j].TROUBLED_STATUS.toUpperCase().trim()=="EARLY WARNING") && (allprojects[j].ESCALATION_STATUS.toUpperCase().trim()=="CLOSED")){
						
						innerImgHtml='<img src="images/exclaimationOrange.PNG" style="float:left; padding-right:10px" />';
						} 
						else if((allprojects[j].TROUBLED_STATUS.toUpperCase().trim()=="EARLY WARNING") && (allprojects[j].ESCALATION_STATUS.toUpperCase().trim()=="")){
							innerImgHtml='<img src="images/exclaimationOrange.PNG" style="float:left; padding-right:10px" />';
						}
						else if((allprojects[j].TROUBLED_STATUS.toUpperCase().trim()!="EARLY WARNING") && (allprojects[j].ESCALATION_STATUS.toUpperCase().trim()=="CLOSED") ){
							innerImgHtml='<img src="images/exclaimationGREEN.PNG" style="float:left; padding-right:10px" />';
						}
						else if((allprojects[j].TROUBLED_STATUS.toUpperCase().trim()!="EARLY WARNING") && (allprojects[j].ESCALATION_STATUS.toUpperCase().trim()=="") ){
							innerImgHtml='<img src="images/exclaimationGREEN.PNG" style="float:left; padding-right:10px" />';
						}
						$("#SectorResultList").append('<li class="detailsView"><a href="#" class="doSectorDetials" id="'+j+'"><div class="styles"><strong>'
								+allprojects[j].UOM_NAME+'</strong>'+'<p style="line-height: 22px;">'+allprojects[j].SERVICE_LINE
								+innerImgHtml
								+'</p>'+'<p><strong style="color:blue;"> GDC_PAL:</strong> '+allprojects[j].GDC_PAL+'</p>'+'<p><strong style="color:blue;">GDC_PM: </strong>'
								+allprojects[j].GDC_PM+'</p></div>'
								+'</a></li>');
					}
					
				
				}
				
				}
	
			$("#SectorResultList").listview("refresh");
		}
	}
	$.mobile.changePage( "#sectorResultPage",{ 
		allowSamePageTransition : true,
	      transition              : 'none',
	      showLoadMsg             : false,
	      reloadPage              : false});
}
else{
	$('#filtericon').removeClass('fullfilter');
	$('#filtericon').addClass('emptyfilter');

	for(var j=0;j<allprojects.length;j++){

	if(allprojects[j].SECTOR_ID==selSectorValue){
		//console.log("rs " +JSON.stringify(allSectorDetails));
		
		var innerImgHtml="";
		//item.ESCALATION_STATUS="";

		var escstatus=allprojects[j].ESCALATION_STATUS.trim().toUpperCase();
		var trbstatus=allprojects[j].TROUBLED_STATUS.trim().toUpperCase();

//		console.log("rs " +JSON.stringify(item));
if((trbstatus=="TROUBLED")&&(escstatus!="")){
			
			innerImgHtml='<img src="images/exclaimationRed.PNG" style="float:left; padding-right:10px" />';
		}
		else if((trbstatus=="TROUBLED")&&(escstatus=="")){
			
			innerImgHtml='<img src="images/exclaimationRed.PNG" style="float:left; padding-right:10px" />';
		}
		
        else if(escstatus=="ESCALATED"){
			
			innerImgHtml='<img src="images/exclaimationRed.PNG" style="float:left; padding-right:10px" />';
		}
       
     
        else if((trbstatus=="EARLY WARNING")&&(escstatus!="")){
			
			innerImgHtml='<img src="images/exclaimationOrange.PNG" style="float:left; padding-right:10px" />';
		}
        else if((trbstatus=="EARLY WARNING")&&(escstatus=="")){
        	
			innerImgHtml='<img src="images/exclaimationOrange.PNG" style="float:left; padding-right:10px" />';
		}
		
        
        else if((trbstatus!="TROUBLED")&&(trbstatus!="EARLY WARNING")){
        	if(escstatus=="POTENTIAL"){
        		innerImgHtml='<img src="images/exclaimationOrange.PNG" style="float:left; padding-right:10px" />';
        	}
        	else if(escstatus=="CLOSED"){
        		innerImgHtml='<img src="images/exclaimationGREEN.PNG" style="float:left; padding-right:10px" />';
        	}
        	else if(escstatus==""){
        		
        		innerImgHtml='<img src="images/exclaimationGREEN.PNG" style="float:left; padding-right:10px" />';
        	}
        }
	
$("#SectorResultList").append('<li class="detailsView"><a href="#" class="doSectorDetials" id="'+j+'"><div class="styles"><strong>'
											+allSectorDetails[j].UOM_NAME+'</strong>'+'<p style="line-height: 22px;">'+allSectorDetails[j].SERVICE_LINE
											+innerImgHtml
											+'</p>'+'<p><strong style="color:blue;">GDC_PAL:</strong> '+allSectorDetails[j].GDC_PAL+'</p>'+'<p><strong style="color:blue;">GDC_PM:</strong> '
											+allSectorDetails[j].GDC_PM+'</p></div>'
											+'</a></li>');
		
		
		
	}
	
//BonD.busierHide('login');
$("#SectorResultList").listview("refresh");
}
	$.mobile.changePage( "#sectorResultPage",{ 
		allowSamePageTransition : true,
	      transition              : 'none',
	      showLoadMsg             : false,
	      reloadPage              : false});
}
}
$("#projectnames li").slice(0,2);