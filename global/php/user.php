<?php
$path = $_SERVER['DOCUMENT_ROOT']."/Cheft/global/php/connect.php";
require $path;

$return_username = "";
$return_recipes = "";
$return_favorites = "";
$return_tags = "";
$return_follows = "";

//Get data from POST
$post = (object) $_POST;

$UID = $post->UID;

//USER INFO
$sql = "SELECT `username` FROM `users` WHERE `UID` = '$UID'";
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
$sql = "SELECT `recipename`, `recipeID` FROM `recipes` WHERE `AID` = '$UID'";
$result = $conn->query($sql);
if ($result) {
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          $returnRecipeName = $row["recipename"];
          $returnRID = $row["recipeID"];
          $return = $returnRecipeName."|".$returnRID;
      
          $return_recipes = $return_recipes.$return.'~';
        }
    }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

//FAVORITES
$sql = "SELECT `recipename`, `recipeID` FROM `recipes` WHERE `recipeID` IN (SELECT `RID` FROM `favorites` WHERE `UID` = '$UID')";
$result = $conn->query($sql);
if ($result) {
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          $returnRecipeName = $row["recipename"];
          $returnRID = $row["recipeID"];
          $return = $returnRecipeName."|".$returnRID;
      
          $return_favorites = $return_favorites.$return.'~';
        }
    }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

//Favorite Tags
$sql = "SELECT `tag_name`, `TID` FROM `tags` WHERE `TID` IN (SELECT `TID` FROM `tags_fav` WHERE `UID` = '$UID')";
$result = $conn->query($sql);
if ($result) {
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          $returnTagName = $row["tag_name"];
          $returnTID = $row["TID"];
          $return = $returnTagName."|".$returnTID;
      
          $return_tags = $return_tags.$return.'~';
        }
    }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

//FOLLOWS
$sql = "SELECT `username`, `UID` FROM `users` WHERE `UID` IN (SELECT `UID2` FROM `follows` WHERE `UID1` = '$UID')";
$result = $conn->query($sql);
if ($result) {
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          $returnUsername = $row["username"];
          $returnUID = $row["UID"];
          $return = $returnUsername."|".$returnUID;
      
          $return_follows = $return_follows.$return.'~';
        }
    }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

echo $return_username."@".$return_recipes."@".$return_favorites."@".$return_tags."@".$return_follows;

$conn->close();
?>