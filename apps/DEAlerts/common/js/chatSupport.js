


var isgroupMem= false;
var isSupportChat=false;
BonD.busierHide('login');

function checkUserinBlueGroup(){
	
	
	var invocationData = {
			adapter : 'bluegroupAdapter',
			procedure : 'checkUserExistance',
			parameters : [loggedInUser,'desupport']
		};

	WL.Client.invokeProcedure(invocationData, {
		onSuccess : checkUserExistanceSuccess,
		onFailure : checkUserExistanceFail
	});
	
	
	
}

function checkUserExistanceSuccess(result){
	
	if(result.invocationResult.group){
		var menhtmlbg="";
		
		if(result.invocationResult.group.msg.toString().toLowerCase()=="success"){
			
			isgroupMem=true;
			menhtmlbg='Provide Support<span class="badge providesuppadbge"></span>';
			countResponsesonQuestions();
			
			
			
		}else{
			isgroupMem=false;
			menhtmlbg= 'Ask Support<span class="mainsupporticon"><img src="images/AskSupport icon.png" class="supporticon"></span>';
			countResponsesonQuestions();
			
			
		}
			
		$(".isbluegroupuser").html(menhtmlbg);
		
	}else{
		
		alert("Unable to get Bluegroup details","DE Alert",null,"OK");
	}
	
	
	
}

function checkUserExistanceFail(result){
	BonD.busierHide('login');
	alert("Unable to get Bluegroup details","DE Alert",null,"OK");
	
}






function countResponsesonQuestions(){
	
	if(isgroupMem==true){
	var invocationData = {
			adapter : 'chatSupportAdapter',
			procedure : 'getRaisedQueryCount',
			parameters : []
		};

	WL.Client.invokeProcedure(invocationData, {
		onSuccess : countResponsesonQuestionsSuccess,
		onFailure : countResponsesonQuestionsFail
	});
	}else if(isgroupMem==false){
		
		var invocationData = {
				adapter : 'chatSupportAdapter',
				procedure : 'countResponses',
				parameters : [loggedInUser]
			};

		WL.Client.invokeProcedure(invocationData, {
			onSuccess : countResponsesonQuestionsSuccess,
			onFailure : countResponsesonQuestionsFail
		});
		
	}
	
	
}






function countResponsesonQuestionsSuccess(result){
	
if(result.invocationResult.resultSet.length){
		
		var targetCountQstns=result.invocationResult.resultSet[0].COUNT;
		if(isgroupMem==true){
			if(targetCountQstns==0){
				$(".providesuppadbge").hide();
			}else{
				
				$(".providesuppadbge").show();
	        	$(".providesuppadbge").html(targetCountQstns);
			}
		
		}else{
			
			if(targetCountQstns!=0){
				
				$(".mainsupporticon").show();
			}else{
				$(".mainsupporticon").hide();
			}
				
		}
		
	} 	
	
	
}

function countResponsesonQuestionsFail(result){
	BonD.busierHide('login');
	alert("Unable to get Chat details","DE Alert",null,"OK");
	
}


 function submitUserQuery(){
	// BonD.busierShow('login');
	 var usertypedchatmsg=$("#txtquerytosubmit").val().trim();;
	 var invocationData;
	 if(!isSupportChat){
		
		 invocationData = {
				adapter : 'chatSupportAdapter',
				procedure : 'InsertRequests',
				parameters : [loggedInUser,usertypedchatmsg]
			};
	 }else{
		 invocationData = {
					adapter : 'chatSupportAdapter',
					procedure : 'updateSupporttoUsers',
					parameters : [selusersforrespo,usertypedchatmsg,loggedInUser]
				};
		 
	 }
		WL.Client.invokeProcedure(invocationData, {
			onSuccess : function(res){
			//	BonD.busierHide('login');
				if(res.invocationResult.updateStatementResult){
					
					var updatec=res.invocationResult.updateStatementResult.updateCount;
					if(updatec != 0){
						
						//alert("Query sent Successfully..!","DE Alert",null,"OK");
						$("#txtquerytosubmit").val("");
						  $("#SubmitChatusers").attr("disabled", true);
						  setUserRespReaded('onlyasubmit');
						getUserChatHistory();
					}else{
						BonD.busierHide('login');
						alert("Failed to Post your Query. Please try again..!","DE Alert",null,"OK");
						
						
					}
				}
				
			},
			onFailure : function(errres){
				BonD.busierHide('login');
				alert("Failed to Post your Query. Please try again..!","DE Alert",null,"OK");
				
			}
		});
		
	 
	 
 }
 
 function getUserChatHistory(){
	 //console.log("getting chatges");
	// BonD.busierShow('login');
	 var invocationData;
	 if(!isSupportChat){
		 invocationData = {
				 adapter : 'chatSupportAdapter',
					procedure : 'ChatHistoryUser',
					parameters : [loggedInUser]
			};
		}else{
			//console.log("selusersforrespo>>"+selusersforrespo);
			 invocationData = {
						adapter : 'chatSupportAdapter',
						procedure : 'getChatHistoryforSupport',
						parameters : [selusersforrespo]
					};
			
		}
	 

		WL.Client.invokeProcedure(invocationData, {
			onSuccess : function(res){
			//	BonD.busierHide('login');
				var historyresultset;
				var chatlisthtml="";
				if(res.invocationResult.resultSet.length){
					
					  historyresultset=res.invocationResult.resultSet;
					
					var isuserspostornot="";
					$(historyresultset).each(function( i, item) {
						 if(!isSupportChat){
							 $(".backfromsupportchat").attr("href","#sectorPage");
							 
							if(loggedInUser.trim()==item.FROM_ID.trim()){
								isuserspostornot='left';
								
							}else {
								isuserspostornot='right';
							}
						 }else{
							 
							 $(".chatheader").html("TO : "+selusersforrespo);
							 $(".backfromsupportchat").attr("href","#provideSupportid");
							 
							if("desupport@ibm.com"==item.FROM_ID.trim()){
								isuserspostornot='left';
								
							}else {
								isuserspostornot='right';
							}
						 }
						
						 var updatedate=item.UPDATED_TIMESTAMP.split("T");
						 var dateo=updatedate[1].split(":");
						 var newdatstring=updatedate[0]+" :: "+dateo[0]+":"+dateo[1];
						 
						
						chatlisthtml+='<li>\
	                        <span class="'+isuserspostornot+'"><span class="chatfromclass"><p class="chatfromp">'+item.UPDATED_BY.trim()+'</p></span>'+item.MESSAGE+'<span class="chatfromclass"><p class="chatfromp" style="margin-left: 88px;">'+newdatstring+'</p></span></span>\
	                        <div class="clear"></div>\
	                    </li> ';
					  
						
						
					});
					
					setUserRespReaded('');
				}else{
					
					/*chatlisthtml+='<li>\
                        <span class="right">No History available</span>\
                        <div class="clear"></div>\
                    </li> ';*/
				  
					$(".chatheader").html("No History available");
					
				}
				
				$("#userchathostorylistsID").html(chatlisthtml);
				$.mobile.pageContainer.pagecontainer("change", "#askSupportid", {
					transition : "slide"
				});
		 	
				
				 $('#messages').animate({
				        scrollTop: $('#messages')[0].scrollHeight}, 2200);
				 
				
			},
			onFailure : function(errres){
				BonD.busierHide('login');
				alert("Failed to Post your Query. Please try again..!","DE Alert",null,"OK");
				
			}
		});
		
		
		 

		
 }
 
 var myVar;
 
 function clearchatinterval() {
	    clearInterval(myVar);
	}
 function setUserRespReaded(onlysub){
	 
	 var invocationData;
	 if(!isSupportChat){
	   invocationData = {
				adapter : 'chatSupportAdapter',
				procedure : 'doMarkUserResponsesRead',
				parameters : [loggedInUser]
			};
	 }else{
		 
		 if(onlysub=='onlyasubmit'){
		 invocationData = {
					adapter : 'chatSupportAdapter',
					procedure : 'doMarkProviderResponsesRead',
					parameters : [selusersforrespo]
				};
	 }
	 }

		WL.Client.invokeProcedure(invocationData, {
			onSuccess : function(res){
					if(res.invocationResult.updateStatementResult){
					
					var updatec=res.invocationResult.updateStatementResult.updateCount;
					if(updatec != 0){
						
						console.log("Read Marked  Successfully..!");
						$(".mainsupporticon").hide();
						
						 
					}else{
						//alert("Failed to Post your Query. Please try again..!","DE Alert",null,"OK");
						
						console.log("No New Msg..!");
					}
				}
					countResponsesonQuestions();
				
			},onFailure : function(errres){
				BonD.busierHide('login');
				alert("Failed to set read status Please try again..!","DE Alert",null,"OK");
			}
				
			});
			
	 
 }
 
 
 /* Provide Support
 */
 
 function getUserRequiestList(){
	 BonD.busierShow('login');
		var invocationData = {
				adapter : 'chatSupportAdapter',
				procedure : 'getUsersRequestsList',
				parameters : []
			};
		 
		
		WL.Client.invokeProcedure(invocationData, {
			onSuccess : function(res){
				$("#usersListforProvideSupport").empty();
				
				var set = res.invocationResult.resultSet;
				if(set.length){
					 
					var arrResult = {};
					for (i = 0, n = set.length; i < n; i++) {
					    var item = set[i];
					    arrResult[ item.FROM_ID] = item;
					}
					
					var k = 0;
					var nonDuplicatedArray = [];    
					for(var item in arrResult) {
					    nonDuplicatedArray[k++] = arrResult[item];
					}
					//console.log(nonDuplicatedArray);
					  for(var p=0;p< nonDuplicatedArray.length;p++){
						  
						  
						  var useridd=nonDuplicatedArray[p].FROM_ID.trim();
						  
						  $("#usersListforProvideSupport").append('<li><a href="#" class="requsers" >'+useridd+'<span class="ui-li-count" id="'+p+'usero"></span></a></li>');
						 	
								var invocationData1 = {
										adapter : 'chatSupportAdapter',
										procedure : 'getUsersNewRequestsUnreadCount',
										parameters : [useridd,p+'usero']
									};
								
								
								
								
								WL.Client.invokeProcedure(invocationData1, {
									onSuccess : function(res0){
										var trg=res0.invocationResult.trg;
										var counts=res0.invocationResult.countdata.resultSet[0].COUNT;
										//console.log(trg+counts); 
										if(counts=="0"){
									
											$("#"+trg).css("background-color", "#fff");
											$("#"+trg).css("color", "#333");
											 
										}else{
											
											
										}
										$("#"+trg).html(counts);
										
									},
									onFailure : function(errres){
										BonD.busierHide('login');
										//alert("Failed to get users requests. Please try again..!","DE Alert",null,"OK");
										
									}
								
							});
							 
							
				 
						
					  }
						
					}else{
						
						alert("No requests found.","DE Alert",null,"OK");
					}
				 $("#usersListforProvideSupport").listview("refresh");
					
				 BonD.busierHide('login');
			},
			onFailure : function(errres){
				BonD.busierHide('login');
				alert("Failed to get users Requests. Please try again..1!","DE Alert",null,"OK");
				
			}
		});
		
	 

	 
 }
 
 function getUsersRequestDetails(){
	
	 getUserChatHistory();
	 
 }