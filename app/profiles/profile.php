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

$UID1 = $post->UID1;
$UID2 = $post->UID2;

//Enter query and format return
$sql = "SELECT `username`, `name`, `email` FROM `users` WHERE `UID` = $UID2";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    $username = $row["username"];
    $name = $row["name"];
    $email = $row["email"];
  }
}

//Enter query and format return
$sql = "SELECT * FROM follows WHERE `UID1` = $UID1 AND `UID2` = $UID2";
$result = $conn->query($sql);

if ($result->num_rows > 0)
{
  $_data_favBool = true;
}
else
{
  $_data_favBool = false;
}

$return = $username . "|" . $name . "|" . $email . "|" . $_data_favBool;

echo $return;



$conn->close();
?>