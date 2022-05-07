// Runs on first time page load
if (localStorage.getItem("userLogged") === false || localStorage.getItem("userLogged") === null || localStorage.getItem("logTime") < (Date.now() - 1800000)) {
    localStorage.setItem("userLogged", false);
    localStorage.setItem("logTime", Date.now());
    localStorage.setItem("UID", "");
}

const phpLogFunc = () => {
    if(localStorage.getItem("userLogged") === "true")
    {
        //Removes info from local storage
        localStorage.removeItem("userLogged");
        localStorage.removeItem("logTime");
        localStorage.removeItem("UID");

        window.location.href = "../login/login.html";
    }
    else 
    {
        window.location.href = "../login/signup.html";
    }
}


$( document ).ready(function() {
    if(localStorage.getItem("userLogged") === "true")
    {
        if(document.getElementById("logButton") != null) {
            document.getElementById("logButton").innerHTML+='Logout';
        }
        //POST to user PHP
        $.ajax({url:"../../global/php/user.php",
                type: 'post',
                data: { "UID": localStorage.getItem("UID")},
        success:function(result){
            if (document.getElementById("profile-icon")!=null) {
                document.getElementById("profile-icon").innerHTML+=`
                    <img src="../../assets/img/profile/${localStorage.getItem("UID")}.jpg" width="100%" height="100%">
                `;
            }

            if (document.getElementById("top-menu")!=null) {
                document.getElementById("top-menu").innerHTML+=`
                <div id="add-menu" class="col-12 add-menu" style="padding: 0;">
                    <a class="add-button" href="../recipes/addrecipe.html">
                        <span> Add Recipe + </span>
                    </a>
                </div>
                `;
            }

            const info = result.split("@");
            if (document.getElementById("user-name")!=null) {
                document.getElementById("user-name").innerHTML+=`
                    <a href="../profiles/profile.html?UID=${localStorage.getItem("UID")}">${info[0]}</a>
                `;
            }

            const returnRecipes = info[1].split("~");
            if(document.getElementById("recipe-list") != null) {
                if (returnRecipes.length - 1 <= 5){
                    for (let i = 0; i < returnRecipes.length - 1; i++)
                    {
                        const temp = returnRecipes[i].split("|");
                        document.getElementById("recipe-list").innerHTML+=`
                            <li><a href="../recipes/recipe.html?rid=${temp[1]}">${temp[0]}</a></li>
                        `;
                    }
                }
                else{
                    for (let i = 0; i < 5; i++)
                    {
                        const temp = returnRecipes[i].split("|");
                        document.getElementById("recipe-list").innerHTML+=`
                        <li><a href="../recipes/recipe.html?rid=${temp[1]}">${temp[0]}</a></li>
                        `;
                    }
                }
                document.getElementById("recipe-list").innerHTML+=`
                <li><a href="../recipes/recipes.html?AID=${localStorage.getItem("UID")}">Show More</a></li>
                `;
            };

            const returnFavorites = info[2].split("~");
            if(document.getElementById("favorite-list") != null) {
                if (returnFavorites.length - 1 <= 5){
                    for (let i = 0; i < returnFavorites.length - 1; i++)
                    {
                        const temp = returnFavorites[i].split("|");
                        document.getElementById("favorite-list").innerHTML+=`
                            <li><a href="../recipes/recipe.html?rid=${temp[1]}">${temp[0]}</a></li>
                        `;
                    }
                }
                else{
                    for (let i = 0; i < 5; i++)
                    {
                        const temp = returnFavorites[i].split("|");
                        document.getElementById("favorite-list").innerHTML+=`
                            <li><a href="../recipes/recipe.html?rid=${temp[1]}">${temp[0]}</a></li>
                        `;
                    }
                }
                document.getElementById("favorite-list").innerHTML+=`
                <li><a href="../recipes/recipes.html?FID=${localStorage.getItem("UID")}">Show More</a></li>
                `;
            };

            const returnTags = info[3].split("~");
            if(document.getElementById("tag-list") != null) {
                if (returnTags.length - 1 <= 5){
                    for (let i = 0; i < returnTags.length - 1; i++)
                    {
                        const temp = returnTags[i].split("|");
                        document.getElementById("tag-list").innerHTML+=`
                            <li><a href="../tags/tag.html?TID=${temp[1]}">${temp[0]}</a></li>
                        `;
                    }
                }
                else{
                    for (let i = 0; i < 5; i++)
                    {
                        const temp = returnTags[i].split("|");
                        document.getElementById("tag-list").innerHTML+=`
                            <li><a href="../tags/tag.html?TID=${temp[1]}">${temp[0]}</a></li>
                        `;
                    }
                }
                document.getElementById("tag-list").innerHTML+=`
                <li><a href="../tags/tags.html?FID=${localStorage.getItem("UID")}">Show More</a></li>
                `;
            };

            const returnFollows = info[4].split("~");
            if(document.getElementById("follow-list") != null) {
                if (returnFollows.length - 1 <= 5){
                    for (let i = 0; i < returnFollows.length - 1; i++)
                    {
                        const temp = returnFollows[i].split("|");
                        document.getElementById("follow-list").innerHTML+=`
                            <li><a href="../profiles/profile.html?UID=${temp[1]}">${temp[0]}</a></li>
                        `;
                    }
                }
                else{
                    for (let i = 0; i < 5; i++)
                    {
                        const temp = returnFollows[i].split("|");
                        document.getElementById("follow-list").innerHTML+=`
                        <li><a href="../profiles/profile.html?UID=${temp[1]}">${temp[0]}</a></li>
                        `;
                    }
                }
                document.getElementById("follow-list").innerHTML+=`
                <li><a href="../profiles/profiles.html?UID=${localStorage.getItem("UID")}">Show More</a></li>
                `;
            };
            }
        })
    }
    else
    {
        if(document.getElementById("logButton") != null) {
            document.getElementById("logButton").innerHTML+=`Login/Signup`;
        }
        //Sets to default
    }
});