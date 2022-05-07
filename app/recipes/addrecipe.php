<?php
$path = $_SERVER['DOCUMENT_ROOT']."/Cheft/global/php/connect.php";
require $path;

$recipe_title = $_POST['recipeTitle'];
$prep_time = $_POST["prepTime"];
$cook_time = $_POST["cookTime"];
$calories = $_POST["calories"];
$AID = $_POST["AID"];
$current_date = date("Y-m-d");
$RID = "";

//Enter query and format return
$sql = "INSERT INTO recipes(`AID`, `recipename`, `preptime`, `cooktime`, `calories`, `upload_date`) VALUES('$AID', '$recipe_title', '$prep_time', '$cook_time', '$calories', '$current_date')";
$result = $conn->query($sql);
if ($result) {
  $sql = "SELECT `recipeID` FROM recipes WHERE `AID` = '$AID' AND `recipename` = '$recipe_title'";
  $result = $conn->query($sql);
  if ($result) {
    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
        $RID = $row["recipeID"];
        echo $RID;
      }
    }
  } else { 
      echo "Error in ".$query."
      ".$db->error; 
  }
} else { 
    echo "Error in ".$query."
    ".$db->error; 
}

//Add image to server
$target_dir = $_SERVER['DOCUMENT_ROOT']."/Cheft/assets/img/recipe/";
$target_file = $target_dir . "$RID.jpg";

if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
} else {
  echo "Sorry, there was an error uploading your file.";
}

$conn->close();
?>