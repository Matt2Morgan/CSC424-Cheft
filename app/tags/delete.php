<?php
$path = $_SERVER['DOCUMENT_ROOT']."/Cheft/global/php/connect.php";
require $path;


//Get data from POST
$post = (object) $_POST;

$TID = $post->TID;


$sql = "DELETE FROM `tags` WHERE `TID` = '$TID'";
$result = $conn->query($sql);

$conn->close();
?>