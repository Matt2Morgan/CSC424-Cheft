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

$username = $post->username;
$password = $post->password;

//Enter query and format return
$sql = "SELECT `UID`, `username`, `password` FROM `users` WHERE '$username' = `username`";
$result = $conn->query($sql);
if ($result) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row["password"]))
    {
        echo "true|".$row["UID"];
    }
    else
    {
        echo "false|0";
    }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

$conn->close();
?>