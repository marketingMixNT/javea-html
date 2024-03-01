<?php

header('Content-Type: text/html; charset=utf-8');

$EmailFrom = "marek.gacek@marketingmix.pl"; // Zmień na swój rzeczywisty adres e-mail
$EmailTo = "marek.gacek@marketingmix.pl";
$Subject = "New message from javeadream.es/";
$Name = Trim(stripslashes($_POST['Name']));
$Tel = Trim(stripslashes($_POST['Tel']));
$Email = Trim(stripslashes($_POST['Email']));
$Message = Trim(stripslashes($_POST['Message']));

// Validation
$validationOK = true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// Prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $Tel;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// Set email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n";
$headers .= "From: $EmailFrom" . "\r\n";

// Send email
$success = mail($EmailTo, $Subject, $Body, $headers);

// Redirect to success page
if ($success) {
  header('Location: ../thanks_for_the_message.html');
} else {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
