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
$AID = $post->AID;
$current_date = date("Y-m-d");

//Enter query and format return
$sql = "INSERT INTO recipes(`AID`, `username`, `recipename`, `preptime`, `cooktime`, `calories`, `upload_date`) VALUES('$AID', '$author_name', '$recipe_title', '$prep_time', '$cook_time', '$calories', '$current_date')";
$result = $conn->query($sql);
if ($result) {
  $sql = "SELECT `recipeID` FROM recipes WHERE `AID` = '$AID' AND `recipename` = '$recipe_title'";
  $result = $conn->query($sql);
  if ($result) {
    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
          echo $row["recipeID"];
      }
    }
  } else { 
      echo "Error in ".$query."
      ".$db->error; 
  }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

$conn->close();
?>