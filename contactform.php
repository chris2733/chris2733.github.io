
<?php
	$email_to = "hello@chris-law.uk";
	$email_subject = "contactform submission";
	$name = $_POST['name'];
	$email_from = $_POST['email'];
	$msg = $_POST['message'];
	$email_msg = "
		Form Details

		Name:$name
		Email:$email_from
		Message:

		$msg
	";
	$headers = 'From: '.$email_from."\r\n".
 	'Reply-To: '.$email_from."\r\n" .
 	'X-Mailer: PHP/' . phpversion();

	 @mail($email_to, $email_subject, $email_msg, $headers);
?>
