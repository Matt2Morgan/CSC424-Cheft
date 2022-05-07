// recipe getRec

var rid = 0;
var uid = 0;


// Runs on page load
$( document ).ready(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // Get recipe ID from url
    const temp_rid = urlParams.get('rid');
    const temp_uid = localStorage.getItem("UID");

    rid = temp_rid;
    uid = temp_uid;


    //POST to getRec php script, format return and then append strings to html objects.
    $.ajax({url:"recipe.php",
            type: 'post',
            //Add rid to POST
            data: { "rid": rid,
                    "uid": uid},
     success:function(result){
        const returnArr = result.split("|");
        console.log(returnArr);
        if(document.getElementById("authorLink") != null){
            document.getElementById("authorLink").innerHTML+=`
            <h3> Author: <a href="../profiles/profile.html?UID=${returnArr[1]}">${returnArr[0]}</a></h3>
        `;
        }

        if(document.getElementById("date") != null){
            document.getElementById("date").innerHTML+=`
            <h4> Date Uploaded: ${returnArr[2]}</h4>
        `;
        }

        if(document.getElementById("views") != null){
            document.getElementById("views").innerHTML+=`
            <h4> Views: ${returnArr[3]}</h4>
        `;
        }

        if(document.getElementById("favorites") != null){
            document.getElementById("favorites").innerHTML+=`
            <h4> Favorites: ${returnArr[4]}</h4>
        `;
        }

        if (returnArr[10] === "1")
        {
            document.getElementById("btn-row").innerHTML+=`
                <button type="button" onclick="deleteRecipe()" id="delete-btn">Delete</button>
            `;
        }
        else
        {
            document.getElementById("btn-row").innerHTML+=`
            <button type="button" onclick="favorite()" id="favorite-btn"></button>
            `;

            if(document.getElementById("favorite-btn") != null){
                if (returnArr[5] === "1")
                {
                    document.getElementById("favorite-btn").innerHTML+=`Unfavorite`;
                }
                else
                {
                    document.getElementById("favorite-btn").innerHTML+=`Favorite`;
                }
            }
        }

        if(document.getElementById("tags") != null){
            let tagRow = returnArr[11].split("~");
            for (var i = 0; i < tagRow.length - 1; i++)
            {
                let tagIndividual = tagRow[i].split("@");
                document.getElementById("tags").innerHTML+=`
                <div class="col-1"><a href="../tags/tag.html?TID=${tagIndividual[0]}" class="tag">${tagIndividual[1]}</a></div>
                `
            }
        }

        if(document.getElementById("ingredients") != null){
            let ingRow = returnArr[12].split(",");
            for (var i = 0; i < ingRow.length - 1; i+=3)
            {
                document.getElementById("ingredients").innerHTML+=`
                <div class="col-12"><span><input type="checkbox"> ${ingRow[i]}: ${ingRow[i+1]} ${ingRow[i+2]}</span></div>
                `
            }
        }

        if(document.getElementById("directions") != null){
            let dirRow = returnArr[13].split(",");
            for (var i = 0; i < dirRow.length - 1; i++)
            {
                document.getElementById("directions").innerHTML+=`
                <div class="col-12"><span><input type="checkbox"> ${i+1}: ${dirRow[i]}</span></div>
                `
            }
        }

        if(document.getElementById("image") != null){
            document.getElementById("image").innerHTML+=`
            <img src="../../assets/img/recipe/${rid}.jpg" width="100%" height="500px"></img>
            `
        }
        
        $("#recipeTitle").append(returnArr[6]);
        $("#prepTime").append(returnArr[7]);
        $("#cookTime").append(returnArr[8]);
        var totalTime = +returnArr[7] + +returnArr[8];
        $("#totalTime").append(totalTime);
        $("#servings").append("NA");
        $("#calories").append(returnArr[9]);
        }
    })
});

function favorite() {

    $.ajax({url:"favorite.php",
            type: 'post',
            //Add rid to POST
            data: { "rid": rid,
                    "uid": uid},
     success:function(result){
            if (result === "1")
            {
                document.getElementById("favorite-btn").textContent="Favorite";
                location.reload();
            }
            else
            {
                document.getElementById("favorite-btn").textContent="Unfavorite";
                location.reload();
            }
        }
    })
}

function deleteRecipe() {
    $.ajax({url:"delete.php",
            type: 'post',
            //Add rid to POSTs
            data: { "RID": rid},
     success:function(){
            window.location.href = `../recipes/recipes.html?AID=${uid}`;
        }
    })
}