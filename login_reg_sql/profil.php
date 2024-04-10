<?php
session_start();
$errorCode=0;
$errorMessage="";
$dataLine=["name"=>$_SESSION["userName"]];
$message = ["errorCode"=>$errorCode, "errorMessage"=>$errorMessage, "dataLine"=>$dataLine];

echo json_encode($message);
?>