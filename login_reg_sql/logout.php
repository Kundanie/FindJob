<?php
session_start();

session_unset();
session_destroy();
$message="Sikeres kijelentkezés";
echo json_encode($message);
?>