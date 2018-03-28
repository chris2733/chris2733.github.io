
// Notes
//use $(window) so it shows only the viewport, essentially, use this later

//loading page



// set the starticonstext to be hidden until everything on the front page has loaded
$(".starticonstext").attr("display", "none");
//hiding the rest of the site while it loads
$(".hideuntilload").hide();

// fading out the loading circle
function loadinganimationout() {
  $("#loadinganimation").addClass("scale-out-center");
}

function pageLoaded() {
  setTimeout(loadinganimationout, 1500);
  setTimeout(showPage, 2000);
}

// animations to fade in all divs in first section
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

// moving the name and title up from centre
function movingnames() {
  $("#textsection2").addClass("movingmynameclass");
}


function showPage() {
  $('#loader').fadeOut("slow");
  setTimeout(maintextanimation, 700);
  setTimeout(maintextanimation2, 1400);
  setTimeout(starticonsanimation1, 2700);
  setTimeout(starticonsanimation2, 3200);
  setTimeout(starticonsanimation3, 3800);
  setTimeout(movingnames, 2100);
  if (typeof starticonstext1 === "function") { // for different screen sizes
    setTimeout(starticonstext1, 2700);
    setTimeout(starticonstext2, 3200);
    setTimeout(starticonstext3, 3800);
  }
  $(".hideuntilload").show();
  // document.getElementById("myDiv").style.display = "block";  is this relevant?
}


// Menu icon and items animations

const menuIcon = document.querySelector('#menuicon');

function menuAnimation() {
    $('#menuicon').toggleClass("clickMenuSpan");
    $('#menuicon').toggleClass("rotateMenu");
};

//menuIcon.addEventListener('click', menuAnimation);

// since scrollinotview doesnt work too well on certain browxers, use more js instead
function getOffset( el ) { // to find position of element on page
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
var x = getOffset( document.getElementById('yourElId') ).left;




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



// clearing form, for use in submitting form

var phpURL = "contactform.php";



function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateForm(){

		var email = $("input[type=email]").val();
		var validEmail = validateEmail(email);
		var validName = $("input[type=name]").val() ? true : false;
		var validMsg = $("textarea").val() ? true : false;

		var nameError = $("input[type=name]").parent().find(".error-mark");
		var emailError = $("input[type=email]").parent().find(".error-mark");
		var msgError = $("textarea").parent().find(".error-mark");

		TweenLite.to(nameError, 0.5, {opacity: validName ? 0 : 1});
		TweenLite.to(emailError, 0.5, {opacity: validEmail ? 0 : 1});
		TweenLite.to(msgError, 0.5, {opacity: validMsg ? 0 : 1});

	return (validEmail && validName && validMsg);
}

function flashButton(color){
	var originalColor = $("#actualbutton").css("background-color");

	setTimeout(function(){
		$("#actualbutton").css("background-color", color);
	},200);

	setTimeout(function(){
		$("#actualbutton").css("background-color", originalColor);
	},1600);

}

function sentAnimation(message, color) {

		flashButton(color);
		var sentElement = $(".result-message");
		$(sentElement).text(message);
		var sentTween = new TimelineLite();
		sentTween.fromTo(sentElement, 0.6, {y:0},{ y:70});
		sentTween.to(sentElement, 0.6, {y:140, delay:1});

		var envelopeElement = $(".submit-icon");
		var envelopeTween = new TimelineLite();
		envelopeTween.fromTo(envelopeElement, 0.6, {y:0}, {y:70});
		envelopeTween.fromTo(envelopeElement, 0.6, {y:-70}, {y:0, delay:1});

}



function clearForm(){
	$("input[type=email]").val("");
	$("input[type=name]").val("");
	$("textarea").val("");

  $("input[type=name]").focusout(onFocusOut);
  $("input[type=email]").focusout(onFocusOut);
  $("textarea").focusout(onFocusOut);
}


$(function() {
  $('#thisistheform').submit(function(event) {
    event.preventDefault();

		if(validateForm()){
			sentAnimation("Sent", "#4cd137");

			//post form
			var formEl = $(this);
			console.log(formEl.serialize());
			var submitButton = $('input[type=submit]', formEl);

			$.ajax({
				type: 'POST',
				url: phpURL,
				accept: {
					javascript: 'application/javascript'
				},
				data: formEl.serialize(),
				beforeSend: function() {
					submitButton.prop('disabled', 'disabled');
				}
			}).done(function(data) {
				submitButton.prop('disabled', false);
			});

			clearForm();

		}
		else{
			sentAnimation("Error", "#c23616");
		}
  });
});







//when arrow at bottom clicked, scroll to the very top of the page
function scrolltop () {
  $('#textsection')[0].scrollIntoView({
    behavior: "smooth", block: "start",
  });
};
$('#scrolltothetop').click(scrolltop);








//
