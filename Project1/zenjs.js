
// getting loader first, then page




var myVar= "";

function myFunction() {
    myVar = setTimeout(showPage, 3000);
    $("#innerloader").hide().fadeIn(2000); // fade in the logo
    $("#loaderlogo").hide().fadeIn(2000);
}

function showPage() {
  $("#loader").fadeOut( "slow" );
  $("#main").hide().fadeIn(2000); // fade in the rest of the page
}
