<?php

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
   
    $name = $request->name;
    $email = $request->email;
    $message = $request->message;

   /* $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];*/

    echo "$name : $email : $message";

    $to = 'a2.ankitrai@gmail.com'; // PUT YOUR EMAIL ADDRESS HERE
    $email_subject = "Request from:  $name"; // EDIT THE EMAIL SUBJECT LINE HERE
    $email_body = "Dear Ankit,\n\n".
                  "There has been a request at your website.\n\n".
                  "Here are the details:\n\nName:   $name\n\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: do-not-reply@ankitrai.com\n";
    $headers .= "Reply-To: $email_address";	
    mail($to,$email_subject,$email_body,$headers);
    
    /*if(@mail($to, $email_subject, $email_body, $headers))
    {
      echo "Mail Sent Successfully";
    }else{
      echo "Mail Not Sent";
    }*/


    /* Sending email to the requesting person*/
        
    $email_subject = "Your message received"; 
    $email_body = "Greetings!\n\n".
                  "Your message has been successfully received.\n".
                  "I will contact you shortly.\n\n".
                  "Best Regards\n"."Ankit Rai\n"."www.ankitrai.com";
    $headers = "From: do-not-reply@ankitrai.com\n";
    $headers .= "Reply-To: connect@ankitrai.com";	
 /*   mail($email,$email_subject,$email_body,$headers);
*/
    if(@mail($email, $email_subject, $email_body, $headers))
    {
      echo "Mail Sent Successfully";
    }else{
      echo "Mail Not Sent";
    }

    return true;


?>