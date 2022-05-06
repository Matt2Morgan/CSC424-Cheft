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
        $("#username").append(returnArr[0]);
        $("#name").append(returnArr[1]);
        $("#email").append(returnArr[2]);
        if (returnArr[4] === "1")
        {
            document.getElementById("btn-row").innerHTML+=`
                <button type="button" onclick="deleteAccount()" id="delete-btn">Delete</button>
            `;
        }
        else
        {
            document.getElementById("btn-row").innerHTML+=`
                <button type="button" onclick="follow()" id="follow-btn"></button>
            `;

            if(document.getElementById("follow-btn") != null){
                if (returnArr[3] === "1")
                {
                    document.getElementById("follow-btn").innerHTML+=`Unfollow`;
                }
                else
                {
                    document.getElementById("follow-btn").innerHTML+=`Follow`;
                }
            }
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