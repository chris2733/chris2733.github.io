
// Notes
//use $(window) so it shows only the viewport, essentially, use this later

//loading page

// hiding the scrollbar until page loads



var myVar;

function pageLoaded() {
    setTimeout(showPage, 1000);
}


function showPage() {
  $('#loader').fadeOut("slow");
  // document.getElementById("myDiv").style.display = "block";  is this relevant?
}


// Menu icon and items animations

const menuIcon = document.querySelector('#menuicon');

function menuAnimation() {
    $('#menuicon').toggleClass("clickMenuSpan");
    $('#menuicon').toggleClass("rotateMenu");
};

menuIcon.addEventListener('click', menuAnimation);


// scroll to element when you click the start icons
function scroll1 () {
  $('#page1')[0].scrollIntoView({
    behavior: "smooth",
  });
};
$('#starticon1').click(scroll1);

function scroll2 () {
  $('#page2')[0].scrollIntoView({
    behavior: "smooth",
  });
};
$('#starticon2').click(scroll2);

function scroll3 () {
  $('#page3')[0].scrollIntoView({
    behavior: "smooth",
  });
};
$('#starticon3').click(scroll3);







//
