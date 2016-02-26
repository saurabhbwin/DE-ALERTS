
var KPIcmmiheaderArr=["PIID Readiness",
                  "GIC Review",
                  "ATM Review",
                  "RFI Response",
                  "FAR Review"
                  ];

var cmmiTableCount ="";




$(function(){
	$(".cmmidashID").on('click', function() {
	BonD.busierShow('login', Messages.loading_indicator_title);
	  var invocationData = {
				adapter : 'cmmiDashboardAdapter',
				procedure : 'cmmiMetricsData',
				parameters : []
			};
		
		
		
		WL.Client.invokeProcedure(invocationData, {
			onSuccess : getcmmiTargetSuccess,
			onFailure : getTargetFailure
		});	
		
});
		

});



	




		function getcmmiTargetSuccess(result){

if(result.invocationResult.resultSet.length){
	
	cmmiResultSet=result.invocationResult.resultSet;
	
	
			



var jssorcountcmmi= -1000;
	$(cmmiDashSlide).empty();

		 
		var   tableHTML='<div id="jssor_'+jssorcountcmmi+'" style="position: relative; margin: 0 auto; top: 0px; left: 0px; width: 600px; height: 850px; !important; overflow: auto;">';
		tableHTML+='<div data-u="slides" style="cursor: default; position: relative; top: 0px; left: 0px; width: 600px; height: 800px; overflow: auto;">';
		 
         
	        
	                               
	        
	        
	       
		 
		
	  
	   var kpiheadc=0;
	   //BonD.busierHide('login');
	//	$(cmmiDashSlide).empty();
	//	$(slideNamedataID).html("");
		
		
		tableHTML+='<div  style="display: none;">'+
		'<div class="cmmitable">'+
        '<table id="homeTable" style="border-color: white; border-collapse: inherit">'+
	         '<tr>'+
             '<th></th>'+
				'<th>'+KPIcmmiheaderArr[kpiheadc++]+'</th>'+
				'<th>'+KPIcmmiheaderArr[kpiheadc++]+'</th>'+
		      '</tr>';
		$(cmmiResultSet).each(function( i, item) {	
			var imgName1 = "";
			var imgName2 = "";
			
			if(item.PIID_READINESS_FLAG=="G"){
				imgName1="cmmi_green";
				
			}else if(item.PIID_READINESS_FLAG=="R"){
				imgName1="cmmi_red";
				
			}else if(item.PIID_READINESS_FLAG=="A"){
				imgName1="cmmi_yellow";
				
			}
			
			if(item.GIC_REVIEW_FLAG=="G"){
				
				imgName2="cmmi_green";
			}else if(item.GIC_REVIEW_FLAG=="R"){
				
				imgName2="cmmi_red";
			}else if(item.GIC_REVIEW_FLAG=="A"){
				
				imgName2="cmmi_yellow";
			}
			
		
			
			 tableHTML+= '<tr>'+
	             //'<td class="cmmitabledata">'+'<ul>'+'<li>'+'<b class="projname">'+item.UOM_NAME+'</b>'+'<br>'+'</li>'+'<li>'+item.SECTOR_NAME+'<div class="piidreadyinfo" style="display:none">'+item.PIID_READINESS_INFO+'<div class="gicreviewinfo" style="display:none">'+item.GIC_REVIEW_INFO+'</div></div><br>'+'</li>'+'<li>'+item.SERVICE_LINE+'</li>'+'</td>'+
			 '<td class="cmmitabledata">'+'<ul>'+'<li>'+'<b class="projname">'+item.UOM_NAME+'</b>'+'<br>'+'</li>'+'<li>'+item.SECTOR_NAME+'<div class="piidreadyinfo" style="display:none">'+item.PIID_READINESS_INFO+'</div><div class="gicreviewinfo" style="display:none">'+item.GIC_REVIEW_INFO+'</div><br>'+'</li>'+'<li>'+item.SERVICE_LINE+'</li>'+'</td>'+		
			 //'<td class="cmmitabledata">'+'<ul>'+'<li>'+'<b class="projname">'+item.UOM_NAME+'</b>'+'<br>'+'</li>'+'<li>'+item.SECTOR_NAME+'<div class="piidreadyinfo" style="display:none">'+item.PIID_READINESS_INFO+'</div><br>'+'</li>'+'<li>'+item.SERVICE_LINE+'</li>'+'</td>'+
					'<td class="piidreadiness"><span>'+item.PIID_READINESS_STATUS+'</span><br>'+
					'<img src="images/'+imgName1+'.png" class="cmmigreen" >'+
					'</td>'+
				'<td class="gicreadiness"><span>'+item.GIC_REVIEW_STATUS+'</span><br>'+
				'<img src="images/'+imgName2+'.png" class="cmmigreen" ></td>'+
			'<tr>';



});
			

		
			         
		       
			    
		tableHTML+=	'</table></div></div>';
		//$(slideNamedataID).append(tableHTML);
		
		
		
		
		
		//tableHTML="";
		
		
		tableHTML+='<div style="display: none;">'+
		'<div class="cmmitable">'+
        '<table id="homeTable" style="border-color: white; border-collapse: inherit">'+
	         '<tr>'+
             '<th class="cmmitablecol"></th>'+
				'<th>'+KPIcmmiheaderArr[kpiheadc++]+'</th>'+
				'<th>'+KPIcmmiheaderArr[kpiheadc++]+'</th>'+
		      '</tr>';
		$(cmmiResultSet).each(function( i, item) {
			imgName1="";
			imgName2="";
		         
			if(item.ATM_REVIEW_FLAG=="G"){
				imgName1="cmmi_green";
				
			}else if(item.ATM_REVIEW_FLAG=="R"){
				imgName1="cmmi_red";
				
			}else if(item.ATM_REVIEW_FLAG=="A"){
				imgName1="cmmi_yellow";
				
			}
			
			if(item.RFI_RESPONSE_FLAG=="G"){
				
				imgName2="cmmi_green";
			}else if(item.RFI_RESPONSE_FLAG=="R"){
				
				imgName2="cmmi_red";
			}else if(item.RFI_RESPONSE_FLAG=="A"){
				
				imgName2="cmmi_yellow";
			}
			       
				     
			
			tableHTML+=	'<tr>'+
			                //'<td class="cmmitabledata">'+'<b class="projname">'+item.UOM_NAME+'</b>'+'<br>'+item.SECTOR_NAME+'<div class="piidreadyinfo" style="display:none">'+item.PIID_READINESS_INFO+'</div><br>'+'<p>'+item.SERVICE_LINE+'</td>'+
							//'<td class="cmmitabledata">'+'<ul>'+'<li>'+'<b class="projname">'+item.UOM_NAME+'</b>'+'<br>'+'</li>'+'<li>'+item.SECTOR_NAME+'<div class="atmreviewinfo" style="display:none">'+item.ATM_REVIEW_INFO+'<div class="rfiresponseinfo" style="display:none">'+item.RFI_RESPONSE_INFO+'</div></div><br>'+'</li>'+'<li>'+item.SERVICE_LINE+'</li>'+'</td>'+
						'<td class="cmmitabledata">'+'<ul>'+'<li>'+'<b class="projname">'+item.UOM_NAME+'</b>'+'<br>'+'</li>'+'<li>'+item.SECTOR_NAME+'<div class="atmreviewinfo" style="display:none">'+item.ATM_REVIEW_INFO+'</div><div class="rfiresponseinfo" style="display:none">'+item.RFI_RESPONSE_INFO+'</div><br>'+'</li>'+'<li>'+item.SERVICE_LINE+'</li>'+'</td>'+
							'<td class="atmreviewcell"><span>'+item.ATM_REVIEW_STATUS+'</span><br>'+
							'<img src="images/'+imgName1+'.png" class="cmmigreen">'+
							'</td>'+
							'<td class="rfiresponsecell"><span>'+item.RFI_RESPONSE_STATUS+'</span><br>'+
							'<img src="images/'+imgName2+'.png" class="cmmigreen"></td>'+
						'<tr>';
		
			 
		
		});
		
		tableHTML+=	'</table></div></div>';
		//$(slideNamedataID).append(tableHTML);
		
		
		
		
		//tableHTML="";
		
		
		
		
		
		
		
		tableHTML+='<div style="display: none;">'+
		'<div class="cmmitable">'+
        '<table id="homeTable" style="border-color: white; border-collapse: inherit">'+
	         '<tr>'+
             '<th class="cmmitablecol"></th>'+
				'<th>'+KPIcmmiheaderArr[kpiheadc++]+'</th>'+
				'</tr>';
		$(cmmiResultSet).each(function( i, item) {
			imgName1="";
			imgName2="";
		         
			if(item.FAR_REVIEW_FLAG=="G"){
				imgName1="cmmi_green";
				
			}else if(item.FAR_REVIEW_FLAG=="R"){
				imgName1="cmmi_red";
				
			}else if(item.FAR_REVIEW_FLAG=="A"){
				imgName1="cmmi_yellow";
				
			}       
				     
			
			tableHTML+=	'<tr>'+
			                //'<td class="cmmitabledata">'+'<b class="projname">'+item.UOM_NAME+'</b>'+'<br>'+item.SECTOR_NAME+'<div class="piidreadyinfo" style="display:none">'+item.PIID_READINESS_INFO+'</div><br>'+'<p>'+item.SERVICE_LINE+'</td>'+
			'<td class="cmmitabledata">'+'<ul>'+'<li>'+'<b class="projname">'+item.UOM_NAME+'</b>'+'<br>'+'</li>'+'<li>'+item.SECTOR_NAME+'<div class="farreviewinfo" style="display:none">'+item.FAR_REVIEW_INFO+'</div><br>'+'</li>'+'<li>'+item.SERVICE_LINE+'</li>'+'</td>'+
							'<td class="farreviewcell"><span>'+item.FAR_REVIEW_STATUS+'</span><br>'+
							'<img src="images/'+imgName1+'.png" class="cmmigreen">'+
							'</td>'+
						'<tr>';
		
			 
		
		});
		
		//tableHTML+=	'</table></div></div>';
		//$(slideNamedataID).append(tableHTML);
		
				
		
		//tableHTML="";
		
				
		tableHTML+=	'</table></div></div></div>';
		tableHTML+='<span data-u="arrowleft" class="jssora12l" style="top:123px;left:0px;width:30px;height:46px;" data-autocenter="2"></span>'+
	               '<span data-u="arrowright" class="jssora12r" style="top:123px;right:0px;width:30px;height:46px;" data-autocenter="2"></span>'+
	               '</div>';
		 
		$(cmmiDashSlide).append(tableHTML);
	
		
		//$('#KPIsectorSlide').append(tableHTML).trigger('create');
	
		doslidings(jssorcountcmmi);
		jssorcountcmmi++;
		cmmiSearchbar();

		setTimeout(function(){
			
			$('.cmmitable').parent().addClass('widepartanle');
			
			 $(cmmiDashSlide).trigger('create');
			 BonD.busierHide('login');
		}, 300);
		
}
else{
	
	alert("No Data found","DE Alert",null,"OK");
	
}

}

	//$('#id td:nth-child(3)');
function cmmiSearchbar(){		
		$(document).ready(function()
				{
					$('#cmmisearch').keyup(function()
					{
						searchTable($(this).val());
					});
				});

		
				function searchTable(inputVal)
				{
					var table = $("#homeTable,#homeTable,#homeTable");
					
					
					table.find('tr').each(function(index, row)
					{
						var allCells = $(row).find('td ul li b');
						
						if(allCells.length > 0)
						{
							var found = false;
							allCells.each(function(index, td)
							{
								var regExp = new RegExp(inputVal, 'i');
								if(regExp.test($(td).text()))
								{
									found = true;
									return false;
								}
							});
							if(found == true)$(row).show();else $(row).hide();
						}
					});
					
					
					
				} 
		}
		
		
		

			
		
		
		
		
	$("#cmmiDashBoard").on('click',".piidreadiness",function(){
		//BonD.busierShow('login', Messages.loading_indicator_title);
		var selectedProj=$(this).parent().find(".projname").html();
		var piidreadyinfo=$(this).parent().find(".piidreadyinfo").html(); 
		//alert("Project: " +selectedProj +"  \n PIID Ready Info: "+piidreadyinfo);
		
		WL.SimpleDialog.show("DEAlert", "Project: " +selectedProj +"  \n PIID Ready Info: "+piidreadyinfo, 
				[{
					text : 'Ok',
					handler : function() {}
				}]
				
			); 
		 
	});
	
	
	$("#cmmiDashBoard").on('click',".gicreadiness",function(){
		//BonD.busierShow('login', Messages.loading_indicator_title);
		var selectedProj=$(this).parent().find(".projname").html();
		var piidreadyinfo=$(this).parent().find(".gicreviewinfo").html(); 
		//alert("Project: " +selectedProj +"  \n GIC Review Info: "+piidreadyinfo);
		WL.SimpleDialog.show("DEAlert", "Project: " +selectedProj +"  \n GIC Review Info: "+piidreadyinfo, 
				[{
					text : 'Ok',
					handler : function() {}
				}]
				
			); 
		 
	});

	$("#cmmiDashBoard").on('click',".atmreviewcell",function(){
		//BonD.busierShow('login', Messages.loading_indicator_title);
		var selectedProj=$(this).parent().find(".projname").html();
		var piidreadyinfo=$(this).parent().find(".atmreviewinfo").html(); 
		//alert("Project: " +selectedProj +"  \n ATM Review Info: "+piidreadyinfo);
		WL.SimpleDialog.show("DEAlert", "Project: " +selectedProj +"  \n ATM Review Info: "+piidreadyinfo, 
				[{
					text : 'Ok',
					handler : function() {}
				}]
				
			); 
		 
	});
	
	$("#cmmiDashBoard").on('click',".rfiresponsecell",function(){
		//BonD.busierShow('login', Messages.loading_indicator_title);
		var selectedProj=$(this).parent().find(".projname").html();
		var piidreadyinfo=$(this).parent().find(".rfiresponseinfo").html(); 
		//alert("Project: " +selectedProj +"  \n RFI Response Info: "+piidreadyinfo);
		WL.SimpleDialog.show("DEAlert", "Project: " +selectedProj +"  \n RFI Response Info: "+piidreadyinfo, 
				[{
					text : 'Ok',
					handler : function() {}
				}]
				
			); 
		 
	});

	$("#cmmiDashBoard").on('click',".farreviewcell",function(){
		//BonD.busierShow('login', Messages.loading_indicator_title);
		var selectedProj=$(this).parent().find(".projname").html();
		var piidreadyinfo=$(this).parent().find(".farreviewinfo").html(); 
		//("Project: " +selectedProj +"  \n Far Review Info: "+piidreadyinfo);
		WL.SimpleDialog.show("DEAlert", "Project : " +selectedProj +"\nFar Review Info : "+piidreadyinfo, 
				[{
					text : 'Ok',
					handler : function() {}
				}]
				
			); 
		 
	});

	

		