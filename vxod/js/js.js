/* var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slide");
    
    if(n > slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length
    }
    for(i = 0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
}
 */


$('.next').on('click', function(){
    if($('.card-block').find('.card').hasClass('flip')){
        $('.card-block').find('.card').removeClass('flip');
        $('.kontr').fadeIn(10);
        $('.next').fadeIn(10);
        
    }
    else {
        $('.card-block').find('.card').addClass('flip');
        $('.kontr').fadeOut(10);
        $('.next').fadeOut(10);
    }
});
$('.prev').on('click', function(){
    if($('.card-block').find('.card').hasClass('flip')){
        $('.card-block').find('.card').removeClass('flip');
        $('.kontr').fadeIn(10);
        $('.next').fadeIn(10);
    }
    else {
        $('.card-block').find('.card').addClass('flip');
        $('.kontr').fadeOut(10);
        $('.next').fadeOut(10);
    }
});
