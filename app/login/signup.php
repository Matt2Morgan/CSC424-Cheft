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

$email = $post->email;
$name = $post->name;
$username = $post->username;
$password = $post->password;

$enc_password = password_hash($password, PASSWORD_DEFAULT);

//Enter query and format return
$sql = "INSERT INTO `users`(`name`, `email`, `username`, `password`) VALUES ('$name','$email','$username','$enc_password')";
$result = $conn->query($sql);
if ($result) {
    echo "Success";
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

$conn->close();
?>