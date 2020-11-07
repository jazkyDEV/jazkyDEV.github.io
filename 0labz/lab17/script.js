let i = 0;
function Unblur() {
    if(i % 2 === 0){
        document.querySelector(".section__main-bg").style.filter = "blur(0px)";
    }
    else {
        document.querySelector(".section__main-bg").style.filter = "blur(50px)";
    }
    ++i;
}
