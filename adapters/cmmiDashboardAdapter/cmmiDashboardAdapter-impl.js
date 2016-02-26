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
 
var cmmiMetricsDataStatement = WL.Server.createSQLStatement("select a.uom_name,b.sector_name, c.service_line, d.* from DEAPP.uom_reference a, DEAPP.sector_reference b, DEAPP.service_line_reference c, DEAPP.cmmi_metrics_data d where a.uom_id = d.uom_id and b.sector_id = a.sector_id and c.service_line_id = a.service_line_id");
function cmmiMetricsData() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : cmmiMetricsDataStatement,
		parameters : []
	});
}

/************************************************************************
 * Implementation code for procedure - 'procedure2'
 *
 *
 * @return - invocationResult
 */
 
function procedure2(param) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "storedProcedure2",
		parameters : [param]
	});
}

