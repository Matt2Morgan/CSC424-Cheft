// Recipe addRec


//Runs on button click
function submit_recipe() {
    //Get data from page
    var recipe_title = document.getElementById("recipe-title").value;
    var author_name = document.getElementById("author-name").value;
    var prep_time = document.getElementById("prep-time").value;
    var cook_time = document.getElementById("cook-time").value;
    var calories = document.getElementById("calories").value;
    var AID = localStorage.getItem("UID");

    //POST to addRec php script, no return currently other than success or failure.
    $.ajax({url:"addrecipe.php",
            type: 'post',
            //Add page date to POST
            data: { "recipe_title": recipe_title, 
                "author_name": author_name, 
                "prep_time": prep_time, 
                "cook_time": cook_time,
                "calories": calories,
                "AID": AID},
     success:function(result){
        window.location.href = `../recipes/recipe.html?rid=${result}`;
        }
    })
}