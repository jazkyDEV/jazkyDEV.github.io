document.getElementsByTagName('body')[0].onload = function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;
    var t = setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };  // add zero in front of numbers < 10
    return i;
  }

  document.getElementById('button__popup').onclick = function(){
      let popup =
      window.open("", "", "width=660, height=390, scrollbars=no, resizable=no, top=250', left=350");
      popup.document.write('<img src="keanu.gif">');
  }

  