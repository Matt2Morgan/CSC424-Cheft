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
            const info = result.split("@");
            if (document.getElementById("user-name")!=null) {
                document.getElementById("user-name").innerHTML+=`
                    <a href="../profiles/profile.html?UID=${localStorage.getItem("UID")}">${info[0]}</a>
                `;
            }

            const returnRecipes = info[1].split("|");
            if(document.getElementById("recipe-list") != null) {
                if (returnRecipes.length - 1 <= 5){
                    for (let i = 0; i < returnRecipes.length - 1; i++)
                    {
                        document.getElementById("recipe-list").innerHTML+=`
                            <li><a href="../recipes/recipe.html?rid=${returnRecipes[i]}">${returnRecipes[i]}</a></li>
                        `;
                    }
                }
                else{
                    for (let i = 0; i < 5; i++)
                    {
                        document.getElementById("recipe-list").innerHTML+=`
                            <li><a href="../recipes/recipe.html?rid=${returnRecipes[i]}">${returnRecipes[i]}</a></li>
                        `;
                    }
                }
                document.getElementById("recipe-list").innerHTML+=`
                <li><a href="../recipes/recipes.html?AID=${localStorage.getItem("UID")}">Show More</a></li>
                `;
            };

            const returnFavorites = info[2].split("|");
            if(document.getElementById("favorite-list") != null) {
                if (returnFavorites.length - 1 <= 5){
                    for (let i = 0; i < returnFavorites.length - 1; i++)
                {
                    document.getElementById("favorite-list").innerHTML+=`
                        <li><a href="../recipes/recipe.html?rid=${returnFavorites[i]}">${returnFavorites[i]}</a></li>
                    `;
                }
                }
                else{
                    for (let i = 0; i < 5; i++)
                {
                    document.getElementById("favorite-list").innerHTML+=`
                        <li><a href="../recipes/recipe.html?rid=${returnFavorites[i]}">${returnFavorites[i]}</a></li>
                    `;
                }
                }
                document.getElementById("favorite-list").innerHTML+=`
                <li><a href="../recipes/recipes.html?FID=${localStorage.getItem("UID")}">Show More</a></li>
                `;
            };

            const returnFollows = info[3].split("|");
            if(document.getElementById("follow-list") != null) {
                if (returnFollows.length - 1 <= 5){
                    for (let i = 0; i < returnFollows.length - 1; i++)
                {
                    document.getElementById("follow-list").innerHTML+=`
                        <li><a href="../profiles/profile.html?UID=${returnFollows[i]}">${returnFollows[i]}</a></li>
                    `;
                }
                }
                else{
                    for (let i = 0; i < 5; i++)
                {
                    document.getElementById("follow-list").innerHTML+=`
                        <li><a href="../profiles/profile.html?UID=${returnFollows[i]}">${returnFollows[i]}</a></li>
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