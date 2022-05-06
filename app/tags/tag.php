<?php
$path = $_SERVER['DOCUMENT_ROOT']."/Cheft/global/php/connect.php";
require $path;


//Get data from POST
$post = (object) $_POST;

$tid = $post->tid;
$uid = $post->uid;

$return_array = "";

//Enter query and format return
$sql = "SELECT `tag_name` FROM `tags` WHERE `TID` = '$tid'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    $tag_name = $row["tag_name"];
  }
}

//Enter query and format return
$sql = "SELECT * FROM `tags_fav` WHERE `TID` = '$tid' AND `UID` = '$uid'";
$result = $conn->query($sql);

if ($result->num_rows > 0)
{
  $_data_favBool = true;
}
else
{
  $_data_favBool = false;
}


//Grab UID from tags db
$sql = "SELECT * FROM tags WHERE `UID` = '$uid' AND `TID` = '$tid'";
$result = $conn->query($sql);
if ($result->num_rows > 0)
{
  $_data_isUser = true;
}
else
{
  $_data_isUser = false;
}

//Enter query and format return
$sql = "SELECT `recipeID`, `AID`, `views`, `upload_date`, `recipename`, `imagepath` FROM `recipes` WHERE `recipeID` IN (SELECT `RID` FROM `tags_link` WHERE `TID` = '$tid')";
$result = $conn->query($sql);
if ($result) {
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          $_data_recipeID = $row["recipeID"];

          $_data_AID = $row["AID"];
          $sql1 = "SELECT `username` FROM `users` WHERE `UID` = '$_data_AID'";
          $result1 = $conn->query($sql1);
          while($row1 = $result1->fetch_assoc()) {
            $_data_user = $row1["username"];
          }

          $_data_views = $row["views"];
          $_data_date = $row["upload_date"];
          $_data_recname = $row["recipename"];
          $_data_imagepath = $row["imagepath"];

          //Enter query and format return
          $sql1 = "SELECT * FROM favorites WHERE RID = $_data_recipeID";
          $result1 = $conn->query($sql1);

          $_data_fav = $result1->num_rows;

          $return_recipe = $_data_recipeID . "~" . $_data_user . "~" . $_data_views . "~" . $_data_date . "~" . $_data_fav . "~" . $_data_recname . "~" . $_data_imagepath . "@";
      
          $return_array = $return_array . $return_recipe;
        }
    } else {
      $return_array =  "0 results";
      }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

$return = $tag_name . "|" . $_data_favBool . "|" . $_data_isUser . "|" . $return_array;

echo $return;



$conn->close();
?>