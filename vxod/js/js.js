
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


