<?php
$path = $_SERVER['DOCUMENT_ROOT']."/Cheft/global/php/connect.php";
require $path;


//Get data from POST
$post = (object) $_POST;

$UID = $post->UID;

$target_dir = $_SERVER['DOCUMENT_ROOT']."/Cheft/assets/img/profile/";
$target_file = $target_dir . "$UID.jpg";
If (unlink($target_file)) {
  // file was successfully deleted
} else {
  // there was a problem deleting the file
}

$sql = "DELETE FROM `users` WHERE `UID` = '$UID'";
$result = $conn->query($sql);

$conn->close();
?>