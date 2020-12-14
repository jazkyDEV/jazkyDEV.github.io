document.getElementById('contacts').onmouseover = function() {
    var ele = document.querySelector('#contacts .header__nav-link-menu');
    ele.style.display = "block";

}
document.getElementById('contacts').onmouseout = function() {
    var ele = document.querySelector('#contacts .header__nav-link-menu');
    ele.style.display = "none";
}