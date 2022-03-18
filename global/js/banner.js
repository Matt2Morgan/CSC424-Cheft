//banner.js

////////////////
//Sidebar-Left//
////////////////

if(document.getElementById("Sidebar-Left") != null){
    document.getElementById("Sidebar-Left").innerHTML+=`
    <div class="row" style="margin: 0; height: 100%;">
        <button type="button" class="collapse-left"></button>
        <div id="menu-left" class="col-12" style="padding: 0;">
            <button type="button" class="collapsible">Recipes</button>
            <div class="collapse-content">
                <p>Lorem ipsum...</p>
            </div>
            <button type="button" class="collapsible">Tags</button>
            <div class="collapse-content">
                <p>Lorem ipsum...</p>
            </div>
        </div>
    </div>
    `
}

/////////////////
//Sidebar-Right//
/////////////////

if(document.getElementById("Sidebar-Right") != null){
    document.getElementById("Sidebar-Right").innerHTML+=`
    <div class="row" style="margin: 0;">
        <button type="button" class="collapse-right"></button>
        <div id="menu-right" class="col-12">

        </div>
    </div>
    `
}