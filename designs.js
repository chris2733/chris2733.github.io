
// Notes
//use $(window) so it shows only the viewport, essentially, use this later

//loading page

var myVar;

function pageLoaded() {
    setTimeout(showPage, 1000);
    setTimeout(flipSubtext, 3700);
    setTimeout(typeWriter, 1400);
}

//new typewriter
var i = 0;
var txt = "Hi, I'm Chris.";
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


function flipSubtext () {
  $('#subtext').addClass('subtextanimation');
}

function showPage() {
  $('#loader').fadeOut("slow");
  // document.getElementById("myDiv").style.display = "block";  is this relevant?
}



// Menu icon and items animations

const menuIcon = document.querySelector('.menuIcon');

function menuAnimation() {
    $('.menuIcon').toggleClass("clickMenuIcon");
    $( "#title1" ).toggleClass( "first" );
    $( "#title2" ).toggleClass( "second" );
    $( "#title3" ).toggleClass( "third" );
    $( "#title4" ).toggleClass( "fourth" );
    $( "#menuBar2" ).toggleClass( "menubar2before" );
    $( "#menuBar2" ).toggleClass( "menubar2after" );
};

/* for later - not sure what to do!
function delayMenu() {

  setTimeout(menuAnimation, 3000);
};
*/

menuIcon.addEventListener('click', menuAnimation);






/* this behaves in an odd way, not sure why
$('#menuBar').mouseleave(toggleTheMenu).setTimeout(5000);
*/
