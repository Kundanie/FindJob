<?php
session_start();
include "./printlog.php";

$errorCode = 1;
$errorMessage = "Sikertelen jelentkezés";
$dataLine = [];

$server_name = "localhost";
$user_name = "root";
$user_password = "";
$db_name = "loginandregist";

$conn = new mysqli($server_name, $user_name, $user_password, $db_name);

if ($conn->connect_error) {
    die("Az adatbázissal kapcsolódás sikertelen" . $conn->connect_error);
}

// Lekérdezés előkészítése:
$stmt = $conn->prepare("SELECT id, userName, jobTitle, category FROM job WHERE  userName = ?");
$stmt->bind_param("s", $_SESSION["userName"]);
$stmt->execute();
$result = $stmt->get_result();

// Tömb inicializálása
$dataLine = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Sor hozzáadása a tömbhöz
        $dataLine[] = $row;
    }
    $errorCode = 0;
    $errorMessage = "Sikeres jelentkezés";
} else {
    $errorCode = 1;
    $errorMessage = "Sikertelen jelentkezés";
}

$message = ["errorCode" => $errorCode, "errorMessage" => $errorMessage, "dataLine" => $dataLine];
echo json_encode($message);
?>
