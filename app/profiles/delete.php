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

$UID = $post->UID;


$sql = "DELETE FROM `users` WHERE `UID` = '$UID'";
$result = $conn->query($sql);

$conn->close();
?>