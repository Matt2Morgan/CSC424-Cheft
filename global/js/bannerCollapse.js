//Sidebar dropdown lists

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


//Sidebar collapse logic
var content = document.getElementsByClassName("content");

var collButtonL = document.getElementsByClassName("collapse-sidebar-button");
var sidebar = document.getElementById("Sidebar");
var navbar = document.getElementById("Navbar");
var bottomMenu = document.getElementById("bottom-menu");
var topMenu = document.getElementById("top-menu");
var menu = document.getElementById("dropdown-menu");

collButtonL[0].addEventListener("click", function() {
    menu.classList.toggle("d-none");
    bottomMenu.classList.toggle("d-none");
    topMenu.classList.toggle("d-none");
    sidebar.classList.toggle("collapsed");
    navbar.classList.toggle("collapsed");
    content[0].classList.toggle("leftCollapse");
    collButtonL[0].classList.toggle("button-collapsed")
})