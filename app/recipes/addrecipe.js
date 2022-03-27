function submit_recipe() {
    var recipe_title = document.getElementById("recipe-title").value;
    var author_name = document.getElementById("author-name").value;
    var prep_time = document.getElementById("prep-time").value;
    var cook_time = document.getElementById("cook-time").value;
    var calories = document.getElementById("calories").value;

    $.ajax({url:"addrecipe.php",
            type: 'post',
            data: { "recipe_title": recipe_title, 
                "author_name": author_name, 
                "prep_time": prep_time, 
                "cook_time": cook_time,
                "calories": calories},
     success:function(result){
        alert(result);
        }
    })
}