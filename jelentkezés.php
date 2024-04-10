<?php
include "./printlog.php";
session_start();

$raw_datas=file_get_contents("php://input");
$datas=json_decode($raw_datas,true);
$errorCode=1;
$errorMessage="Sikertelen jelentkezés";
 if($datas!==null)
 {
    $cardTitle=$datas["cardTitle"];
    $place=trim($datas["place"]);
 }
 else{
    $cardTitle=$_POST["cardTitle"];
    $place=$_POST["place"];
 }

 $conn = new mysqli("localhost", "root", "", "loginandregist");

if ($conn->connect_error) {
    $errorCode=1;
    $errorMessage="Sikertelen adatbázis kapcsolat";
    
}



$stmt = $conn->prepare("INSERT INTO job(userName, jobTitle, category) VALUES (?,?,?)");

$stmt->bind_param("sss",$_SESSION["userName"], $cardTitle, $place);


if($stmt->execute())
{
    $errorCode=0;
    $errorMessage="Sikeres jelentkezés";
}
else{
    $errorCode=1;
    $errorMessage="Sikertelen jelentkezés";
}
$stmt->close();
$conn->close();
$message=["errorCode"=>$errorCode, "errorMessage"=>$errorMessage];
echo json_encode($message);

?>