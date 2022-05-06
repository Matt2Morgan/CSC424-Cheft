<?php
$path = $_SERVER['DOCUMENT_ROOT']."/Cheft/global/php/connect.php";
require $path;


//Get data from POST
$post = (object) $_POST;

$RID = $post->RID;


$sql = "DELETE FROM `recipes` WHERE `recipeID` = '$RID'";
$result = $conn->query($sql);

$conn->close();
?>