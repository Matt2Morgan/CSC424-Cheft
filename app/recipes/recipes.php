<?php
$path = $_SERVER['DOCUMENT_ROOT']."/Cheft/global/php/connect.php";
require $path;

//Get data from POST
$post = (object) $_POST;

$search = $post->search;
$AID = $post->AID;
$FID = $post->FID;

if (!empty($search))
{
  $AID = 0;
  $FID = 0;
}
else if (is_numeric($AID))
{
  $search = "XZXZXZXZXZXZXZX";
  $FID = 0;
}
else if (is_numeric($FID))
{
  $search = "XZXZXZXZXZXZXZX";
  $AID = 0;
}
else
{
  $search = "";
  $AID = 0;
  $FID = 0;
}

//Initialize Global Variables
$_data_recipeID = "";
$_data_user = "";
$_data_views = "";
$_data_date = "";
$_data_recname = "";
$_data_imagepath = "";
$_data_fav = "";

$return_array = "";

//Enter query and format return
$sql = "SELECT `recipeID`, `AID`, `views`, `upload_date`, `recipename`, `imagepath` FROM recipes WHERE `recipeID` IN (SELECT `RID` FROM `favorites` WHERE `UID` = $FID) OR `AID` = '$AID' OR recipename LIKE '%$search%'";
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
          $sql2 = "SELECT * FROM favorites WHERE RID = $_data_recipeID";
          $result2 = $conn->query($sql2);

          $_data_fav = $result2->num_rows;

          $return = $_data_recipeID . "|" . $_data_user . "|" . $_data_views . "|" . $_data_date . "|" . $_data_fav . "|" . $_data_recname . "|" . $_data_imagepath . "@";
      
          $return_array = $return_array . $return;
        }
    } else {
      echo "0 results";
      }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
  }

echo $return_array;

$conn->close();
?>