<?php
$path = $_SERVER['DOCUMENT_ROOT']."/Cheft/global/php/connect.php";
require $path;


//Get data from POST
$post = (object) $_POST;

$username = $post->username;
$email = $post->email;

$return = "";
$error = "";

//Enter query and format return
$sql = "SELECT `UID` FROM `users` WHERE '$username' = `username`";
$result = $conn->query($sql);
if ($result) {
    if ($result->num_rows > 0)
    {
        $return = $return."true";
    }
    else
    {
        $return = $return."false";
    }
} else { 
    $error = $error."Error in ".$query."
    ".$db->error; 
}

//Enter query and format return
$sql = "SELECT `UID` FROM `users` WHERE '$email' = `email`";
$result = $conn->query($sql);
if ($result) {
    if ($result->num_rows > 0)
    {
        $return = $return."|true";
    }
    else
    {
        $return = $return."|false";
    }
} else { 
    $error = $error."|Error in ".$query."
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