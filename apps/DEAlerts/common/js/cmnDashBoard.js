var targetSectorResultSet;
var kpiSectorResultSet;
var isPAL=false;
var isSector=false;
var isPM=false;
var KPIheaderArr=["% Green Process Review",
                  "% Green Product Review",
                  "% SLA Met On AI Closure",
                  "% PM Match Gap",
                  "% Troubled Projects",
                  "% EW Projects",
                  "% Troubled GD",
                  "Direct Troubled",
                  "Early Warning To Troubled",
                  "Bailed Out From Troubled",
                  "Bailed Out From Early Warning",
                  "7-Key Compliance %",
                  "7-Key Health Green %",
                  "7-Key Health Amber %",
                  "7-Key Health Red %",
                  "IPWC Risks",
                   ];


var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
function getlegenddata(){
	BonD.busierShow('login', Messages.loading_indicator_title);
	 var invocationData = {
				adapter : 'CmnDashboardAdapter',
				procedure : 'getrefreshData',
				parameters : []
			};
		
		
		
		WL.Client.invokeProcedure(invocationData, {
			onSuccess : function(res){
				 BonD.busierHide('login');
				$("#KPIlegenddata").html("");
				var legdata=res.invocationResult.resultSet;
				var inhtml='<table data-role="table"  data-mode="columntoggle" class="ui-responsive table-stroke ui-table-cell-visible"><thead><tr><th data-priority="2">KPI</th><th>Comparison</th></tr></thead><tbody>';
                  $(legdata).each(function( i, item){	
                	  
                	  var cdate=item.REFRESH_DATE.split("T")[0];
                	  var pdate=item.PREVIOUS_REFRESH_DATE.split("T")[0];
                	 // var cadate=new Date(cdate.replace(/-/g,"/")).toLocaleString();
                	  
					
                	  inhtml+=" <tr><td style='font-size: 14px;'>"+item.KPI_NAME+"</td><td style='font-size: 14px;'>"+cdate+" vs " +pdate+"</td></tr>";
                	  
                	  
                	  
					
				});
                  
                  
                 $("#KPIlegenddata").html(inhtml);
                 
                 $('#KPIlegenddata').trigger('create');
                 // $("#popuplegend").popup("refresh");  
                   
                 
                 $(".ui-table-columntoggle-btn").hide();
					
				
				
			},
			onFailure : function(res){
				 BonD.busierHide('login');
				alert("No Data found","DE Alert",null,"OK");
			}
		});	
	
}

var forlegbtn="";
var headingpalpmsec="";

$(function(){
	
	$(".legendback").attr("href","#cmnDashBoard");
	
$("#pmlegend").on('click', function() {
		
		
	 
	$(".legendback").attr("href","#cmnDashBoardpm");
		
	});
	
$("#pallegend").on('click', function() {
	
	
	$(".legendback").attr("href","#cmnDashBoardpal");
	
});


$("#sectlegend").on('click', function() {
	
	
	$(".legendback").attr("href","#cmnDashBoard");
	
});



	
	
	
	
	$(".cmndashID").on('click', function() {
		BonD.busierShow('login', Messages.loading_indicator_title);
		  var invocationData = {
					adapter : 'CmnDashboardAdapter',
					procedure : 'getMetricsTarget',
					parameters : []
				};
			
			
			
			WL.Client.invokeProcedure(invocationData, {
				onSuccess : getTargetSuccess,
				onFailure : getTargetFailure
			});	
		
		
		
	});
	
	
	
	
	$("#cmnDashBoard").on('click',".tabledata",function(){
		BonD.busierShow('login', Messages.loading_indicator_title);
		var selectedSect=$(this).html();
		headingpalpmsec=selectedSect+"(PAL's)";
		$("#dmndashflownamesPAL").html(headingpalpmsec);
		$.mobile.pageContainer.pagecontainer("change", "#cmnDashBoardpal", {
			transition : "slide"
		});
		//console.log(selectedSect);
		isPAL=true;
		isSector=false;
		isPM=false;
		 var invocationData = {
					adapter : 'CmnDashboardAdapter',
					procedure : 'getPAL',
					parameters : [selectedSect]
				};
			
			
			
			WL.Client.invokeProcedure(invocationData, {
				onSuccess : getKPISectorDataSuccess,
				onFailure : getKPISectorDataFail
			});	
		
		
	});
	
	//alert("test");
	
	
});





$("#cmnDashBoardpal").on('click',".tabledata",function(){
	BonD.busierShow('login', Messages.loading_indicator_title);
	var selectedSect=$(this).html();
	headingpalpmsec=selectedSect+"(PM's)";
	$("#dmndashflownamesPM").html(headingpalpmsec);
	$.mobile.pageContainer.pagecontainer("change", "#cmnDashBoardpm", {
		transition : "slide"
	});
	//console.log(selectedSect);
	isPAL=false;
	isSector=false;
	isPM=true;
	 var invocationData = {
				adapter : 'CmnDashboardAdapter',
				procedure : 'getPM',
				parameters : [selectedSect]
			};
		
		
		
		WL.Client.invokeProcedure(invocationData, {
			onSuccess : getKPISectorDataSuccess,
			onFailure : getKPISectorDataFail
		});	
	
	
});

//alert("test");


function getTargetSuccess(result){
	
	//console.log(JSON.stringify(result.invocationResult.resultSet));
	if(result.invocationResult.resultSet.length){
		
		targetSectorResultSet=result.invocationResult.resultSet;
		
		getKPISectorData();
		
	}else{
		alert("No Data found","DE Alert",null,"OK");
		BonD.busierHide('login');
	}
	//alert("Data retrieved successfully","DE Alert",null,"OK");
	
}

function getTargetFailure(result){
	
	 BonD.busierHide('login');
	alert("Failed to get Target data","DE Alert",null,"OK");
	
}

function getKPISectorData(){
	 
	isSector=true;
	isPAL=false;
	isPM=false;
	 var invocationData = {
				adapter : 'CmnDashboardAdapter',
				procedure : 'getSectorData',
				parameters : []
			};
	 
	 
		
		
		
		WL.Client.invokeProcedure(invocationData, {
			onSuccess : getKPISectorDataSuccess,
			onFailure : getKPISectorDataFail
		});	
	
	
}

function getKPISectorDataFail() {
	 BonD.busierHide('login');
	alert("No Data found","DE Alert",null,"OK");	
}
var jssorcount=0;
function getKPISectorDataSuccess(result){
	//console.log(JSON.stringify(result.invocationResult.resultSet));
	
	
if(result.invocationResult.resultSet.length){
		
		kpiSectorResultSet=result.invocationResult.resultSet;
		 var slideNamedataID="";
		var   tableHTML='<div id="jssor_'+jssorcount+'" style="position: relative; margin: 0 auto; top: 0px; left: 0px; width: 600px; height: 850px; !important; overflow: auto;">';
		tableHTML+='<div data-u="slides" style="cursor: default; position: relative; top: 0px; left: 0px; width: 600px; height: 800px; overflow: auto;">';
		 
         
	        
	                               
	        
	        
	       
		 
		 if(isSector){
			 slideNamedataID="#KPIsectorSlide";
			
		} else if(isPAL){
			 
			 slideNamedataID="#KPIsectorSlidePAL";
			 
		 }else if(isPM){
			 
			 slideNamedataID="#KPIsectorSlidePM";
		 }
		
		$(kpiSectorResultSet).each(function( i, item) {	
			var nitem="";
			kpiSectorResultSet[i].cmndashmainName="";
			if(isSector){
				  nitem=item.SECTOR_NAME;
				
			} else if(isPAL){
				 
				  nitem=item.PAL_NAME;
			 }else if(isPM){
				 
				  nitem=item.PM_NAME;
			 }
			
			kpiSectorResultSet[i].cmndashmainName=nitem;
			
		});
		
		
		    
		
		
		
		//getKPISectorData();
		
	  
	   var kpiheadc=0;
		
		$(slideNamedataID).empty();
	//	$(slideNamedataID).html("");
		
		
		tableHTML+='<div  style="display: none;">'+
		'<div class="widetable ">'+
        '<table id="homeTable1" style="border-color: white; border-collapse: inherit">'+
	         '<tr>'+
             '<th class="tablecol"></th>'+
				'<th>'+KPIheaderArr[kpiheadc++]+'</th>'+
				'<th>'+KPIheaderArr[kpiheadc++]+'</th>'+
		      '</tr>';
		$(kpiSectorResultSet).each(function( i, item) {	
			var imgName1 = "";
			var imgName2 = "";
			
			 if(item.PROCESS_REVIEW_GREEN_PERCENTAGE > item.PROCESS_REVIEW_GREEN_PERCENTAGE_PREV){
		    	 if(item.PROCESS_REVIEW_GREEN_PERCENTAGE >= 95){
		    		 imgName1="upGreen";
		    	 }
		    	 else if((item.PROCESS_REVIEW_GREEN_PERCENTAGE >= 90) && (item.PROCESS_REVIEW_GREEN_PERCENTAGE < 95)){
		    		 imgName1="upAmber";
		    	 }
		    	 else{
		    		 imgName1="upRed";
		    	 }
		    	 
		     }else if(item.PROCESS_REVIEW_GREEN_PERCENTAGE == item.PROCESS_REVIEW_GREEN_PERCENTAGE_PREV){
		    	 
		    	 if(item.PROCESS_REVIEW_GREEN_PERCENTAGE >= 95){
		    		 imgName1="equalGreen";
		    	 }
		    	 else if((item.PROCESS_REVIEW_GREEN_PERCENTAGE >= 90) && (item.PROCESS_REVIEW_GREEN_PERCENTAGE < 95)){
		    		 imgName1="equalAmber";
		    	 }
		    	 else{
		    		 imgName1="equalRed";
		    	 }
		    	
		     }else if(item.PROCESS_REVIEW_GREEN_PERCENTAGE < item.PROCESS_REVIEW_GREEN_PERCENTAGE_PREV){
		    	 
		    	 if(item.PROCESS_REVIEW_GREEN_PERCENTAGE >= 95){
		    		 imgName1="downGreen";
		    	 }
		    	 else if((item.PROCESS_REVIEW_GREEN_PERCENTAGE >= 90) && (item.PROCESS_REVIEW_GREEN_PERCENTAGE < 95)){
		    		 imgName1="downAmber";
		    	 }
		    	 else{
		    		 imgName1="downRed";
		    	 } 
	    	 
		     }
			 
			 if(item.PRODUCT_REVIEW_GREEN_PERCENTAGE > item.PRODUCT_REVIEW_GREEN_PERCENTAGE_PREV){
		    	 if(item.PRODUCT_REVIEW_GREEN_PERCENTAGE >= 90){
		    		 imgName2="upGreen";
		    	 }
		    	 else if((item.PRODUCT_REVIEW_GREEN_PERCENTAGE >= 80) && (item.PRODUCT_REVIEW_GREEN_PERCENTAGE < 90)){
		    		 imgName2="upAmber";
		    	 }
		    	 else{
		    		 imgName2="upRed";
		    	 }
		    	 
		     }else if(item.PRODUCT_REVIEW_GREEN_PERCENTAGE == item.PRODUCT_REVIEW_GREEN_PERCENTAGE_PREV){
		    	 
		    	 if(item.PRODUCT_REVIEW_GREEN_PERCENTAGE >= 90){
		    		 imgName2="equalGreen";
		    	 }
		    	 else if((item.PRODUCT_REVIEW_GREEN_PERCENTAGE >= 80) && (item.PRODUCT_REVIEW_GREEN_PERCENTAGE < 90)){
		    		 imgName2="equalAmber";
		    	 }
		    	 else{
		    		 imgName2="equalRed";
		    	 }
		    	
		     }else if(item.PRODUCT_REVIEW_GREEN_PERCENTAGE < item.PRODUCT_REVIEW_GREEN_PERCENTAGE_PREV){
		    	 
		    	 if(item.PRODUCT_REVIEW_GREEN_PERCENTAGE >= 90){
		    		 imgName2="downGreen";
		    	 }
		    	 else if((item.PRODUCT_REVIEW_GREEN_PERCENTAGE >= 80) && (item.PRODUCT_REVIEW_GREEN_PERCENTAGE < 90)){
		    		 imgName2="downAmber";
		    	 }
		    	 else{
		    		 imgName2="downRed";
		    	 } 
		    	 
		     }
			
			 
			 tableHTML+=	'<tr>'+
             '<td class="tabledata ">'+item.cmndashmainName+'</td>'+
				'<td><span>'+item.PROCESS_REVIEW_GREEN_PERCENTAGE+'('+item.PROCESS_REVIEW_GREEN_PERCENTAGE_PREV+')</span><br>'+
				'<img src="images/'+imgName1+'.png" class="green" >'+
				'</td>'+
				'<td><span>'+item.PRODUCT_REVIEW_GREEN_PERCENTAGE+'('+item.PRODUCT_REVIEW_GREEN_PERCENTAGE_PREV+')</span><br>'+
				'<img src="images/'+imgName2+'.png" class="green" ></td>'+
			'<tr>';



});
			

		
			         
		       
			    
		tableHTML+=	'</table></div></div>';
		//$(slideNamedataID).append(tableHTML);
		
		
		
		
		
		//tableHTML="";
		
		
		tableHTML+='<div style="display: none;">'+
		'<div class="widetable">'+
        '<table id="homeTable1" style="border-color: white; border-collapse: inherit">'+
	         '<tr>'+
             '<th class="tablecol"></th>'+
				'<th>'+KPIheaderArr[kpiheadc++]+'</th>'+
				'<th>'+KPIheaderArr[kpiheadc++]+'</th>'+
		      '</tr>';
		$(kpiSectorResultSet).each(function( i, item) {
			imgName1="";
			imgName2="";
		         
			       
			if(item.SLA_MET_ON_AI_CLOUSRE_PERCENTAGE > item.SLA_MET_ON_AI_CLOUSRE_PERCENTAGE_PREV && (item.SLA_MET_ON_AI_CLOUSRE_PERCENTAGE_PREV != 0) ){
				if(item.SLA_MET_ON_AI_CLOUSRE_PERCENTAGE >= 90){
					imgName1 ="upGreen";
				}
				
				else{
					
					imgName1="upRed";
				}
			}
			else if(item.SLA_MET_ON_AI_CLOUSRE_PERCENTAGE == item.SLA_MET_ON_AI_CLOUSRE_PERCENTAGE_PREV){
				if(item.SLA_MET_ON_AI_CLOUSRE_PERCENTAGE >= 90){
					imgName1 ="equalGreen";
				}else{
					
					imgName1="equalRed";
				}		
			}
			else if(item.SLA_MET_ON_AI_CLOUSRE_PERCENTAGE < item.SLA_MET_ON_AI_CLOUSRE_PERCENTAGE_PREV && (item.SLA_MET_ON_AI_CLOUSRE_PERCENTAGE_PREV != 0)){
					if(item.SLA_MET_ON_AI_CLOUSRE_PERCENTAGE >= 90){
						imgName1 ="downGreen";
					}else{
						
						imgName1="downRed";
					}		
					
				}
				else{
					imgName1="default";
				}
				
			
			    	 
				if(item.PM_MATCH_GAP_PERCENTAGE < item.PM_MATCH_GAP_PERCENTAGE_PREV){
					
			    	if(item.PM_MATCH_GAP_PERCENTAGE <= 15){
			    		imgName2="upGreen";
			    	}
			    	else{
			    		imgName2="upRed";
			    	}
					
			     }else if((item.PM_MATCH_GAP_PERCENTAGE == item.PM_MATCH_GAP_PERCENTAGE_PREV) && (item.PM_MATCH_GAP_PERCENTAGE != 0)){
			    	 
			    	 if(item.PM_MATCH_GAP_PERCENTAGE <= 15){
				    		imgName2="equalGreen";
				    	}
				    	else{
				    		imgName2="equalRed";
				    	}
			     }else if(item.PM_MATCH_GAP_PERCENTAGE > item.PM_MATCH_GAP_PERCENTAGE_PREV){
			    	 
			    	 if(item.PM_MATCH_GAP_PERCENTAGE <= 15){
				    		imgName2="downGreen";
				    	}
				    	else{
				    		imgName2="downRed";
				    	} 
			     } else {
			    	 imgName2="default";
			     }
			    	 
			    	 
			     
		
			     
			
			tableHTML+=	'<tr>'+
			                '<td class="tabledata">'+item.cmndashmainName+'</td>'+
							'<td><span>'+item.SLA_MET_ON_AI_CLOUSRE_PERCENTAGE+'('+item.SLA_MET_ON_AI_CLOUSRE_PERCENTAGE_PREV+')</span><br>'+
							'<img src="images/'+imgName1+'.png" class="green">'+
							'</td>'+
							'<td><span>'+item.PM_MATCH_GAP_PERCENTAGE+'('+item.PM_MATCH_GAP_PERCENTAGE_PREV+')</span><br>'+
							'<img src="images/'+imgName2+'.png" class="green"></td>'+
						'<tr>';
		
			 
		
		});
		
		tableHTML+=	'</table></div></div>';
		//$(slideNamedataID).append(tableHTML);
		
		
		
		
		//tableHTML="";
		
		tableHTML+='<div style="display: none;">'+
		'<div class="widetable">'+
        '<table id="homeTable1" style="border-color: white; border-collapse: inherit">'+
	         '<tr>'+
             '<th class="tablecol"></th>'+
				'<th>'+KPIheaderArr[kpiheadc++]+'</th>'+
				'<th>'+KPIheaderArr[kpiheadc++]+'</th>'+
		      '</tr>';
		$(kpiSectorResultSet).each(function( i, item) {
			imgName1="";
			imgName2="";
			
			if(item.TROUBLED_PROJECTS_PERCENTAGE < item.TROUBLED_PROJECTS_PERCENTAGE_PREV){
		    	 if(item.TROUBLED_PROJECTS_PERCENTAGE <= 5){
		    		 imgName1="upGreen";
		    	 }
		    	 else if((item.TROUBLED_PROJECTS_PERCENTAGE > 5) && (item.TROUBLED_PROJECTS_PERCENTAGE <= 10)){
		    		 imgName1="upAmber";
		    	 }
		    	 else{
		    		 imgName1="upRed";
		    	 }
		    	
		    	 
		     }else if((item.TROUBLED_PROJECTS_PERCENTAGE == item.TROUBLED_PROJECTS_PERCENTAGE_PREV)&&(item.TROUBLED_PROJECTS_PERCENTAGE_PREV != 0)){
		    	 if(item.TROUBLED_PROJECTS_PERCENTAGE <= 5){
		    		 imgName1="equalGreen";
		    	 }
		    	 else if((item.TROUBLED_PROJECTS_PERCENTAGE > 5) && (item.TROUBLED_PROJECTS_PERCENTAGE <= 10)){
		    		 imgName1="equalAmber";
		    	 }
		    	 else{
		    		 imgName1="equalRed";
		    	 }
		    	
		     }else if(item.TROUBLED_PROJECTS_PERCENTAGE > item.TROUBLED_PROJECTS_PERCENTAGE_PREV){
		    	 if(item.TROUBLED_PROJECTS_PERCENTAGE <= 5){
		    		 imgName1="downGreen";
		    	 }
		    	 else if((item.TROUBLED_PROJECTS_PERCENTAGE > 5) && (item.TROUBLED_PROJECTS_PERCENTAGE <= 10)){
		    		 imgName1="downAmber";
		    	 }
		    	 else{
		    		 imgName1="downRed";
		    	 }
		    	 
		     }
		     else{
	    		 imgName1="default";
	    	 }
		
			
			
			 
	         
		       
		     if(item.EW_PROJECTS_PERCENTAGE < item.EW_PROJECTS_PERCENTAGE_PREV){
		    	 
		    	 imgName2="upGreen";
		     }else if((item.EW_PROJECTS_PERCENTAGE == item.EW_PROJECTS_PERCENTAGE_PREV) && (item.EW_PROJECTS_PERCENTAGE != 0)){
		    	 
		    	 imgName2="equalAmber";
		     }else if(item.EW_PROJECTS_PERCENTAGE > item.EW_PROJECTS_PERCENTAGE_PREV){
		    	 
		    	 imgName2="downRed";
		     }else{
		    	 
		    	 imgName2="default";
		    	 
		     }
		    	 
		    	 
		    	 
		    	 
		     
			         
		
			     
			
			tableHTML+=	'<tr>'+
			                '<td class="tabledata">'+item.cmndashmainName+'</td>'+
							'<td><span>'+item.TROUBLED_PROJECTS_PERCENTAGE+'('+item.TROUBLED_PROJECTS_PERCENTAGE_PREV+')</span><br>'+
							'<img src="images/'+imgName1+'.png" class="green">'+
							'</td>'+
							'<td><span>'+item.EW_PROJECTS_PERCENTAGE+'('+item.EW_PROJECTS_PERCENTAGE_PREV+')</span><br>'+
							'<img src="images/'+imgName2+'.png" class="green"></td>'+
						'<tr>';
		
			 
		
		});
		
		tableHTML+=	'</table></div></div>';
		//$(slideNamedataID).append(tableHTML);
		
		
		//tableHTML="";
		
		tableHTML+='<div style="display: none;">'+
		'<div class="widetable">'+
        '<table id="homeTable1" style="border-color: white; border-collapse: inherit">'+
	         '<tr>'+
             '<th class="tablecol"></th>'+
				'<th>'+KPIheaderArr[kpiheadc++]+'</th>'+
				'<th>'+KPIheaderArr[kpiheadc++]+'</th>'+
		      '</tr>';
		$(kpiSectorResultSet).each(function( i, item) {
			imgName1="";
			imgName2="";
			if(item.TROUBLED_GD_PERCENTAGE < item.TROUBLED_GD_PERCENTAGE_PREV){
				if(item.TROUBLED_GD_PERCENTAGE <= 5){
					imgName1 ="upGreen";
				}else{
					
					imgName1="upRed";
				}
			}
			else if((item.TROUBLED_GD_PERCENTAGE == item.TROUBLED_GD_PERCENTAGE_PREV)&&(item.TROUBLED_GD_PERCENTAGE != 0)){
				if(item.TROUBLED_GD_PERCENTAGE <= 5){
					imgName1 ="equalGreen";
				}else{
					
					imgName1="equalRed";
				}		
			}
			else{
				if(item.TROUBLED_GD_PERCENTAGE > item.TROUBLED_GD_PERCENTAGE_PREV){
					if(item.TROUBLED_GD_PERCENTAGE <= 5){
						imgName1 ="downGreen";
					}else{
						
						imgName1="downRed";
					}
					
					
					
				}else{
					imgName1="default";
				}
				
			}

		    	
		    	 if (item.DIRECT_TROUBLED < item.DIRECT_TROUBLED_PREV )
		    		{
		    		 imgName2="upGreen";
				     }else if((item.DIRECT_TROUBLED == item.DIRECT_TROUBLED_PREV) && (item.DIRECT_TROUBLED != 0)){
				    	 
				    	 imgName2="equalAmber";
				     }else if(item.DIRECT_TROUBLED < item.DIRECT_TROUBLED_PREV && (item.DIRECT_TROUBLED != 0)){
				    	 
				    	 imgName2="downRed";
				     }else{
				    	 
				    	 imgName2="default";
				    	 
				     }
		
		
			     
			
			tableHTML+=	'<tr>'+
			                '<td class="tabledata">'+item.cmndashmainName+'</td>'+
							'<td><span>'+item.TROUBLED_GD_PERCENTAGE+'('+item.TROUBLED_GD_PERCENTAGE_PREV+')</span><br>'+
							'<img src="images/'+imgName1+'.png" class="green">'+
							'</td>'+
							'<td><span>'+item.DIRECT_TROUBLED+'('+item.DIRECT_TROUBLED_PREV+')</span><br>'+
							'<img src="images/'+imgName2+'.png" class="green"></td>'+
						'<tr>';
		
			 
		
		});
		
		tableHTML+=	'</table></div></div>';
		//$(slideNamedataID).append(tableHTML);
		
		
		
		
		
		//tableHTML="";
		
		tableHTML+='<div style="display: none;">'+
		'<div class="widetable">'+
        '<table id="homeTable1" style="border-color: white; border-collapse: inherit">'+
	         '<tr>'+
             '<th class="tablecol"></th>'+
				'<th>'+KPIheaderArr[kpiheadc++]+'</th>'+
				'<th>'+KPIheaderArr[kpiheadc++]+'</th>'+
		      '</tr>';
		$(kpiSectorResultSet).each(function( i, item) {
			imgName1="";
			imgName2="";
			
			if(item.EARLY_WARNING_TO_TROUBLED < item.EARLY_WARNING_TO_TROUBLED_PREV){
		    	 
		    	 imgName1="upGreen";
		     }else if((item.EARLY_WARNING_TO_TROUBLED == item.EARLY_WARNING_TO_TROUBLEDPREV) && (item.EARLY_WARNING_TO_TROUBLED != 0)){
		    	 
		    	 imgName1="equalAmber";
		     }else if(item.EARLY_WARNING_TO_TROUBLED > item.EARLY_WARNING_TO_TROUBLED_PREV){
		    	 
		    	 imgName1="downRed";
		     }else{
		    	 
		    	 imgName1="default";
		     }
		    	 
			
			
			 if(item.BAILED_OUT_FROM_TROUBLED > item.BAILED_OUT_FROM_TROUBLED_PREV){
		    	 
		    	 imgName2="upGreen";
		     }else if((item.BAILED_OUT_FROM_TROUBLED == item.BAILED_OUT_FROM_TROUBLED_PREV) && (item.BAILED_OUT_FROM_TROUBLED != 0)){
		    	 
		    	 imgName2="equalAmber";
		     }else if(item.BAILED_OUT_FROM_TROUBLED < item.BAILED_OUT_FROM_TROUBLED_PREV && (item.BAILED_OUT_FROM_TROUBLED != 0)){
		    	 
		    	 imgName2="downRed";
		     }else{
		    	 
		    	 imgName2="default";
		     }
		
                 
		     			    	 
	    	
		     
		     
		         
		
			     
			
			tableHTML+=	'<tr>'+
			                '<td class="tabledata">'+item.cmndashmainName+'</td>'+
							'<td><span>'+item.EARLY_WARNING_TO_TROUBLED+'('+item.EARLY_WARNING_TO_TROUBLED_PREV+')</span><br>'+
							'<img src="images/'+imgName1+'.png" class="green">'+
							'</td>'+
							'<td><span>'+item.BAILED_OUT_FROM_TROUBLED+'('+item.BAILED_OUT_FROM_TROUBLED_PREV+')</span><br>'+
							'<img src="images/'+imgName2+'.png" class="green"></td>'+
						'<tr>';
		
			 
		
		});
		
		tableHTML+=	'</table></div></div>';
		//$(slideNamedataID).append(tableHTML);
		
		
		
		//tableHTML="";
		
		tableHTML+='<div style="display: none;">'+
		'<div class="widetable">'+
        '<table id="homeTable1" style="border-color: white; border-collapse: inherit">'+
	         '<tr>'+
             '<th class="tablecol"></th>'+
				'<th>'+KPIheaderArr[kpiheadc++]+'</th>'+
				'<th>'+KPIheaderArr[kpiheadc++]+'</th>'+
		      '</tr>';
		$(kpiSectorResultSet).each(function( i, item) {
			imgName1="";
			imgName2="";
			if(item.BAILED_OUT_FROM_EARLY_WARNING > item.BAILED_OUT_FROM_EARLY_WARNING_PREV){
		    	 
		    	 imgName1="upGreen";
		     }else if((item.BAILED_OUT_FROM_EARLY_WARNING == item.BAILED_OUT_FROM_EARLY_WARNING_PREV) && (item.BAILED_OUT_FROM_EARLY_WARNING != 0)){
		    	 
		    	 imgName1="equalAmber";
		     }else if(item.BAILED_OUT_FROM_EARLY_WARNING < item.BAILED_OUT_FROM_EARLY_WARNING_PREV && (item.BAILED_OUT_FROM_EARLY_WARNING != 0)){
		    	 
		    	 imgName1="downRed";
		     }else{
		    	 
		    	 imgName1="default";
		    	 
		     }
			
			{
				if(item.SEVEN_KEY_COMPLIANCE_PERCENTAGE > item.SEVEN_KEY_COMPLIANCE_PERCENTAGE_PREV){
			    	 
			    	 imgName2="upGreen";
			     }else if((item.SEVEN_KEY_COMPLIANCE_PERCENTAGE == item.SEVEN_KEY_COMPLIANCE_PERCENTAGE_PREV) && (item.SEVEN_KEY_COMPLIANCE_PERCENTAGE != 0)){
			    	 
			    	 imgName2="equalAmber";
			     }else if(item.SEVEN_KEY_COMPLIANCE_PERCENTAGE < item.SEVEN_KEY_COMPLIANCE_PERCENTAGE_PREV){
			    	 
			    	 imgName2="downRed";
			     }else{
			    	 
			    	 imgName2="default";}
			}
			  
			         
		
			     
			
			tableHTML+=	'<tr>'+
			                '<td class="tabledata">'+item.cmndashmainName+'</td>'+
							'<td><span>'+item.BAILED_OUT_FROM_EARLY_WARNING+'('+item.BAILED_OUT_FROM_EARLY_WARNING_PREV+')</span><br>'+
							'<img src="images/'+imgName1+'.png" class="green">'+
							'</td>'+
							'<td><span>'+item.SEVEN_KEY_COMPLIANCE_PERCENTAGE+'('+item.SEVEN_KEY_COMPLIANCE_PERCENTAGE_PREV+')</span><br>'+
							'<img src="images/'+imgName2+'.png" class="green"></td>'+
						'<tr>';
		
			 
		
		});
		
		tableHTML+=	'</table></div></div>';
		//$(slideNamedataID).append(tableHTML);
		
		
		
		
		//tableHTML="";
		
		tableHTML+='<div style="display: none;">'+
		'<div class="widetable">'+
        '<table id="homeTable1" style="border-color: white; border-collapse: inherit">'+
	         '<tr>'+
             '<th class="tablecol"></th>'+
				'<th>'+KPIheaderArr[kpiheadc++]+'</th>'+
				'<th>'+KPIheaderArr[kpiheadc++]+'</th>'+
		      '</tr>';
		$(kpiSectorResultSet).each(function( i, item) {
			imgName1="";
			imgName2="";
			
			if(item.SEVEN_KEY_HEALTH_GREEN_PERCENTAGE > item.SEVEN_KEY_HEALTH_GREEN_PERCENTAGE_PREV){
		    	 
		    	 imgName1="upGreen";
		     }else if((item.SEVEN_KEY_HEALTH_GREEN_PERCENTAGE == item.SEVEN_KEY_HEALTH_GREEN_PERCENTAGE_PREV) && (item.SEVEN_KEY_HEALTH_GREEN_PERCENTAGE != 0)){
		    	 
		    	 imgName1="equalAmber";
		     }else if(item.SEVEN_KEY_HEALTH_GREEN_PERCENTAGE < item.SEVEN_KEY_HEALTH_GREEN_PERCENTAGE_PREV){
		    	 
		    	 imgName1="downRed";
		     }else{
		    	 
		    	 imgName1="default";
		    	 
		     }
			
			
			if(item.SEVEN_KEY_HEALTH_AMBER_PERCENTAGE < item.SEVEN_KEY_HEALTH_AMBER_PERCENTAGE_PREV){
		    	 
		    	 imgName2="upGreen";
		     }else if((item.SEVEN_KEY_HEALTH_AMBER_PERCENTAGE == item.SEVEN_KEY_HEALTH_AMBER_PERCENTAGE_PREV) && (item.SEVEN_KEY_HEALTH_AMBER_PERCENTAGE != 0)){
		    	 
		    	 imgName2="equalAmber";
		     }else if(item.SEVEN_KEY_HEALTH_AMBER_PERCENTAGE > item.SEVEN_KEY_HEALTH_AMBER_PERCENTAGE_PREV){
		    	 
		    	 imgName2="downRed";
		     }else{
		    	 
		    	 imgName2="default";
		    	 }
		
				
		
			
			
			         
		
			     
			
			tableHTML+=	'<tr>'+
			                '<td class="tabledata">'+item.cmndashmainName+'</td>'+
							'<td><span>'+item.SEVEN_KEY_HEALTH_GREEN_PERCENTAGE+'('+item.SEVEN_KEY_HEALTH_GREEN_PERCENTAGE_PREV+')</span><br>'+
							'<img src="images/'+imgName1+'.png" class="green">'+
							'</td>'+
							'<td><span>'+item.SEVEN_KEY_HEALTH_AMBER_PERCENTAGE+'('+item.SEVEN_KEY_HEALTH_AMBER_PERCENTAGE_PREV+')</span><br>'+
							'<img src="images/'+imgName2+'.png" class="green"></td>'+
						'<tr>';
		
			 
		
		});
		
		tableHTML+=	'</table></div></div>';
		//$(slideNamedataID).append(tableHTML);
		
		
		
		//tableHTML="";
		
		tableHTML+='<div style="display: none;">'+
		'<div class="widetable">'+
        '<table id="homeTable1" style="border-color: white; border-collapse: inherit">'+
	         '<tr>'+
             '<th class="tablecol"></th>'+
				'<th>'+KPIheaderArr[kpiheadc++]+'</th>'+
				'<th>'+KPIheaderArr[kpiheadc++]+'</th>'+
		      '</tr>';
		$(kpiSectorResultSet).each(function( i, item) {
			imgName1="";
			imgName2="";
			if(item.SEVEN_KEY_HEALTH_RED_PERCENTAGE < item.SEVEN_KEY_HEALTH_RED_PERCENTAGE_PREV){
		    	 
		    	 imgName1="upGreen";
		     }else if((item.SEVEN_KEY_HEALTH_RED_PERCENTAGE == item.SEVEN_KEY_HEALTH_RED_PERCENTAGE_PREV) && (item.SEVEN_KEY_HEALTH_RED_PERCENTAGE != 0)){
		    	 
		    	 imgName1="equalAmber";
		     }else if(item.SEVEN_KEY_HEALTH_RED_PERCENTAGE > item.SEVEN_KEY_HEALTH_RED_PERCENTAGE_PREV){
		    	 
		    	 imgName1="downRed";
		     }else{
		    	 
		    	 imgName1="default";
		    	 
		     }
			 if(item.IPWC_RISKS < item.IPWC_RISKS_PREV){
		    	 
		    	 imgName2="upGreen";
		     }else if((item.IPWC_RISKS == item.IPWC_RISKS_PREV) && (item.IPWC_RISKS != 0)){
		    	 
		    	 imgName2="equalAmber";
		     }else if(item.IPWC_RISKS > item.IPWC_RISKS_PREV && (item.IPWC_RISKS != 0)){
		    	 
		    	 imgName2="downRed";
		     }else{
		    	 
		    	 imgName2="default";
		     }
			
			         
		
			     
			
			tableHTML+=	'<tr>'+
			                '<td class="tabledata">'+item.cmndashmainName+'</td>'+
							'<td><span>'+item.SEVEN_KEY_HEALTH_RED_PERCENTAGE+'('+item.SEVEN_KEY_HEALTH_RED_PERCENTAGE_PREV+')</span><br>'+
							'<img src="images/'+imgName1+'.png" class="green">'+
							'</td>'+
							'<td><span>'+item.IPWC_RISKS+'('+item.IPWC_RISKS_PREV+')</span><br>'+
							'<img src="images/'+imgName2+'.png" class="green"></td>'+
						'<tr>';
		
			 
		
		});
		
		tableHTML+=	'</table></div></div></div>';
		tableHTML+='<span data-u="arrowleft" class="jssora12l" style="top:123px;left:0px;width:30px;height:46px;" data-autocenter="2"></span>'+
	               '<span data-u="arrowright" class="jssora12r" style="top:123px;right:0px;width:30px;height:46px;" data-autocenter="2"></span>'+
	               '</div>';
		 
		$(slideNamedataID).append(tableHTML);
	
		
		//$('#KPIsectorSlide').append(tableHTML).trigger('create');
	
		doslidings(jssorcount);
		jssorcount++;
		setTimeout(function(){
			
			$('.widetable').parent().addClass('widepartanle');
			checknullvalues(1);
			checknullvalues(2);
			 $(slideNamedataID).trigger('create');
			 BonD.busierHide('login');
		}, 300);
		
}else{
	
	alert("No Data found","DE Alert",null,"OK");
	
}

};
	

function checknullvalues(colsno){
	
	 $($(".tabledata")).each(function( io, item){	
		 
		 var  tdhtmlo;
		 var $tdhtmlothis=$(this);
		 
		 if(colsno==1){
			 $tdhtmlothis=$(this).next();
		 }else{
			 $tdhtmlothis=$(this).next().next();
			 
		 }
		 
		 
		  
			   tdhtmlo=$tdhtmlothis.children("span").html().split(")")[0].split("(");
		 
		  
	var tdnewhtmlo="";
	if(tdhtmlo[0]=="null"){
		tdnewhtmlo="-(";
		 
		
	}else{
		tdnewhtmlo+=tdhtmlo[0]+"(";
		
	}
	if(tdhtmlo[1]=="null"){
		tdnewhtmlo+="-)";
		
		
	}else{
		
		tdnewhtmlo+=tdhtmlo[1]+")";
	}
	
	if(tdhtmlo[0]=="null" && tdhtmlo[1]=="null"){
		
		$tdhtmlothis.children("img" ).attr("src", "images/default.png");
	}
	
	var colheadvalso= $(this).parent().parent().children("tr:nth-child(1)").children("th:nth-child(2)").html();;
	if(colheadvalso==KPIheaderArr[2] || colheadvalso==KPIheaderArr[5] || colheadvalso==KPIheaderArr[11] || colheadvalso==KPIheaderArr[12] || colheadvalso==KPIheaderArr[13] || colheadvalso==KPIheaderArr[14] ){
		if(tdnewhtmlo.indexOf("-") > -1){
			$tdhtmlothis.children("img" ).attr("src", "images/default.png");
		}
		
	}
	
	var colheadvalso= $(this).parent().parent().children("tr:nth-child(1)").children("th:nth-child(3)").html();;
	if(colheadvalso==KPIheaderArr[2] || colheadvalso==KPIheaderArr[5] || colheadvalso==KPIheaderArr[11] || colheadvalso==KPIheaderArr[12] || colheadvalso==KPIheaderArr[13] || colheadvalso==KPIheaderArr[14] ){
		if(tdnewhtmlo.indexOf("-") > -1){
			$tdhtmlothis.children("img" ).attr("src", "images/default.png");
		}
		
	}
	
	$tdhtmlothis.children("span").text(tdnewhtmlo);
	 
	
	  });
	  
	 
	  
	  
	  
	  
	 
		
	  
	
	
}
	