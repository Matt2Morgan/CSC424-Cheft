<?php
$path = $_SERVER['DOCUMENT_ROOT']."/Cheft/global/php/connect.php";
require $path;


//Get data from POST
$post = (object) $_POST;

$UID1 = $post->UID1;
$UID2 = $post->UID2;


$sql = "SELECT * FROM follows WHERE `UID1` = $UID1 AND `UID2` = $UID2";
$result = $conn->query($sql);

if ($result->num_rows > 0)
{
  $sql = "DELETE FROM `follows` WHERE `UID1` = $UID1 AND `UID2` = $UID2";
  $result = $conn->query($sql);
  echo '1';
}
else
{
  $sql = "INSERT INTO `follows`(`UID1`, `UID2`) VALUES ('$UID1','$UID2')";
  $result = $conn->query($sql);
  echo '0';
}

$conn->close();
?>