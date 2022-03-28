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

$post = (object) $_POST;

$search = $post->search;

$_data_recipeID = "";
$_data_user = "";
$_data_recname = "";
$_data_imagepath = "";

$return_array = "";


$sql = "SELECT recipeID, username, recipename, imagepath FROM recipes WHERE username LIKE '%$search%' OR recipename LIKE '%$search%'";
$result = $conn->query($sql);
if ($result) {
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          $_data_recipeID = $row["recipeID"];
          $_data_user = $row["username"];
          $_data_recname = $row["recipename"];
          $_data_imagepath = $row["imagepath"];
          $return = $_data_recipeID . "|" . $_data_user . "|" . $_data_recname . "|" . $_data_imagepath . "@";
      
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