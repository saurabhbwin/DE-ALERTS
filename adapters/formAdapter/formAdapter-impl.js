/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/************************************************************************
 * Implementation code for procedure - 'procedure1'
 *
 *
 * @return - invocationResultprocedureUom
 */
 
var procedure1Statement = WL.Server.createSQLStatement("select * from DEAPP.SECTOR_REFERENCE");
function procedure1() { 
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : []
	});
}

var procedure2Statement = WL.Server.createSQLStatement("select * from DEAPP.UOM_REFERENCE");
function procedure2() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure2Statement,
		parameters : []
	});
}

var procedure3Statement = WL.Server.createSQLStatement("select * from DEAPP.UOM_HEADER");
function procedure3() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure3Statement,
		parameters : []
	});
}


var procedure4Statement = WL.Server.createSQLStatement("select * from DEAPP.UOM_REFERENCE where SECTOR_ID=4");
function procedure4() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure4Statement,
		parameters : []
	});
}
/*select SECTOR_ID,SECTOR_NAME from DEAPP.UOM_HEADER,DEAPP.UOM_REFERENCE where DEAPP.UOM_HEADER.STATUS='ESCALATED' and DEAPP.UOM_HEADER.UOM_ID = DEAPP.UOM_REFERENCE.UOM_ID*/

//select SECTOR_NAME from DEAPP.UOM_HEADER,DEAPP.UOM_REFERENCE,DEAPP.SECTOR_REFERENCE where DEAPP.SECTOR_REFERENCE.SECTOR_ID=(select SECTOR_ID from DEAPP.UOM_HEADER,DEAPP.UOM_REFERENCE where DEAPP.UOM_HEADER.STATUS='ESCALATED' and DEAPP.UOM_HEADER.UOM_ID = DEAPP.UOM_REFERENCE.UOM_ID)
var procedure5Statement = WL.Server.createSQLStatement("SELECT SECTOR_NAME FROM DEAPP.SECTOR_REFERENCE where SECTOR_ID in( select SECTOR_ID from DEAPP.UOM_HEADER,DEAPP.UOM_REFERENCE where DEAPP.UOM_HEADER.UOM_ID=DEAPP.UOM_REFERENCE.UOM_ID and DEAPP.UOM_HEADER.ESCALATION_STATUS='ESCALATED') ");
function procedure5() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure5Statement,
		parameters : []
	});
}



var procedure6Statement = WL.Server.createSQLStatement("select SERVICE_LINE from DEAPP.SERVICE_LINE_REFERENCE,DEAPP.UOM_REFERENCE where DEAPP.SERVICE_LINE_REFERENCE.SERVICE_LINE_ID = DEAPP.UOM_REFERENCE.SERVICE_LINE_ID and DEAPP.UOM_REFERENCE.SECTOR_ID=4 ");
function procedure6() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure6Statement,
		parameters : []
	});
}


var procedure7Statement = WL.Server.createSQLStatement("select * from DEAPP.UOM_REFERENCE where SECTOR_ID=3");
function procedure7() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure7Statement,
		parameters : []
	});
}
var procedure8Statement = WL.Server.createSQLStatement("select SERVICE_LINE from DEAPP.SERVICE_LINE_REFERENCE,DEAPP.UOM_REFERENCE where DEAPP.SERVICE_LINE_REFERENCE.SERVICE_LINE_ID = DEAPP.UOM_REFERENCE.SERVICE_LINE_ID and DEAPP.UOM_REFERENCE.SECTOR_ID=3 ");
function procedure8() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure8Statement,
		parameters : []
	});
}


var procedureaStatement = WL.Server.createSQLStatement("select * from DEAPP.UOM_REFERENCE,DEAPP.UOM_HEADER where  DEAPP.UOM_HEADER.UOM_ID= DEAPP.UOM_REFERENCE.UOM_ID ORDER BY SECTOR_ID ASC");
function procedurea() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedureaStatement,
		parameters : []
	});
}


var procedureServiceLineStatement = WL.Server.createSQLStatement("SELECT SERVICE_LINE,SERVICE_LINE_ID FROM DEAPP.SERVICE_LINE_REFERENCE where SERVICE_LINE_ID in( select SERVICE_LINE_ID from DEAPP.UOM_HEADER,DEAPP.UOM_REFERENCE where DEAPP.UOM_HEADER.UOM_ID=DEAPP.UOM_REFERENCE.UOM_ID and DEAPP.UOM_HEADER.STATUS='ESCALATED') ");
function procedureServiceLine() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedureServiceLineStatement,
		parameters : []
	});
}


var procedurecStatement = WL.Server.createSQLStatement("Select * from deapp.service_line_reference a,deapp.uom_reference b, deapp.uom_header c where a.service_line_id = b.service_line_id and b.uom_id = c.uom_id   ORDER BY SECTOR_ID,IDENTIFIED_ON DESC");
function procedurec() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedurecStatement,
		parameters : []
	});
}


//var procedureUomHeaderStatement = WL.Server.createSQLStatement("insert into DEAPP.UOM_HEADER(UOM_ID,IDENTIFIED_ON,FROM_TO,CONCERNS,ESCALATION_STATUS,DELIVERY_ISSUES,UPDATED_BY,UPDATED_TIMESTAMP,TROUBLED_STATUS) values(?,?,?,?,?,?,?,?,?)");
/*var procedureUomHeaderStatement=WL.Server.createSQLStatement("insert into 'DEAPP'.'UOM_HEADER' ('UOM_ID', 'IDENTIFIED_ON', 'FROM_TO', 'CONCERNS', 'ESCALATION_STATUS', 'DELIVERY_ISSUES', 'UPDATED_BY', 'TROUBLED_STATUS') values('DE-14-01626', '2015-02-17', '', 'Test Msg', 'ESCALATION', 'Y', 'saurabhjha@in.ibm.com')");

function insertUomHeader(uomId,identified,fromTo,concerns,escalation_status,issues,updated,timestamp) {
	
	//WL.Logger.info("insertUomHeader params "+uomId+" "+identified+" "+fromTo+" "+concerns+" "+escalation_status+" "" "+issues+" "+updated+" "+timestamp);
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedureUomHeaderStatement,
		parameters : [uomId,identified,fromTo,concerns,escalation_status,"",issues,updated,timestamp]
	});
}
*/
var queryhold="INSERT INTO DEAPP.UOM_HEADER (UOM_ID,IDENTIFIED_ON,FROM_TO,CONCERNS,ESCALATION_STATUS,DELIVERY_ISSUES,UPDATED_BY) values(?,?,?,?,?,?,?)";
var procedureUomHeaderStatement = WL.Server.createSQLStatement(queryhold);
function insertUomHeader(uomid,date,fromto,concerns,escalation,delivery,updatedby){
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedureUomHeaderStatement,
		parameters : [uomid,date,fromto,concerns,escalation,delivery,updatedby]
	});
} 

var procedureUomHeaderupdateStatement = WL.Server.createSQLStatement("update DEAPP.UOM_HEADER SET IDENTIFIED_ON=?,FROM_TO=?,CONCERNS=?,ESCALATION_STATUS=?,DELIVERY_ISSUES=?,UPDATED_BY=? where UOM_ID=?");
function updateUomHeader(uomId,identified,fromTo,concerns,escalation_status,issues,updated) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedureUomHeaderupdateStatement,
		parameters : [identified,fromTo,concerns,escalation_status,issues,updated,uomId]
	});
}

var updatequeryhold="INSERT INTO DEAPP.UOM_DETAILS (UOM_ID,SEQ,UPDATES,ADDITIONAL_NOTIFIERS,NOTIFY,UPDATED_BY) values(?,?,?,?,?,?)";
var procedureUomDetailsStatement = WL.Server.createSQLStatement(updatequeryhold);
function insertUomDetails(uomId,sequence,updates,additional,notify,updated) {
	//WL.Logger.info("testinmg");
	//WL.Logger.info("procedureUomDetailsStatement" +procedureUomDetailsStatement.toString);
	//DE-13-00717 3 dsds dd N sidmirji@in.ibm.com 2015-06-09
	//WL.Logger.info("insertUomDetails params "+uomId+" "+sequence+" "+updates+" "+additional+" "+notify+" "+updated+" "+timestamp);
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedureUomDetailsStatement,
		parameters : [uomId,sequence,updates,additional,notify,updated]
	});
}

var procedureUomDetailsupdateStatement = WL.Server.createSQLStatement("update DEAPP.UOM_DETAILS SET SEQ=?,UPDATES=?,ADDITIONAL_NOTIFIERS=?,NOTIFY=?,UPDATED_BY=?,UPDATED_TIMESTAMP=? where UOM_ID=?");
function updateUomDetails(uomId,sequence,updates,additional,notify,updated,timestamp) {
	//WL.Logger.info("testinmg");
	//WL.Logger.info("procedureUomDetailsStatement" +procedureUomDetailsStatement.toString);
	//DE-13-00717 3 dsds dd N sidmirji@in.ibm.com 2015-06-09
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedureUomDetailsupdateStatement,
		parameters : [sequence,updates,additional,notify,updated,timestamp,uomId]
	});
}





//var procedureServiceStatement = WL.Server.createSQLStatement("select * from DEAPP.UOM_REFERENCE,DEAPP.SERVICE_LINE_REFERENCE,deapp.uom_header,DEAPP.UOM_DETAILS d where DEAPP.UOM_REFERENCE.UOM_ID= ? and DEAPP.UOM_REFERENCE.SERVICE_LINE_ID=DEAPP.SERVICE_LINE_REFERENCE.SERVICE_LINE_ID and DEAPP.UOM_REFERENCE.UOM_ID=deapp.uom_header.UOM_ID and DEAPP.UOM_REFERENCE.UOM_ID=d.UOM_ID");


var procedureServiceStatement = WL.Server.createSQLStatement("SELECT * FROM DEAPP.UOM_REFERENCE UR, DEAPP.SERVICE_LINE_REFERENCE SLR WHERE UR.UOM_ID = ? AND SLR.SERVICE_LINE_ID = UR.SERVICE_LINE_ID");

function procedureService(a) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedureServiceStatement,
		parameters : [a]
	});
}


//var procedureUomStatement = WL.Server.createSQLStatement("select * from DEAPP.UOM_REFERENCE where sector_id=? order by UOM_NAME ASC");//fetch first 301 rows only");
var procedureUomStatement = WL.Server.createSQLStatement("SELECT * FROM DEAPP.UOM_REFERENCE UR WHERE SECTOR_ID = ? AND NOT EXISTS (SELECT 1 FROM DEAPP.UOM_HEADER UH  WHERE UH.UOM_ID = UR.UOM_ID AND UH.ESCALATION_STATUS <> 'CLOSED') order by UOM_NAME ASC");
function procedureUom(param) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedureUomStatement,
		parameters : [param]
	});
}

var procedureAllStatement = WL.Server.createSQLStatement("Select * from deapp.service_line_reference a,deapp.uom_reference b, deapp.uom_header c , deapp.uom_details d where a.service_line_id = b.service_line_id and b.uom_id = c.uom_id  and d.uom_id = c.uom_id and d.UOM_ID=? ORDER BY SEQ DESC");
function procedureAll(param) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedureAllStatement,
		parameters : [param]
	});
}
var procedurecheckifpm=WL.Server.createSQLStatement("Select * from deapp.UOM_REFERENCE where GDC_PM=?");
function checkifpm(username){
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedurecheckifpm,
		parameters : [username]
	});
}
var procedurepnStatement = WL.Server.createSQLStatement("Select * from deapp.service_line_reference a,deapp.uom_reference b, deapp.uom_header c where a.service_line_id = b.service_line_id and b.uom_id = c.uom_id and  b.UOM_NAME=?  ORDER BY SECTOR_ID ASC");
function procedurepn(projectname) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedurepnStatement,
		parameters : [projectname]
	});
}
var procedureuomnameStatement = WL.Server.createSQLStatement("Select UOM_NAME  from deapp.uom_reference a,deapp.uom_header b where b.uom_id=a.uom_id");
function procedureuomnames(){
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedureuomnameStatement,
		parameters : []
	});
}
var procedureadditionalStatement = WL.Server.createSQLStatement("Select * from DEAPP.DEFAULT_ALERT_LIST");
function procedureadditional(){
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedureadditionalStatement,
		parameters : []
	});
}

var procmatStatementtarget = WL.Server.createSQLStatement("select * from DEAPP.KPI_METRICS_TARGETS");
function procedure20() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procmatStatementtarget,
		parameters : []
	});
}
	
	var prockipmetdata = WL.Server.createSQLStatement("select * from DEAPP.KPI_METRICS_DATA");
	function procedure21() {
		return WL.Server.invokeSQLStatement({
			preparedStatement : prockipmetdata,
			parameters : []
		});
	}

	
	