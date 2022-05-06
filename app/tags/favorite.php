<?php
$path = $_SERVER['DOCUMENT_ROOT']."/Cheft/global/php/connect.php";
require $path;


//Get data from POST
$post = (object) $_POST;

$tid = $post->tid;
$uid = $post->uid;


$sql = "SELECT * FROM `tags_fav` WHERE `TID` = $tid AND `UID` = $uid";
$result = $conn->query($sql);

if ($result->num_rows > 0)
{
  $sql = "DELETE FROM `tags_fav` WHERE `TID` = $tid AND `UID` = $uid";
  $result = $conn->query($sql);
  echo '1';
}
else
{
  $sql = "INSERT INTO `tags_fav`(`TID`, `UID`) VALUES ('$tid','$uid')";
  $result = $conn->query($sql);
  echo '0';
}

$conn->close();
?>