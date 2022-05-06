<?php
$path = $_SERVER['DOCUMENT_ROOT']."/Cheft/global/php/connect.php";
require $path;


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
$sql = "SELECT AID, upload_date, views, recipename, preptime, cooktime, calories, imagepath FROM recipes WHERE recipeID = $rid";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    $_data_AID = $row["AID"];

    $sql1 = "SELECT `username` FROM `users` WHERE `UID` = '$_data_AID'";
    $result1 = $conn->query($sql1);
    while($row1 = $result1->fetch_assoc()) {
      $_data_user = $row1["username"];
    }

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

if ($uid == $_data_AID)
{
  $_data_isUser = true;
}
else
{
  $_data_isUser = false;
}


//Return Values
$return = $_data_user . "|" . $_data_AID . "|" . $_data_date . "|" . $_data_views . "|" . $_data_favCnt .  "|" . $_data_favBool . "|" . $_data_recname . "|" . $_data_preptime . "|" . $_data_cooktime . "|" . $_data_calories . "|" . $_data_imagepath . "|" . $_data_isUser;

echo $return;



$conn->close();
?>