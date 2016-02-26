/**
 * This adapter is used to send mail to IBM internal mail servers
 * @module SendEmailAdapter
 */

/**
 * This function instantiate the MailBean class and call the sendMail method of that object to send email.  
 * @param from - the email address of the sender
 * @param toEmail - the email address of the receiver
 * @param subject - the email subject
 * @param body - the content of the email
 * @returns result
 */

function sendMail(from, toEmail, subject, body){
	var ss = new com.ibm.cio.sendemail.MailBean();
	var content =ss.sendMail(from,toEmail,subject,body);
	return {
		result : content
	};
}

//send email with attachment
function sendMailWithAttach(EMailJSON){
	var from = EMailJSON["from"].toString();
	var emails = EMailJSON["to"].toString();
	var subject = EMailJSON["subject"].toString();
	var body = EMailJSON["content"].toString();
	var fileArray = JSON.stringify(EMailJSON.fileArray);
	var ss = new com.ibm.cio.sendemail.MailBean();
	
	return {
		result : ss.sendMailWithAtt(from, emails,subject,body,fileArray,EMailJSON.zipFlag)
	};
}


