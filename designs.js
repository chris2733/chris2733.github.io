
// Notes
//use $(window) so it shows only the viewport, essentially, use this later

//loading page



// set the starticonstext to be hidden until everything on the front page has loaded
$(".starticonstext").attr("display", "none");


function pageLoaded() {
    setTimeout(showPage, 2000);
}
function maintextanimation() {
  $("#maintext1").addClass("text-pop-up-top");
}
function maintextanimation2() {
  $("#maintext2").addClass("text-pop-up-top");
}
function starticonsanimation1() {
  $("#starticon1").addClass("slide-in-fwd-center");
}
function starticonsanimation2() {
  $("#starticon2").addClass("slide-in-fwd-center");
}
function starticonsanimation3() {
  $("#starticon3").addClass("slide-in-fwd-center");
}
if (window.matchMedia("(max-width: 600px)").matches) {
  function starticonstext1() {
    $("#starticonstext1").addClass("slide-in-fwd-center");
  }
  function starticonstext2() {
    $("#starticonstext2").addClass("slide-in-fwd-center");
  }
  function starticonstext3() {
    $("#starticonstext3").addClass("slide-in-fwd-center");
  }
}
function showPage() {
  $('#loader').fadeOut("slow");
  setTimeout(maintextanimation, 700);
  setTimeout(maintextanimation2, 1400);
  setTimeout(starticonsanimation1, 2100);
  setTimeout(starticonsanimation2, 2600);
  setTimeout(starticonsanimation3, 3100);
  if (typeof starticonstext1 === "function") {
    setTimeout(starticonstext1, 2100);
    setTimeout(starticonstext2, 2600);
    setTimeout(starticonstext3, 3100);
  }
  // document.getElementById("myDiv").style.display = "block";  is this relevant?
}


// Menu icon and items animations

const menuIcon = document.querySelector('#menuicon');

function menuAnimation() {
    $('#menuicon').toggleClass("clickMenuSpan");
    $('#menuicon').toggleClass("rotateMenu");
};

//menuIcon.addEventListener('click', menuAnimation);


// scroll to element when you click the start icons
function scroll1 () {
  $('#page1')[0].scrollIntoView({
    behavior: "smooth", block: "start",
  });
};
$('#starticon1').click(scroll1);

function scroll2 () {
  $('#page2')[0].scrollIntoView({
    behavior: "smooth", block: "start",
  });
};
$('#starticon2').click(scroll2);

function scroll3 () {
  $('#page3')[0].scrollIntoView({
    behavior: "smooth", block: "start",
  });
};
$('#starticon3').click(scroll3);


// make label text i form disappear when clicked on and if text is typed
$("input[type=name]").focus(onFocus);
$("input[type=email]").focus(onFocus);
$("textarea").focus(onFocus);

$("input[type=name]").focusout(onFocusOut);
$("input[type=email]").focusout(onFocusOut);
$("textarea").focusout(onFocusOut);

function onFocus(){
		$(this).parent().find("label").addClass("activeinput");
};
function onFocusOut(){
	if($(this).val() === "")
		$(this).parent().find("label").removeClass("activeinput");
};

//  edit the sumbit button later, make it scroll up & turn
//  green for ok, scroll down and turn red for not.
// see https://codepen.io/paulstamp/pen/qagBpL







//
