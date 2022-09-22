<?php

  $c_name = $_POST['name'];
  $c_phone = $_POST['email'];
  $c_email = $_POST['subject'];
  $c_message = $_POST['message'];


 $formcontent = "From : $c_name \n subject: $c_phone \n Email: $c_email \n Message : $c_message";
 $mailTo = "mymail@azkerbazar.com";
 $subject = "My Protfolio";
 $mailheader = "Form : $c_email \r\n";
 mail ($mailTo, $subject, $formcontent, $mailheader) or die("Error!");

 echo "congratulations message send Successfully";

 ?>
