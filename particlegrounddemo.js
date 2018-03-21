/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */
// 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: 'rgba(255, 255, 255, 0.5)',
    lineColor: 'rgba(255, 255, 255, 0.1)',
    minSpeedX: 0.075,
    maxSpeedX: 0.15,
    minSpeedY: 0.075,
    maxSpeedY: 0.15,
    density: 10000, // One particle every n pixels
    curvedLines: false,
    proximity: 100, // How close two dots need to be before they join
    parallaxMultiplier: 1000, // Lower the number is more extreme parallax
    particleRadius: 2, // Dot size
  });
  // var intro = document.getElementById('intro');         This was on the demo, duno how it fits in
  // intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/
