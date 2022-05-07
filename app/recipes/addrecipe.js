// Recipe addRec


//Runs on button click
function submit_recipe() {
    //Get data from page
    var recipe_title = document.getElementById("recipeTitle").value;
    var prep_time = document.getElementById("prepTime").value;
    var cook_time = document.getElementById("cookTime").value;
    var calories = document.getElementById("calories").value;
    var calories = document.getElementById("calories").value;
    var AID = localStorage.getItem("UID");

    var form = document.querySelector('.add-recipe-form');
    var formData = new FormData(form);
    formData.append('AID', AID);
    
    var rtaken = false;
    
    //POST PHP user exists to check if user or email is taken
    $.ajax({url:"recipeExists.php",
            async: false,
            type: 'post',
            data: { "recipename": recipe_title},
     success:function(result){
        if (result === "true")
        {
            rtaken = true;
        }

        if (result !== "true"  && result !== 'false')
        {
            console.log(result);
        }
    }
    })
    

    if (rtaken === true)
    {
        alert ("Recipe Name Taken!");
        return;
    }

    if (!recipe_title.match(/^(?=[a-zA-Z0-9._ ]{4,14}$)(?!.*[ _.]{2})[^ _.].*[^ _.]$/))
    {
        alert ("Invalid Recipe Name!");
        return;
    }

    if (recipe_title === "" || image === "" || prep_time === "" || cook_time === "" || calories === ""){
        alert ("Empty Fields!");
        return;
    }

    //POST to addRec php script, no return currently other than success or failure.
    $.ajax({url:"addrecipe.php",
            type: 'post',
            contentType: false,
            processData: false,
            data: formData,
     success:function(result){
        window.location.href = `../recipes/recipe.html?rid=${result}`;
        }
    })
}