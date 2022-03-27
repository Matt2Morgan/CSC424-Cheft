//banner.jS

function navbarSearch() {
    var search = document.getElementById("nav-search").value;
    window.location.href = "../recipes/recipes.html?search=" + search;
}


////////////////
/////Navbar/////
////////////////

if(document.getElementById("Navbar") != null) {
    document.getElementById("Navbar").innerHTML+=`
    <div class="nav-row row">
        <div class="col-2">
            <div class="nav-btn">
                <a href="../index/index.html">Home</a>
            </div>
        </div>
        <div class="col-2">
            <div class="nav-dropdown">
                <button class="nav-dropbtn"> Recipes</button>
                <div class="nav-dropdown-content">
                    <a href="../recipes/recipes.html">All Recipes</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="nav-dropdown">
                <button class="nav-dropbtn"> Whats for Dinner?</button>
                <div class="nav-dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
        </div>
        <div class="col-2">
            <div class="nav-dropdown">
                <div class="nav-btn">
                    <a href="#">About Us</a>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="nav-btn">
                <input type="search" id="nav-search" placeholder="Search..."> 
                <button type="button" onclick="navbarSearch()" id="nav-search-submit">Go</button>
            </div>
        </div>
    </div>
    `
}



////////////////
/////Sidebar////
////////////////

if(document.getElementById("Sidebar") != null){
    document.getElementById("Sidebar").innerHTML+=`
    <button type="button" class="collapse-sidebar-button"></button>
    <div id="top-menu" class="top-menu row">
        <div id="profile-menu" class="col-12 profile-menu" style="padding: 0;">
            <div class="profile-icon">

            </div>
            <div class="profile-name">
                <span id="user-name">Profile</span>
            </div>
        </div>

        <div id="add-menu" class="col-12 add-menu" style="padding: 0;">
            <a class="add-button" href="../recipes/addrecipe.html">
                <span> Add Recipe + </span>
            </a>
        </div>
    </div>

    <div id="sidebar-row" class="sidebar-row row">
        
        <div id="dropdown-menu" class="col-12 dropdown-menu-custom" style="padding: 0;">
        <button type="button" class="collapsible">Your Recipes</button>
        <div class="collapse-content">
            <ul class="collapse-content-list">
                <li><a href="../recipes/recipe.html?rid=1">Recipe 1</a></li>
                <li><a href="../recipes/recipe.html?rid=2">Recipe 2</a></li>
                <li><a href="../recipes/recipe.html?rid=3">Recipe 3</a></li>
                <li><a href="../recipes/recipe.html?rid=4">Recipe 4</a></li>
                <li><a href="../recipes/recipe.html?rid=5">Recipe 5</a></li>
                <li><a href="../recipes/recipes.html">Show More</a></li>
            </ul>
        </div>

        <button type="button" class="collapsible">Favorite Recipes</button>
        <div class="collapse-content">
            <ul class="collapse-content-list">
                <li><a href="temp.html">Recipe</a></li>
                <li><a href="temp.html">Recipe</a></li>
                <li><a href="temp.html">Recipe</a></li>
                <li><a href="temp.html">Recipe</a></li>
                <li><a href="temp.html">Recipe</a></li>
                <li><a href="temp.html">Show More</a></li>
            </ul>
        </div>

        <button type="button" class="collapsible">Favorite Tags</button>
        <div class="collapse-content">
            <ul class="collapse-content-list">
                <li><a href="temp.html">Tag</a></li>
                <li><a href="temp.html">Tag</a></li>
                <li><a href="temp.html">Tag</a></li>
                <li><a href="temp.html">Tag</a></li>
                <li><a href="temp.html">Tag</a></li>
                <li><a href="temp.html">Show More</a></li>
            </ul>
        </div>

        <button type="button" class="collapsible">Recipe Folders</button>
        <div class="collapse-content">
            <ul class="collapse-content-list">
                <li><a href="temp.html">Folder</a></li>
                <li><a href="temp.html">Folder</a></li>
                <li><a href="temp.html">Folder</a></li>
                <li><a href="temp.html">Folder</a></li>
                <li><a href="temp.html">Folder</a></li>
                <li><a href="temp.html">Show More</a></li>
            </ul>
        </div>

        <button type="button" class="collapsible">Following</button>
        <div class="collapse-content">
            <ul class="collapse-content-list">
                <li><a href="temp.html">Person</a></li>
                <li><a href="temp.html">Person</a></li>
                <li><a href="temp.html">Person</a></li>
                <li><a href="temp.html">Person</a></li>
                <li><a href="temp.html">Person</a></li>
                <li><a href="temp.html">Show More</a></li>
            </ul>
        </div>
            
        </div>

    </div>

    <div id="bottom-menu" class="bottom-menu row">
        <div id="logout-menu" class="col-12 logout-menu" style="padding: 0;">
            <a class="add-button" href="addrecipe.html">
                <span> Logout </span>
            </a>
        </div>
    
        <div id="help-menu" class="col-12 help-menu" style="padding: 0;">
            <a class="add-button" href="addrecipe.html">
                <span> Help </span>
            </a>
        </div>
    </div>
    `
}