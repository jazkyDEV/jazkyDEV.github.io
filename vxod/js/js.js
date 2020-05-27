
$('.next').on('click', function(){
    if($('.card-block').find('.card').hasClass('flip')){
        $('.card-block').find('.card').removeClass('flip');
        $('.kontr').fadeIn(1);
        $('.next').fadeIn(1);
        $('.back').fadeIn(1);
    }
    else {
        $('.card-block').find('.card').addClass('flip');
        $('.kontr').fadeOut(1);
        $('.next').fadeOut(1);
        $('.back').fadeOut(1);
    }
});
$('.prev').on('click', function(){
    if($('.card-block').find('.card').hasClass('flip')){
        $('.card-block').find('.card').removeClass('flip');
        $('.kontr').fadeIn(1);
        $('.next').fadeIn(1);
        $('.back').fadeIn(1);
    }
    else {
        $('.card-block').find('.card').addClass('flip');
        $('.kontr').fadeOut(1);
        $('.next').fadeOut(1);
        $('.back').fadeOut(1);
    }
});

$('.nextM__back').on('click', function(){
    if($('.card-block').find('.card').hasClass('flip')){
        $('.card-block').find('.card').removeClass('flip');
        $('.back__m').fadeIn(1);
        $('.front__m').fadeOut(1);
    }
    else {
        $('.card-block').find('.card').addClass('flip');
        $('.back__m').fadeOut(1);
        $('.front__m').fadeIn(1);
    }
});

$('.nextM__front').on('click', function(){
    if($('.card-block').find('.card').hasClass('flip')){
        $('.card-block').find('.card').removeClass('flip');
        $('.back__m').fadeIn(1);
        $('.front__m').fadeOut(1);
    }
    else {
        $('.card-block').find('.card').addClass('flip');
        $('.back__m').fadeOut(1);
        $('.front__m').fadeIn(1);
    }
});



