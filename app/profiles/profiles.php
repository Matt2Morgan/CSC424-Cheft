<?php
$path = $_SERVER['DOCUMENT_ROOT']."/Cheft/global/php/connect.php";
require $path;


//Get data from POST
$post = (object) $_POST;

$search = $post->search;
$UID = $post->UID;

if (!empty($search))
{
    $UID = 0;
}
else if (is_numeric($UID))
{
  $search = "XZXZXZXZXZXZXZX";
}
else
{
    $search = "";
    $UID = 0;
}

$_return_array = "";

//Enter query and format return
$sql = "SELECT `UID`, `username`, `name`, `email` FROM `users` WHERE `UID` IN (SELECT `UID2` FROM `follows` WHERE `UID1` = $UID) or `username` LIKE '%$search%' or `name` LIKE '%$search%' or `email` LIKE '%$search%'";
$result = $conn->query($sql);
if ($result) {
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $returnUID = $row["UID"];
            $username = $row["username"];
            $name = $row["name"];
            $email = $row["email"];
            //Enter query and format return
            $sql1 = "SELECT * FROM `follows` WHERE `UID1` = '$returnUID'";
            $result1 = $conn->query($sql1);

            $_data_followingCnt = $result1->num_rows;

            //Enter query and format return
            $sql2 = "SELECT * FROM `follows` WHERE `UID2` = '$returnUID'";
            $result2 = $conn->query($sql2);

            $_data_followerCnt = $result2->num_rows;

            $return = $returnUID . "|". $username . "|" . $name . "|" . $email . "|". $_data_followingCnt . "|". $_data_followerCnt;
      
            $_return_array = $_return_array . $return . "~";
        }
    } else {
      echo "0 results";
    }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
  }

echo $_return_array;

$conn->close();
?>