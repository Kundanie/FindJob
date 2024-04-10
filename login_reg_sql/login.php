<?php
session_start();

$raw_datas = file_get_contents("php://input");
$datas = json_decode($raw_datas, true);

if ($datas !== null) {
    $userName = $datas["userName"];
    $userPassword = $datas["password"];
} else {
    $userName = $_POST["userName"];
    $userPassword = $_POST["password"];
}

$errorCode = 1;
$errorMessage = "Sikertelen bejelentkezés!";
$dataLine = [];

// Adatbázissal kapcsolódás:
$server_name = "localhost";
$user_name = "root";
$user_password = "";
$db_name = "loginandregist";

$conn = new mysqli($server_name, $user_name, $user_password, $db_name);

if ($conn->connect_error) {

    die("Az adatbázissal kapcsolódás sikertelen" . $conn->connect_error);
}

// Lekérdezés előkészítése:
$stmt = $conn->prepare("SELECT userName, firstName, lastName FROM users WHERE Password = ? and userName = ?");
$stmt->bind_param("ss", $userPassword, $userName);


// Lekérdezés végrehajtása:
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if ($row["userName"] === $userName) {



        $errorCode = 0;
        $errorMessage = "Sikeres bejelentkezés!";
        $dataLine = [];

        $_SESSION["userName"] = $userName;
    } else {
        $errorCode = 1;
        $errorMessage = "Helytelen felhasználónév vagy jelszó!";
        $dataLine = [];
    }
}

$message = ["errorCode" => $errorCode, "errorMessage" => $errorMessage, "dataLine" => $dataLine];
echo json_encode($message);
