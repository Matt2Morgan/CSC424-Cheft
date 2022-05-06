// recipe getRec

var TID = 0;
var UID = 0;

// Runs on page load
$( document ).ready(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // Get recipe ID from url
    const tempTID = urlParams.get('TID');
    const tempUID = localStorage.getItem("UID");
    TID = tempTID;
    UID = tempUID;


    //POST to getRec php script, format return and then append strings to html objects.
    $.ajax({url:"tag.php",
            type: 'post',
            //Add UID to POST
            data: { "tid": TID,
                    "uid": UID},
     success:function(result){
        const returnArr = result.split("|");
        console.log(returnArr);
        if(document.getElementById("name") != null){
            document.getElementById("name").innerHTML+=`
            <h1>${returnArr[0]}</h1>
        `;
        }
        if (returnArr[2] === "1")
        {
            document.getElementById("btn-row").innerHTML+=`
                <button type="button" onclick="deleteAccount()" id="delete-btn">Delete</button>
            `;
        }
        else
        {
            document.getElementById("btn-row").innerHTML+=`
                <button type="button" onclick="favorite()" id="follow-btn"></button>
            `;

            if(document.getElementById("follow-btn") != null){
                if (returnArr[1] === "1")
                {
                    document.getElementById("follow-btn").innerHTML+=`Unfavorite`;
                }
                else
                {
                    document.getElementById("follow-btn").innerHTML+=`Favorite`;
                }
            }
        }

        const recipeArr = returnArr[3].split("@");
        for (i = 0; i < recipeArr.length - 1; i++)
        {
            let temp = recipeArr[i].split("~");

            if(document.getElementById("returnTable") != null){
                document.getElementById("returnTable").innerHTML+=`
                <a href="../recipes/recipe.html?rid=${temp[0]}">
                    <div class="row no-gutters">
                        <div class="col-sm-2">
                            <img src="../..${temp[6]}" width="100px" height="100px">
                        </div>
                        <div class="col-sm-10">
                            <div class="widget-entry">
                                <span style="font-size: 24px;">${temp[5]}</span>
                                <span style="font-size: 16px;">Author: ${temp[1]}</span>
                                <span style="font-size: 12px;">Date: ${temp[3]}</span>
                                <span style="font-size: 12px;"><span>Views: ${temp[2]}</span> <span>Favorites: ${temp[4]}</span></span>
                            </div>
                        </div>
                    </div>
                </a>
            `}
        }
        
        }
    })
});

function favorite() {
    $.ajax({url:"favorite.php",
            type: 'post',
            //Add rid to POST
            data: { "tid": TID,
                    "uid": UID},
     success:function(result){
            if (result === "1")
            {
                document.getElementById("follow-btn").textContent="Favorite";
                location.reload();
            }
            else
            {
                document.getElementById("follow-btn").textContent="Unfavorite";
                location.reload();
            }
        }
    })
}