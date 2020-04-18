var link = document.getElementById('link');
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];
link.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target==modal) {
        this.modal.style.display = "none";
    }
}


var orbita = document.getElementById('orbita');
var open = document.getElementById('myOpen');
var exit = document.getElementsByClassName('exit')[0];
orbita.onclick = function() {
    open.style.display = "block";
}
exit.onclick = function() {
    open.style.display = "none"
}

window.onclick = function(event) {
    if(event.target==open) {
        this.open.style.display = "none"
    }
}


var viva = document.getElementById('viva');
var box = document.getElementById('myBox');
var out = document.getElementsByClassName('out')[0];
viva.onclick = function() {
    box.style.display = "block";
}
out.onclick = function() {
    box.style.display = "none"
}

window.onclick = function(event) {
    if(event.target==box) {
        this.open.style.display = "none"
    }
}