<?php


session_start();

$raw_datas = file_get_contents("php://input");
$datas = json_decode($raw_datas, true);

if ($datas !== null) {
    $userName = $datas["userName"];
    $user_fname = $datas["firstName"];
    $user_lname = $datas["lastName"];
    $email = $datas["email"];
    $password = $datas["password"];
} else {
    $userName = $_POST["userName"];
    $user_fname = $_POST["firstName"];
    $user_lname = $_POST["lastName"];
    $email = $_POST["email"];
    $password = $_POST["password"];
}

$conn = new mysqli("localhost", "root", "", "loginandregist");
if ($conn->connect_error) {
    /*echo "Error:". PHP_EOL;
    echo "Hiba kódja". mysqli_connect_errno() . PHP_EOL;
    echo "Hiba oka: " . mysqli_connect_error() . PHP_EOL;*/
}
$fullName = $user_fname . $user_lname;

$stmt = $conn->prepare("SELECT * from users WHERE emailAdress= ?;");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();


if ($result->num_rows > 0) {
    $errorCode = 1;
    $errorMessage = "Az E-mail cím foglalt!";
    $dataLine = [];

    $stmt = $conn->prepare("SELECT * from users WHERE userName = ?;");
    $stmt->bind_param("s", $userName);
    $stmt->execute();
    $result = $stmt->get_result();


    if ($result->num_rows > 0) {
        $errorCode = 1;
        $errorMessage = "A felhasználónév foglalt!";
        $dataLine = [];
    }
} else {
    
    $stmt = $conn->prepare("INSERT INTO users (userName, firstName, lastName, Password, emailAdress) VALUES (?,?,?,?,?)");
    $stmt->bind_param("sssss", $userName, $user_fname, $user_lname,$password, $email);
    if ($stmt->execute()) {
        $errorCode = 0;
        $errorMessage = "Sikeres regisztráció!";
        $dataLine = [];
        ///////////////////////////////////////////////////

        /*// A PHPMailer autoloader fájlának betöltése
    require 'vendor/autoload.php';
    
    // PHPMailer objektum létrehozása
    
    
    try {
        // SMTP beállítások
        $mail->isSMTP();
        $mail->Host = 'smtp.example.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'your_smtp_username';
        $mail->Password = 'your_smtp_password';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
    
        // Feladó és címzett beállítása
        $mail->setFrom('your_email@example.com', 'Your Name');
        $mail->addAddress('recipient@example.com', 'Recipient Name');
    
        // Email tartalma
        $mail->isHTML(true);
        $mail->Subject = 'Teszt üzenet';
        $mail->Body    = 'Ez egy teszt üzenet.';
    
        // Email elküldése
        $mail->send();
        echo 'Az email sikeresen elküldve.';
    } catch (Exception $e) {
        echo 'Hiba történt az email küldése közben: ', $mail->ErrorInfo;
    }
    */


        ///////////////////////////////////
    } else {
        $errorCode = 1;
        $errorMessage = "Sikertelen regisztráció!";
        $dataLine = [];
    }
}


$message = ["errorCode" => $errorCode, "errorMessage" => $errorMessage, "dataLine" => $dataLine];
$stmt->close();
$conn->close();
echo json_encode($message);
