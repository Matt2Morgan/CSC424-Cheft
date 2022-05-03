// recipe getRec


// Runs on page load
$( document ).ready(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // Get recipe ID from url
    const UID = urlParams.get('UID');

    //POST to getRec php script, format return and then append strings to html objects.
    $.ajax({url:"profile.php",
            type: 'post',
            //Add UID to POST
            data: { "UID": UID},
     success:function(result){
        const returnArr = result.split("|");
        $("#username").append(returnArr[0]);
        $("#name").append(returnArr[1]);
        $("#email").append(returnArr[2]);
        }
    })
});