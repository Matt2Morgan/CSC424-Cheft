//banner.js

////////////////
//Sidebar//
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
            <a class="add-button" href="addrecipe.html">
                <span> Add Recipe + </span>
            </a>
        </div>
    </div>

    <div id="sidebar-row" class="sidebar-row row">
        
        <div id="dropdown-menu" class="col-12 dropdown-menu-custom" style="padding: 0;">
        <button type="button" class="collapsible">Your Recipes</button>
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