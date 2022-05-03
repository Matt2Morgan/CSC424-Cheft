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

$return_username = "";
$return_recipes = "";
$return_favorites = "";
$return_follows = "";

//Get data from POST
$post = (object) $_POST;

$UID = $post->UID;

//USER INFO
$sql = "SELECT `username` FROM `users` WHERE '$UID' = `UID`";
$result = $conn->query($sql);
if ($result) {
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          $return_username = $row["username"];
        }
    }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

//RECIPES
$sql = "SELECT `recipeID` FROM `recipes` WHERE '$UID' = `AID`";
$result = $conn->query($sql);
if ($result) {
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          $returnRID = $row["recipeID"];
          $return = $returnRID."|";
      
          $return_recipes = $return_recipes.$return;
        }
    }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

//FAVORITES
$sql = "SELECT `RID` FROM `favorites` WHERE '$UID' = `UID`";
$result = $conn->query($sql);
if ($result) {
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          $returnRID = $row["RID"];
          $return = $returnRID."|";
      
          $return_favorites = $return_favorites.$return;
        }
    }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

//FOLLOWS
$sql = "SELECT `UID2` FROM `follows` WHERE '$UID' = `UID1`";
$result = $conn->query($sql);
if ($result) {
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          $returnUID = $row["UID2"];
          $return = $returnUID."|";
      
          $return_follows = $return_follows.$return;
        }
    }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

echo $return_username."@".$return_recipes."@".$return_favorites."@".$return_follows;

$conn->close();
?>