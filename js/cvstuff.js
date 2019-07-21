var schoolStuff = $('#schoolhistory');

var siteUrl = window.location.href;

var requestURL = siteUrl + '/json/cv.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function() {
  var schoolInfo = request.response;
  populateHeader(schoolInfo);
}


function populateHeader(jsonObj) {
    var schoolData = jsonObj['schooling'];
    schoolData.forEach(function(e) {
        console.log(e);
    });
    // var schoolH = document.createElement('h1');
    // schoolH.textContent = schoolData.name;
    // header.appendChild(schoolH);
    //
    // var myPara = document.createElement('p');
    // myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    // header.appendChild(myPara);
}
