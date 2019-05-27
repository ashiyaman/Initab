var data =
  {
  "redditArray":[
    {"by":"Slack", "news":"Bring your team together with Slack.", "score": "49"},
    {"by":"Hotjar", "news":"See how your visitors are really using your website.", "score": "45"},
    {"by":"u/acanguen", "news":"I wrote a HTTP client for micro frontend architecture. Now we started to use it on every Node.js project.", "score": "62"}
  ],
  "jsHistoryArray":[
    {"title":"JavaScript JSON", "time":"3"},
    {"title":"Ex08 Node can't find modules - Learn Code Forum", "time":"4"},
    {"title":"Relevant Javascript History on Pre-Work Project: Landing Page - Initab | Trello", "time":"6"},
    {"title":"JavaScript basics: 2 ways to get child elements with JavaScript - Mr Frontend Blog", "time":"10"},
    {"title":"How to Fetch and Display JSON Data in HTML Using JavaScript - How to Create Apps", "time":"12"},
    {"title":"JavaScript DOM HTML", "time":"17"}
  ],
  "githubIssuesArray":[
    {"repo":"react-boilerplate/react-boilerplate", "issueNo":"1648", "issue":"Webpack Error when trying to pack CSS"},
    {"repo":"storybooks/storybook", "issueNo":"1493", "issue":"Module parse failed: You may need an appropriate loader to handle this file type"},
    {"repo":"cezerin/cezerin", "issueNo":"458", "issue":"Module parse failed: Unexpected token (1:0) You may need an appropriate loader to handle this file type."}
  ]
  };

let redditData = data.redditArray;
let redditHTML = document.querySelector('.news');
redditData.forEach( function(element) {
  var li = document.createElement('li');
  var heading = document.createElement('h5');
  heading.innerHTML = element.news;
  heading.className = 'white';
  li.appendChild(heading);
  var postedBy = document.createElement('p');
  postedBy.innerHTML = 'Posted by ' + element.by;
  li.appendChild(postedBy);
  var score = document.createElement('p');
  score.innerHTML = 'Reddit Score: ' + element.score;
  score.className = 'purple';
  li.appendChild(score);
  redditHTML.appendChild(li);
});

let jsHistoryData = data.jsHistoryArray;
let historyHTML = document.querySelector('.history');
jsHistoryData.forEach( function(element) {
  var li = document.createElement('li');
  var heading = document.createElement('a');
  heading.innerHTML = element.title;
  heading.className = 'purple';
  li.appendChild(heading);
  var updatedTime = document.createElement('span');
  updatedTime.innerHTML = element.time + ' hours ago';
  li.appendChild(updatedTime);
  historyHTML.appendChild(li);
});

let time = document.querySelector('.time');
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let currentDate = new Date();
let timeHTML = document.createElement('h2');
let hours = document.createElement('span');
hours.innerHTML = currentDate.getHours();
let amOrPm = 'AM';
if((currentDate.getHours() > 12) || (currentDate.getHours() == 0)) {
  if(currentDate.getHours() == 0) {
    console.log(currentDate.getHours()==0);
    hours.innerHTML = 12;
  }
  else {
    hours.innerHTML = currentDate.getHours() - 12;
    amOrPm = 'PM';
  }
}
if(currentDate.getHours() < 10){
  hours.innerHTML = '0' + currentDate.getHours();
}
timeHTML.appendChild(hours);
let minutes = document.createElement('span');
if (currentDate.getMinutes() < 10) {
  minutes.innerHTML = ':0' + currentDate.getMinutes();
}
else {
  minutes.innerHTML = ':' + currentDate.getMinutes();
}
timeHTML.appendChild(minutes);
let timeOfDay = document.createElement('span');
timeOfDay.innerHTML = amOrPm;
timeHTML.appendChild(timeOfDay);
time.appendChild(timeHTML);
let dateHTML = document.createElement('p');
let monthHTML = document.createElement('span');
monthHTML.innerHTML = monthNames[currentDate.getMonth()];
dateHTML.appendChild(monthHTML);
let date = document.createElement('span');
date.innerHTML = ' ' + currentDate.getDate();
dateHTML.appendChild(date);
let yearHTML = document.createElement('span');
yearHTML.innerHTML = ', ' + currentDate.getFullYear();
dateHTML.appendChild(yearHTML);
time.appendChild(dateHTML);

let githubIssuesData = data.githubIssuesArray;
let githubHTML = document.querySelector('.issues');
githubIssuesData.forEach( function(element) {
  var li = document.createElement('li');
  var repo = document.createElement('h6');
  repo.innerHTML = "Repo: " + element.repo;
  repo.className = 'purple';
  li.appendChild(repo);
  var issueNo = document.createElement('p');
  issueNo.innerHTML = 'Issue #' + element.issueNo;
  issueNo.className = 'yellow';
  li.appendChild(issueNo);
  var issue = document.createElement('p');
  issue.innerHTML = element.issue;
  issue.className = 'white';
  li.appendChild(issue);
  githubHTML.appendChild(li);
});
