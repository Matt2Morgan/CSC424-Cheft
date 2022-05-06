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
$sql = "SELECT recipeID, username, views, upload_date, recipename, imagepath FROM recipes WHERE `recipeID` IN (SELECT `RID` FROM `favorites` WHERE `UID` = $FID) OR `AID` = '$AID' OR username LIKE '%$search%' OR recipename LIKE '%$search%'";
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