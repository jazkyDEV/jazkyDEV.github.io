var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();
fixed_time = 6;
var fixed = false;

// Update the count down every 1 second
function countdown() {
    var days;
    var hours;
    var minutes;
    var seconds;

  // Get today's date and time
  if(!fixed){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
  else {
  // Time calculations for days, hours, minutes and seconds
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = --fixed_time;
  }



  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (days == 0 && hours == 0 && minutes == 0 && seconds <= 0) {
    PopUp();
  }
  else {
    setTimeout(countdown, 1000)
  }
}

document.getElementsByTagName('body')[0].onload = countdown();

document.getElementsByClassName('button__reset')[0].onclick = function(){
    var start = false;
    if(fixed_time === 0) {
        start = true;
    }
    fixed_time = 6;
    fixed = true;
    if(start) {
        countdown();
    }
    ZoomIn('clock__item');
}

function ZoomIn(SomeClass) {
    var to_be_zoomed = document.getElementsByClassName(SomeClass);
    var i;
        for(i = 0; i < to_be_zoomed.length;++i){
            to_be_zoomed[i].style.animation = 'zoom 1.3s';  
        }
        setTimeout(ZoomOut, 1300);

}

function ZoomOut() {
    var to_be_zoomed = document.getElementsByClassName('clock__item');
    var i;

        for(i = 0; i < to_be_zoomed.length;++i){
            to_be_zoomed[i].style.removeProperty('animation');  
        }
}

function PopUp(){
    document.getElementsByClassName('section__joker')[0].style.filter = "blur(10px)";
    document.getElementsByClassName('popup')[0].style.display = "block";

}
document.getElementsByClassName('popup')[0].onclick = function(){
    document.getElementsByClassName('section__joker')[0].style.filter = "blur(0)";
    document.getElementsByClassName('popup')[0].style.display = "none";

}