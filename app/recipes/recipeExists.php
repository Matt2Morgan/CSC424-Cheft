<?php
$path = $_SERVER['DOCUMENT_ROOT']."/Cheft/global/php/connect.php";
require $path;


//Get data from POST
$post = (object) $_POST;

$recipename = $post->recipename;

$return = "";
$error = "";

//Enter query and format return
$sql = "SELECT * FROM `recipes` WHERE `recipename` = '$recipename'";
$result = $conn->query($sql);
if ($result) {
    if ($result->num_rows > 0)
    {
        $return = "true";
    }
    else
    {
        $return = "false";
    }
} else { 
    $error = $error."Error in ".$query."
    ".$db->error; 
}

if (strlen($error) > 0){
    echo $error;
}
else
{
    echo $return;
}

$conn->close();
?>