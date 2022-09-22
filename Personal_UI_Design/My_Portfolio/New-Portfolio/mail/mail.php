<?php

$c_name = $_POST['name'];
$c_phone = $_POST['phone'];
$c_email = $_POST['email'];
$c_message = $_POST['message'];


$formcontent = "From : $c_name \n Phone-Number: $c_phone \n Email: $c_email \n Message : $c_message";
$mailTo = "eng.mazharul2@gmail.com";
$subject = "My Career Profile";
$mailheader = "Form : $c_email \r\n";
mail($mailTo, $subject, $formcontent, $mailheader) or die("Error!");

echo "congratulations";