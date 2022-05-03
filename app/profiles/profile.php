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

//Enter query and format return
$sql = "SELECT `username`, `name`, `email` FROM `users` WHERE `UID` = $UID";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    $username = $row["username"];
    $name = $row["name"];
    $email = $row["email"];
  }
}

$return = $username . "|" . $name . "|" . $email;

echo $return;



$conn->close();
?>