var i = 0;

document.getElementsByClassName("section__menu-button")[0].onclick = function(){
var ele = document.getElementsByClassName("section__menu")[0];
var menu = document.getElementsByClassName("menu__icon")[0];
if(i % 2 == 0){
    ele.style.transform = "translate(0, -50%)";
    menu.style.transform = "rotate(-90deg)";
}
else {
    ele.style.removeProperty("transform");
    menu.style.removeProperty("transform");

}
++i;
}