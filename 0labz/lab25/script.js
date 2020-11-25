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
    document.getElementsByClassName('version__content')[0].innerHTML = 
    navigator.sayswho;
}  

document.getElementsByTagName('body')[0].onload = function(){
    version();
}

var op_ = 0;
document.getElementsByClassName('button__version')[0].onclick = function(){
    if(op_++ % 2 === 0){
        document.getElementsByClassName('version__content')[0].style.opacity = "1";
        document.getElementsByClassName('version__content')[0].style.transform = "scale(1)";
    }
    else {
        document.getElementsByClassName('version__content')[0].style.removeProperty('opacity');
        document.getElementsByClassName('version__content')[0].style.removeProperty('transform');

    }
}
var op2_ = 0;
document.getElementsByClassName('button__dora')[0].onclick = function(){
    if(op2_ >= 0){
        document.getElementsByClassName('dora__high')[0].style.opacity = "1";
        document.getElementsByClassName('dora__high')[0].style.transform = "scale(1)";
    }
    setTimeout(PutMark, 500);
    
}

function PutMark(){
    confirm("А вы точно сказали ДА?");
    confirm("Ну так не серьезно, нужно вслух!");
    confirm("Ничего не слышно, ГРОМЧЕ!");
    var mark = parseInt(prompt("Ладно, поверим,\nНу получаеца нужно соточку ставить)0)", "100"));
    var i = 0;
    while(mark!=100){
        if(i === 0){
            var mark = parseInt(prompt("Выбрана неправильная оценка\nПопробуйту другую...", "100"));
            ++i;
        }
        else if(i === 1){
            var mark = parseInt(prompt("Это точно неправильная оценка\nПопробуйту какую нибудь еще)))", "100"));
            ++i;
        }
        else if(i === 2){
            var mark = parseInt(prompt("И эта не та, вот незадача\nЭхх, может еще какую попробуем?", "100"));
            ++i;
        }
        else if(i > 2 && i <4){
            var mark = parseInt(prompt("Так, ну тут нужно уже угадывать. "+i+" раз пытались, и все никак\nСейчас точно получится!)", "100"));
            ++i;
        }
        else{
            var left = 100 -i;
            var mark = parseInt(prompt("Если 100 раз выбирать разную оценку то точно угадаем)). "+ left +" раз осталось\nНуу поехали!", "100"));
            ++i;
        }
    }
    PopUp();
}

function PopUp() {
    document.getElementsByClassName('section__version')[0].style.filter = "blur(10px)";
    document.getElementsByClassName('modal')[0].style.display = "flex";
    document.getElementsByClassName('img_papich')[0].style.opacity = "1";
    document.getElementsByClassName('img_papich')[0].style.transform = "scale(1)";
}