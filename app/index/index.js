// recipe GetPage


// Runs on page load
$( document ).ready(function() {
    const UID = localStorage.getItem("UID");

    //POST to getPage php script, format return and then add formatted html to document.
    $.ajax({url:"index.php",
            type: 'post',
            //Add search to POST
            data: { "UID": UID},
     success:function(result){
        const returnArr = result.split("~");
        const returnPop = returnArr[0].split("@");
        const returnFav = returnArr[1].split("@");

        for (i = 0; i < returnPop.length - 1 && i < 5; i++)
        {
            let temp = returnPop[i].split("|");

            if(document.getElementById("returnPopular") != null){
                document.getElementById("returnPopular").innerHTML+=`
                <a href="../recipes/recipe.html?rid=${temp[0]}">
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
        for (i = 0; i < returnFav.length - 1 && i < 5; i++)
        {
            let temp = returnFav[i].split("|");

            if(document.getElementById("returnFavorite") != null){
                document.getElementById("returnFavorite").innerHTML+=`
                <a href="../recipes/recipe.html?rid=${temp[0]}">
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