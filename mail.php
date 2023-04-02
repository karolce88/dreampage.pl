<?php

$name = $_POST["name"];
$from = $_POST["email"];
$subject = "Wiadomosc z formularza na stronie";
$to = "biuro@dreampage.pl";
$message = $_POST["msg"];

$txt = "Imie " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Tresc: " . $message;

$headers = "From: " . $form . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
    header("Location: /index.html?mail_status=sent");
} else {
    header("Location: /index.html?mail_status=error");
}