
// getting loader first, then page
$("#loader").hide()
$("#main").hide()
var myVar= "";

function myFunction() {
    myVar = setTimeout(showPage, 3000);
    $("#loader").fadeIn(2000);
    $("#innerloader").hide().fadeIn(2000); // fade in the logo
    $("#loaderlogo").hide().fadeIn(2000);
}


function showPage() {
  $("#loader").fadeOut(1500);
  setTimeout(fadeinmain, 1500);
}

function fadeinmain() {
  $("#main").fadeIn(3000); // fade in the rest of the page
}
