navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();


function version(){
    document.getElementsByClassName('browser__version-content')[0].innerHTML = 
    navigator.sayswho;
}


var op_ = 0;
document.getElementsByClassName('browser__version-title')[0].onclick = function(){
    var par = document.getElementsByClassName('browser__version-content')[0];
    if(op_++ % 2 === 0){
        par.style.opacity = '1';
    }
    else{
        par.style.opacity = '0';

    }
}

function startTime() {
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


document.getElementsByTagName('body')[0].onload = function(){
      version();
      startTime();  
}

document.getElementById('textarea').onchange = function(){
      var inner = document.getElementById('textarea').value;
      alert("You entered: " + inner)
}

document.getElementById('btn').onclick = function(){
    var size = prompt("Enter array size:", "");
    size = parseInt(size);
    var arr = new Array(size);
    for(i = 0;i < arr.length;++i){
        arr[i] = prompt("Enter arr[" + i + "]:", "");
    }
    alert(arr);
}

document.getElementById('min').onclick = function(){
    var var1 = parseInt(prompt("Enter 1-st number:", ""));
    var var2 = parseInt(prompt("Enter 2-nd number:", ""));
    var1 = Math.min(var1, var2);
    alert("Min: " + var1);
}

function pow(num, power){
    if(power===1){
        return num;
    }
    return num*pow(num, power -1);
}
document.getElementById('pow').onclick = function(){
    var number = parseInt(prompt("Enter number:", ""));
    var power = parseInt(prompt("Enter its powr:", ""));
    var result = pow(number, power);
    alert("Result: " + result);
}




  
