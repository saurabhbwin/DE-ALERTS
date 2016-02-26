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
 * @return - invocationResult
 */
 
var CountResponsesOnQuest = WL.Server.createSQLStatement("SELECT  COUNT(*) as "+"COUNT"+" FROM DEAPP.DE_SUPPORT WHERE TO_ID = ? AND READ_IND != 'Y'");
function countResponses(logeinuserid) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : CountResponsesOnQuest,
		parameters : [logeinuserid]
	});
}

/************************************************************************
 * Implementation code for procedure - 'procedure2'
 *
 *
 * @return - invocationResult
 */

	var CountRaisedQueststmt = WL.Server.createSQLStatement("SELECT COUNT(*) as "+"COUNT"+" FROM DEAPP.DE_SUPPORT WHERE TO_ID = 'desupport@ibm.com' AND READ_IND != 'Y'");
	function getRaisedQueryCount () {
		return WL.Server.invokeSQLStatement({
			preparedStatement  : CountRaisedQueststmt,
			parameters : []	
	});
}

	
	var UseridQuest = WL.Server.createSQLStatement("SELECT DISTINCT FROM_ID FROM DEAPP.DE_SUPPORT WHERE TO_ID = ‘desupport@ibm.com’ AND READ_IND != ‘Y’ ORDER BY UPDATE_TIMESTAMP DESC;");
	function QuestionsUserid() {
		return WL.Server.invokeSQLStatement({
			preparedStatement : UseridQuest,
			parameters : []
		});
	}
	
	
	
	var ChatHistorySupportRole = WL.Server.createSQLStatement("SELECT DISTINCT FROM_ID FROM DEAPP.DE_SUPPORT WHERE TO_ID = ‘desupport@ibm.com’ AND READ_IND != ‘Y’ ORDER BY UPDATE_TIMESTAMP DESC;");
	function ChatHistorySupport() {
		return WL.Server.invokeSQLStatement({
			preparedStatement : ChatHistorySupportRole,
			parameters : []
		});
	}
	
	
	
	var ChatHistoryUserRole = WL.Server.createSQLStatement("SELECT * FROM DEAPP.DE_SUPPORT WHERE FROM_ID = ? OR TO_ID = ? ORDER BY UPDATED_TIMESTAMP ASC");
	function ChatHistoryUser(userid) {
		return WL.Server.invokeSQLStatement({
			preparedStatement : ChatHistoryUserRole,
			parameters : [userid,userid]
		});
	}

	
	
	var MarkUserResponsesRead = WL.Server.createSQLStatement("UPDATE DEAPP.DE_SUPPORT SET READ_IND = 'Y' WHERE FROM_ID = 'desupport@ibm.com' AND TO_ID = ? AND READ_IND != 'Y'");
	function doMarkUserResponsesRead(userid) {
		return WL.Server.invokeSQLStatement({
			preparedStatement : MarkUserResponsesRead ,
			parameters : [userid]
		});
	}
	
	
	
	var InsertUserRequests = WL.Server.createSQLStatement("INSERT INTO DEAPP.DE_SUPPORT (FROM_ID, TO_ID, MESSAGE, UPDATED_BY) VALUES(? ,'desupport@ibm.com' ,? ,?)");
	function InsertRequests(logedinuser,msg) {
		return WL.Server.invokeSQLStatement({
			preparedStatement : InsertUserRequests ,
			parameters : [logedinuser,msg,logedinuser]
		});
	}
	
	
	var getUsersRequestsListStmt = WL.Server.createSQLStatement("SELECT FROM_ID FROM DEAPP.DE_SUPPORT WHERE TO_ID = 'desupport@ibm.com'  ORDER BY UPDATED_TIMESTAMP DESC");
	function getUsersRequestsList() {
		return WL.Server.invokeSQLStatement({
			preparedStatement : getUsersRequestsListStmt ,
			parameters : []
		});
	}
	
	var getUsersNewRequestsUnreadCountStmt = WL.Server.createSQLStatement("SELECT  COUNT(*) as "+"COUNT"+" FROM DEAPP.DE_SUPPORT WHERE FROM_ID = ? AND READ_IND != 'Y'");
	function getUsersNewRequestsUnreadCount(user,target) {
		var invoke= WL.Server.invokeSQLStatement({
			preparedStatement : getUsersNewRequestsUnreadCountStmt ,
			parameters : [user]
		});
		 
		// invoke.resultSet.push({"target":"rarfg"});
		// var trg= {"trg":"ff"};
		// return invoke.add(trg);
		 return {
	           "countdata" : invoke,
	           "trg":target
	    };
	}
	
	

	var getChatHistoryforSupportStmt = WL.Server.createSQLStatement("SELECT * FROM DEAPP.DE_SUPPORT WHERE (FROM_ID ='desupport@ibm.com' OR FROM_ID = ? ) AND (TO_ID ='desupport@ibm.com' OR TO_ID = ? )  ORDER BY UPDATED_TIMESTAMP ASC");
	function getChatHistoryforSupport(seluse) {
		return WL.Server.invokeSQLStatement({
			preparedStatement : getChatHistoryforSupportStmt ,
			parameters : [seluse,seluse]
		});
	}
	
	var respondtoUsersQuerySupportStmt = WL.Server.createSQLStatement("INSERT INTO DEAPP.DE_SUPPORT (FROM_ID, TO_ID, MESSAGE, UPDATED_BY) VALUES('desupport@ibm.com',?,?,?)");
	function updateSupporttoUsers(seluserfromlist,respmsg,loggedinsupportid) {
		return WL.Server.invokeSQLStatement({
			preparedStatement : respondtoUsersQuerySupportStmt ,
			parameters : [seluserfromlist,respmsg,loggedinsupportid]
		});
	}
	
	var doMarkProviderResponsesReadStmt = WL.Server.createSQLStatement("UPDATE DEAPP.DE_SUPPORT SET READ_IND = 'Y' WHERE FROM_ID = ? AND TO_ID = 'desupport@ibm.com' AND READ_IND != 'Y'");
	function doMarkProviderResponsesRead(seluserfromlist) {
		return WL.Server.invokeSQLStatement({
			preparedStatement : doMarkProviderResponsesReadStmt ,
			parameters : [seluserfromlist]
		});
	}

	
	