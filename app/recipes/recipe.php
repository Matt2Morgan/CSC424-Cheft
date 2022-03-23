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

$rid = $post->rid;

$_data_user = "";
$_data_recname = "";
$_data_preptime = "";
$_data_cooktime = "";
$_data_calories = "";
$_data_imagepath = "";


$sql = "SELECT username, recipename, preptime, cooktime, calories, imagepath FROM recipes WHERE recipeID = $rid";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    $_data_user = $row["username"];
    $_data_recname = $row["recipename"];
    $_data_preptime = $row["preptime"];
    $_data_cooktime = $row["cooktime"];
    $_data_calories = $row["calories"];
    $_data_imagepath = $row["imagepath"];
  }
} else {
  echo "0 results";
}

$return = $_data_user . "|" . $_data_recname . "|" . $_data_preptime . "|" . $_data_cooktime . "|" . $_data_calories . "|" . $_data_imagepath;

echo $return;



$conn->close();
?>