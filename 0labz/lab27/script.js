var i = 0;
document.getElementsByClassName("section-page__title")[0].onclick = function () {
  var ele = document.getElementsByClassName("section-page__title")[0];
  ele.innerHTML = (i % 2 == 0 ? "Криминальное чтиво" : "Pulp Fiction");
  ++i;
};

document.getElementsByClassName("characters-item__img")[0].onmouseover = function () {
    var ele = document.getElementsByClassName("characters-item__img")[0];
    ele.src = "vincent.gif"
}
document.getElementsByClassName("characters-item__img")[0].onmouseout = function () {
    var ele = document.getElementsByClassName("characters-item__img")[0];
    ele.src = "vincent.jpg"
}
document.getElementsByClassName("characters-item__img")[1].onmouseover = function () {
    var ele = document.getElementsByClassName("characters-item__img")[1];
    ele.src = "julesR.jpg"
}
document.getElementsByClassName("characters-item__img")[1].onmouseout = function () {
    var ele = document.getElementsByClassName("characters-item__img")[1];
    ele.src = "julesL.jpg"
}
document.getElementsByClassName("characters-item__img")[4].onmouseover = function () {
    var ele = document.getElementsByClassName("characters-item__img")[4];
    ele.src = "mia.gif"
}
document.getElementsByClassName("characters-item__img")[4].onmouseout = function () {
    var ele = document.getElementsByClassName("characters-item__img")[4];
    ele.src = "mia.png"
}
document.getElementsByClassName("characters-item__img")[5].onmouseover = function () {
    var ele = document.getElementsByClassName("characters-item__img")[5];
    ele.src = "wolf2.jpg"
}
document.getElementsByClassName("characters-item__img")[5].onmouseout = function () {
    var ele = document.getElementsByClassName("characters-item__img")[5];
    ele.src = "wolf.jpg"
}

var l = 0;
document.getElementsByClassName("last")[0].onclick = function () {
    var ele = document.getElementsByClassName("last")[0];
    ele.src = (l % 2 == 0 ? "last2.jpg" : "last.jpg");
    ++l;
  };

