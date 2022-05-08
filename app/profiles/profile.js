// recipe getRec

var followedUID;
var followerUID;

// Runs on page load
$( document ).ready(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // Get recipe ID from url
    const tempFollowedUID = urlParams.get('UID');
    const tempFollowerUID = localStorage.getItem("UID");
    followedUID = tempFollowedUID;
    followerUID = tempFollowerUID;


    //POST to getRec php script, format return and then append strings to html objects.
    $.ajax({url:"profile.php",
            type: 'post',
            //Add UID to POST
            data: { "uid1": followerUID,
                    "uid2": followedUID},
     success:function(result){
        const returnArr = result.split("|");
        if(document.getElementById("name") != null){
            document.getElementById("name").innerHTML+=`
            <h1>${returnArr[1]}</h1>
        `;
        }
        if(document.getElementById("username") != null){
            document.getElementById("username").innerHTML+=`
            <h2>Username: ${returnArr[0]}</h2>
        `;
        }
        if(document.getElementById("email") != null){
            document.getElementById("email").innerHTML+=`
            <h2>Email: ${returnArr[2]}</h2>
        `;
        }
        if(document.getElementById("followers") != null){
            document.getElementById("followers").innerHTML+=`
            <h4> Followers: ${returnArr[3]}</h4>
        `;
        }

        if(document.getElementById("following") != null){
            document.getElementById("following").innerHTML+=`
            <h4> Following: ${returnArr[4]}</h4>
        `;
        }
        if (returnArr[6] === "1")
        {
            document.getElementById("btn-row").innerHTML+=`
                <button type="button" onclick="deleteAccount()" id="delete-btn">Delete</button>
                <button type="button" onclick="editAccount()" id="edit-btn">Edit</button>
            `;
        }
        else
        {
            document.getElementById("btn-row").innerHTML+=`
                <button type="button" onclick="follow()" id="follow-btn"></button>
            `;

            if(document.getElementById("follow-btn") != null){
                if (returnArr[5] === "1")
                {
                    document.getElementById("follow-btn").innerHTML+=`Unfollow`;
                }
                else
                {
                    document.getElementById("follow-btn").innerHTML+=`Follow`;
                }
            }
        }

        const recipeArr = returnArr[7].split("@");
        for (i = 0; i < recipeArr.length - 1; i++)
        {
            let temp = recipeArr[i].split("~");

            if(document.getElementById("returnTable") != null){
                document.getElementById("returnTable").innerHTML+=`
                <a class="recipes-return col-12" href="../recipes/recipe.html?rid=${temp[0]}">
                    <div class="row no-gutters">
                        <div class="col-sm-4">
                            <img src="../../assets/img/recipe/${temp[0]}.jpg" width="100px" height="100px">
                        </div>
                        <div class="col-sm-8">
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

function follow() {

    $.ajax({url:"follow.php",
            type: 'post',
            //Add rid to POST
            data: { "UID1": followerUID,
                    "UID2": followedUID},
     success:function(result){
            if (result === "1")
            {
                document.getElementById("follow-btn").textContent="Follow";
                location.reload();
            }
            else
            {
                document.getElementById("follow-btn").textContent="Unfollow";
                location.reload();
            }
        }
    })
}

function deleteAccount() {
    $.ajax({url:"delete.php",
            type: 'post',
            //Add rid to POSTs
            data: { "UID": followerUID},
     success:function(){
            //Removes info from local storage
            localStorage.removeItem("userLogged");
            localStorage.removeItem("logTime");
            localStorage.removeItem("UID");

            window.location.href = "../login/login.html";
        }
    })
}