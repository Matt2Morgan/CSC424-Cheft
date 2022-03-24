$( document ).ready(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const rid = urlParams.get('rid');


    $.ajax({url:"recipe.php",
            type: 'post',
            data: { "rid": rid},
     success:function(result){
        const returnArr = result.split("|");
        $("#authorName").append(returnArr[0]);
        $("#recipeTitle").append(returnArr[1]);
        $("#prepTime").append(returnArr[2]);
        $("#cookTime").append(returnArr[3]);
        var totalTime = +returnArr[2] + +returnArr[3];
        $("#totalTime").append(totalTime);
        $("#servings").append("NA");
        $("#calories").append(returnArr[4]);
        $("#imagePath").append(returnArr[5]);
        }
    })
});