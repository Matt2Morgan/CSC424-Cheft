<?php
$path = $_SERVER['DOCUMENT_ROOT']."/Cheft/global/php/connect.php";
require $path;


//Get data from POST
$post = (object) $_POST;

$UID = $post->UID;


$sql = "DELETE FROM `users` WHERE `UID` = '$UID'";
$result = $conn->query($sql);

$conn->close();
?>