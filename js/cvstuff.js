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
    var i = 1;
    schoolData.forEach(function(element) {
        var school = document.createElement('div');
        school.className = ('cvwrap-content-each');
        school.setAttribute('id','school' + i);
        var schoolName = school.appendChild(document.createElement('div'));
        schoolName.innerText = element.name;
        var schoolTime = school.appendChild(document.createElement('div'));
        schoolTime.innerText = element.time;
        var schoolGrade = school.appendChild(document.createElement('div'));
        schoolGrade.innerText = element.grades;
        document.getElementById('schoolhistory').appendChild(school);
        i++;
    });
    // var schoolH = document.createElement('h1');
    // schoolH.textContent = schoolData.name;
    // header.appendChild(schoolH);
    //
    // var myPara = document.createElement('p');
    // myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    // header.appendChild(myPara);
}
