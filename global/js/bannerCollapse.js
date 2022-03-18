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

var collButtonL = document.getElementsByClassName("collapse-left");
var sidebarLeft = document.getElementById("Sidebar-Left");
var menuLeft = document.getElementById("menu-left");

var collButtonR = document.getElementsByClassName("collapse-right");
var sidebarRight = document.getElementById("Sidebar-Right");

collButtonL[0].addEventListener("click", function() {
    if (sidebarRight.classList.contains("collapsed"))
    {
        content[0].classList.toggle("wholeCollapse");
    }
    menuLeft.classList.toggle("d-none");
    sidebarLeft.classList.toggle("collapsed");
    content[0].classList.toggle("leftCollapse");
})

collButtonR[0].addEventListener("click", function() {
    if (sidebarLeft.classList.contains("collapsed"))
    {
        content[0].classList.toggle("wholeCollapse");
    }
    sidebarRight.classList.toggle("collapsed");
    content[0].classList.toggle("rightCollapse");
})