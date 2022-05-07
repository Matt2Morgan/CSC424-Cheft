<?php
$path = $_SERVER['DOCUMENT_ROOT']."/Cheft/global/php/connect.php";
require $path;

//Get data from POST
$post = (object) $_POST;

$UID = $post->UID;

//Initialize Global Variables
$_data_recipeID = "";
$_data_user = "";
$_data_views = "";
$_data_date = "";
$_data_recname = "";
$_data_imagepath = "";
$_data_fav = "";

$return_array = "";
$return_Fav = "";
$return_Top = "";

//Enter query and format return
$sql = "SELECT `recipeID`, `AID`, `views`, `upload_date`, `recipename` FROM recipes WHERE 1 ORDER BY `views` DESC";
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

          //Enter query and format return
          $sql2 = "SELECT * FROM favorites WHERE RID = $_data_recipeID";
          $result2 = $conn->query($sql2);

          $_data_fav = $result2->num_rows;

          $return = $_data_recipeID . "|" . $_data_user . "|" . $_data_views . "|" . $_data_date . "|" . $_data_fav . "|" . $_data_recname . "@";
      
          $return_Top = $return_Top . $return;
        }
    } else {
      $return_Top = "0 results";
      }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

//Enter query and format return
$sql = "SELECT `recipeID`, `AID`, `views`, `upload_date`, `recipename` FROM recipes WHERE `recipeID` IN (SELECT `RID` FROM `favorites` WHERE `UID` = '$UID')";
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

          //Enter query and format return
          $sql2 = "SELECT * FROM favorites WHERE RID = $_data_recipeID";
          $result2 = $conn->query($sql2);

          $_data_fav = $result2->num_rows;

          $return = $_data_recipeID . "|" . $_data_user . "|" . $_data_views . "|" . $_data_date . "|" . $_data_fav . "|" . $_data_recname . "@";
      
          $return_Fav = $return_Fav . $return;
        }
    } else {
      $return_Fav = "0 results";
      }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

$return_array = $return_Top . "~" . $return_Fav;

echo $return_array;

$conn->close();
?>