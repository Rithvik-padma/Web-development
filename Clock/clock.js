var sec = document.querySelector(".hands-sec");
var min = document.querySelector(".hands-min");
var hour = document.querySelector(".hands-hour");

document.addEventListener("DOMContentLoaded", function(){
  function setTime(){
    var date = new Date();
    var seconds = date.getSeconds();
    console.log(seconds);
    var sdeg = (seconds/60)*360 + 90;
    sec.style.transform = "rotate("+sdeg+"deg)";
    var minutes = date.getMinutes();
    var mdeg = (minutes/60)*360 + 90;
    min.style.transform = "rotate("+mdeg+"deg)";
    var hours = date.getHours();
    var hdeg = (hours/12)*360 + 90;
    hour.style.transform = "rotate("+hdeg+"deg)";
  }
  setInterval(setTime, 1000);
});
