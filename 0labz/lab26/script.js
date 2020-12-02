document.getElementsByClassName("section__intro-title")[0].onmouseover = function(){
    document.getElementById("intro__menu").style.display = "block"; 
}

document.getElementsByClassName("section__intro-title")[0].onmouseout = function(){
    document.getElementById("intro__menu").style.removeProperty("display"); 
}