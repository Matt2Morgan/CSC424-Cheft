// recipe GetPage


// Runs on page load
$( document ).ready(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    //Get search query from url
    const search = urlParams.get('search');
    const AID = urlParams.get('AID');
    const FID = urlParams.get('FID');

    if (search !== null) {
        if(document.getElementById("search") != null){
            document.getElementById("search").value=`${search}`
        }
    
        if(document.getElementById("nav-search") != null){
            document.getElementById("nav-search").value=`${search}`
        }
    }
    
    //POST to getPage php script, format return and then add formatted html to document.
    $.ajax({url:"tags.php",
            type: 'post',
            //Add search to POST
            data: { "search": search,
                    "AID": AID,
                    "FID": FID},
     success:function(result){
        const returnArr = result.split("@");
        console.log(returnArr);
        for (i = 0; i < returnArr.length - 1; i++)
        {
            let temp = returnArr[i].split("|");

            if(document.getElementById("returnTable") != null){
                document.getElementById("returnTable").innerHTML+=`
                <a href="../tags/tag.html?TID=${temp[0]}">
                    <div class="row no-gutters">
                        <div class="col-sm-10">
                            <div class="widget-entry">
                                <span style="font-size: 24px;">${temp[1]}</span>
                            </div>
                        </div>
                    </div>
                </a>
            `}
        }
        }
    })
});

function search() {
    var inpSearch = document.getElementById("search").value;
    window.location.href = `../recipes/recipes.html?search=${inpSearch}`;
}