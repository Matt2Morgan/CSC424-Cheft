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

$rid = $post->rid;
$uid = $post->uid;

$sql = "UPDATE recipes SET views = views + 1 WHERE recipeID = $rid";
$result = $conn->query($sql);

//Initialize Global Variables
$_data_user = "";
$_data_AID = "";
$_data_date = "";
$_data_views = "";
$_data_favBool;
$_data_favCnt = "";
$_data_recname = "";
$_data_preptime = "";
$_data_cooktime = "";
$_data_calories = "";
$_data_imagepath = "";

//Enter query and format return
$sql = "SELECT username, AID, upload_date, views, recipename, preptime, cooktime, calories, imagepath FROM recipes WHERE recipeID = $rid";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    $_data_user = $row["username"];
    $_data_AID = $row["AID"];
    $_data_date = $row["upload_date"];
    $_data_views = $row["views"];
    $_data_recname = $row["recipename"];
    $_data_preptime = $row["preptime"];
    $_data_cooktime = $row["cooktime"];
    $_data_calories = $row["calories"];
    $_data_imagepath = $row["imagepath"];
  }
} else {
  echo "0 results";
}

//Enter query and format return
$sql = "SELECT * FROM favorites WHERE RID = $rid";
$result = $conn->query($sql);

$_data_favCnt = $result->num_rows;

//Enter query and format return
$sql = "SELECT * FROM favorites WHERE RID = $rid AND `UID` = $uid";
$result = $conn->query($sql);

if ($result->num_rows > 0)
{
  $_data_favBool = true;
}
else
{
  $_data_favBool = false;
}


//Return Values
$return = $_data_user . "|" . $_data_AID . "|" . $_data_date . "|" . $_data_views . "|" . $_data_favCnt .  "|" . $_data_favBool . "|" . $_data_recname . "|" . $_data_preptime . "|" . $_data_cooktime . "|" . $_data_calories . "|" . $_data_imagepath;

echo $return;



$conn->close();
?>