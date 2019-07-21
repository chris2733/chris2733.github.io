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
    console.log(jsonObj);
    var schoolH = document.createElement('h1');
    schoolStuff.textContent = schoolData.name;
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}
