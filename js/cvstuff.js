var schoolStuff = $('#schoolhistory');

var siteUrl = window.location.href;

var requestURL = '/json/cv.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function() {
  var schoolInfo = request.response;
  populateSchool(schoolInfo);
}


function populateHeader(jsonObj) {
    var schoolData = jsonObj['schooling'];
  // var schoolH = document.createElement('h1');
  // schoolStuff.textContent = schoolData.name;
  // header.appendChild(myH1);
  //
  // var myPara = document.createElement('p');
  // myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  // header.appendChild(myPara);
}
