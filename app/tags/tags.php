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
$_data_TID = "";
$_data_tagname = "";

$return_array = "";

//Enter query and format return
$sql = "SELECT `TID`, `tag_name` FROM tags WHERE `TID` IN (SELECT `TID` FROM `tags_fav` WHERE `UID` = '$FID') OR `UID` = '$AID' OR `tag_name` LIKE '%$search%'";
$result = $conn->query($sql);
if ($result) {
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          $_data_TID = $row["TID"];
          $_data_tagname = $row["tag_name"];

          $return = $_data_TID . "|" . $_data_tagname . "@";
      
          $return_array = $return_array . $return;
        }
    } else {
      $return_array = "0 results";
      }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
  }

echo $return_array;

$conn->close();
?>