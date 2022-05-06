<?php
$path = $_SERVER['DOCUMENT_ROOT']."/Cheft/global/php/connect.php";
require $path;


//Get data from POST
$post = (object) $_POST;

$uid1 = $post->uid1;
$uid2 = $post->uid2;

$return_array = "";

//Enter query and format return
$sql = "SELECT `username`, `name`, `email` FROM `users` WHERE `UID` = '$uid2'";
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
$sql = "SELECT * FROM follows WHERE `UID1` = '$uid1' AND `UID2` = '$uid2'";
$result = $conn->query($sql);

if ($result->num_rows > 0)
{
  $_data_favBool = true;
}
else
{
  $_data_favBool = false;
}

//Enter query and format return
$sql = "SELECT * FROM `follows` WHERE `UID1` = '$uid1'";
$result = $conn->query($sql);

$_data_followingCnt = $result->num_rows;

//Enter query and format return
$sql = "SELECT * FROM `follows` WHERE `UID2` = '$uid2'";
$result = $conn->query($sql);

$_data_followerCnt = $result->num_rows;

if ($uid1 == $uid2)
{
  $_data_isUser = true;
}
else
{
  $_data_isUser = false;
}

//Enter query and format return
$sql = "SELECT recipeID, username, views, upload_date, recipename, imagepath FROM recipes WHERE `AID` = '$uid2'";
$result = $conn->query($sql);
if ($result) {
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          $_data_recipeID = $row["recipeID"];
          $_data_user = $row["username"];
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
      echo "0 results";
      }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

$return = $username . "|" . $name . "|" . $email. "|" . $_data_followerCnt . "|" . $_data_followingCnt . "|" . $_data_favBool . "|" . $_data_isUser . "|" . $return_array;

echo $return;



$conn->close();
?>