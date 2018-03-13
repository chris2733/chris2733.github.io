
// Notes
//use $(window) so it shows only the viewport, essentially, use this later

//loading page

var myVar;

function pageLoaded() {
    setTimeout(showPage, 1000);
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

// menuIcon.addEventListener('click', menuAnimation);


// making my names characters change as you hover

$("#particles").onload = function () {
        var i, tx, html, node;

        node = document.getElementById("maintext1h1");
        tx = node.innerHTML;

        html = "";
        for (i = 0; i < tx.length; i++)
        {
          html += "<span>" + tx.charAt(i) + "</span>";
        }

        node.innerHTML = html;
      };
