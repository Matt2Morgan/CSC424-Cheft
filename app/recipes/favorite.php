<?php
$servername = '127.0.0.1';
$username = 'root';
$password = '';
$dbname = 'cheft';
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

//Get data from POST
$post = (object) $_POST;

$rid = $post->rid;
$uid = $post->uid;


$sql = "SELECT * FROM favorites WHERE RID = $rid AND `UID` = $uid";
$result = $conn->query($sql);

if ($result->num_rows > 0)
{
  $sql = "DELETE FROM `favorites` WHERE `RID` = $rid AND `UID` = $uid";
  $result = $conn->query($sql);
  echo '1';
}
else
{
  $sql = "INSERT INTO `favorites`(`UID`, `RID`) VALUES ('$uid','$rid')";
  $result = $conn->query($sql);
  echo '0';
}

$conn->close();
?>