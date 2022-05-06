// recipe getRec

var followedUID = 0;
var followerUID = 0;

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
            data: { "UID1": followerUID,
                    "UID2": followedUID},
     success:function(result){
        const returnArr = result.split("|");
        console.log(returnArr);
        $("#username").append(returnArr[0]);
        $("#name").append(returnArr[1]);
        $("#email").append(returnArr[2]);
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