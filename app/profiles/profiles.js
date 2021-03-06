// recipe GetPage


// Runs on page load
$( document ).ready(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    //Get search query from url
    const search = urlParams.get('search');
    const UID = urlParams.get('UID');

    if (search !== null) {
        if(document.getElementById("search") != null){
            document.getElementById("search").value=`${search}`
        }
    }
    
    //POST to getPage php script, format return and then add formatted html to document.
    $.ajax({url:"profiles.php",
            type: 'post',
            //Add search to POST
            data: { "search": search,
                    "UID": UID},
     success:function(result){
        const returnArr = result.split("~");
        for (i = 0; i < returnArr.length - 1; i++)
        {
            let info = returnArr[i].split("|");

            if(document.getElementById("returnTable") != null){
                document.getElementById("returnTable").innerHTML+=`
                <a class="users-return col-lg-4" href="../profiles/profile.html?UID=${info[0]}">
                    <div class="row no-gutters">
                        <div class="col-sm-4">
                            <img src="../../assets/img/profile/${info[0]}.jpg" width="100px" height="100px">
                        </div>
                        <div class="col-sm-8">
                            <div class="widget-entry">
                                <span style="font-size: 24px;">${info[2]}</span>
                                <span style="font-size: 16px;">Username: ${info[1]}</span>
                                <span style="font-size: 12px;">Email: ${info[3]}</span>
                                <span style="font-size: 12px;"><span>Followers: ${info[5]}</span> <span>Following: ${info[4]}</span></span>
                            </div>
                        </div>
                    </div>
                </a>
                <div class="col-lg-7 blank-space"></div>
            `}
        }
        }
    })
});

function search() {
    var inpSearch = document.getElementById("search").value;
    window.location.href = `../profiles/profiles.html?search=${inpSearch}`;
}