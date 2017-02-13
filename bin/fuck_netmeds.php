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

    $to = 'cs@netmeds.com'; // PUT YOUR EMAIL ADDRESS HERE
    $email_subject = "Refund for cancelled order NMS160327399074W"; // EDIT THE EMAIL SUBJECT LINE HERE
    $email_body = "Dear Netmeds,\n\n".
                  "The amount for order NMS160327399074W which was placed at your site was Rs. 1004.05 . It was cancelled for recreated and the amount for the new order NMS160405437521WRC is Rs. 958.65\n\n".
                  "Request you to refund the remaining amount. Also the shipping charge for the same was told to be Rs. 49. However, it is been charged as Rs 99. Please refund this as well.\n\n".
        "At the time of ordering I paid the amount through Paytm wallet whose 5% cashback also has not been issued till date. Please issue this cashback. \n\n"."With Regards";
    $headers = "From: a2.ankit.rai@gmail.com\n";
    $headers .= "Reply-To: a2.ankit.rai@gmail.com";	
//    mail($to,$email_subject,$email_body,$headers);

for ($x = 1; $x <= 5; $x++) {
    $email_subject = "Refund for cancelled order NMS160327399074W  query_$x"; // EDIT THE EMAIL SUBJECT LINE HERE
       mail($to,$email_subject,$email_body,$headers);
} 
    
    /*if(@mail($to, $email_subject, $email_body, $headers))
    {
      echo "Mail Sent Successfully";
    }else{
      echo "Mail Not Sent";
    }*/

    return true;


?>