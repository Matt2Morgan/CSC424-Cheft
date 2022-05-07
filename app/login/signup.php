<?php
$path = $_SERVER['DOCUMENT_ROOT']."/Cheft/global/php/connect.php";
require $path;

$UID = "";

$email = $_POST["email"];
$name = $_POST["name"];
$username = $_POST["username"];
$password = $_POST["password"];

$enc_password = password_hash($password, PASSWORD_DEFAULT);

//Enter query and format return
$sql = "INSERT INTO `users`(`name`, `email`, `username`, `password`) VALUES ('$name','$email','$username','$enc_password')";
$result = $conn->query($sql);
if ($result) {
    echo "Success";
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

$sql = "SELECT `UID` FROM `users` WHERE `username` = '$username' AND `email` = '$email'";
$result = $conn->query($sql);
if ($result) {
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          $UID = $row["UID"];
        }
      }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

//Add image to server
$target_dir = $_SERVER['DOCUMENT_ROOT']."/Cheft/assets/img/profile/";
$target_file = $target_dir . "$UID.jpg";

if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
} else {
  echo "Sorry, there was an error uploading your file.";
}

$conn->close();
?>