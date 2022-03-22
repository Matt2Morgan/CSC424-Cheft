// Get the offset position of the navbar
var sticky = $("#Navbar").offset().top;

// When the user scrolls the page, execute myFunction
$("#content").scroll(function() {
  if ($("#content").scrollTop() > sticky) {
$("#Navbar").addClass("sticky");
} else {
  $("#Navbar").removeClass("sticky");
}
});