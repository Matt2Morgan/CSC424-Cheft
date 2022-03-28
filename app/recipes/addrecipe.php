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

$recipe_title = $post->recipe_title;
$author_name = $post->author_name;
$prep_time = $post->prep_time;
$cook_time = $post->cook_time;
$calories = $post->calories;

//Enter query and format return
$sql = "INSERT INTO recipes(`username`, `recipename`, `preptime`, `cooktime`, `calories`) VALUES('$author_name', '$recipe_title', '$prep_time', '$cook_time', '$calories')";
$result = $conn->query($sql);
if ($result) {
    echo "Success";
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

$conn->close();
?>