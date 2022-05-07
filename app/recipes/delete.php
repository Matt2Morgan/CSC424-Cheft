<?php
$path = $_SERVER['DOCUMENT_ROOT']."/Cheft/global/php/connect.php";
require $path;


//Get data from POST
$post = (object) $_POST;

$RID = $post->RID;

$target_dir = $_SERVER['DOCUMENT_ROOT']."/Cheft/assets/img/recipe/";
$target_file = $target_dir . "$RID.jpg";
If (unlink($target_file)) {
  // file was successfully deleted
} else {
  // there was a problem deleting the file
}


$sql = "DELETE FROM `recipes` WHERE `recipeID` = '$RID'";
$result = $conn->query($sql);

$conn->close();
?>