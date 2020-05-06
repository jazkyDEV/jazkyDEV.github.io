
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

jQuery(document).ready(function($){

    var money = JSON.parse(sessionStorage.getItem('counter'));
    $('.counter').html(money);

    $('.counter').counterUp({
        delay: 10,
        time: 500
    });


    if(money<=0){
        $(function(){
          var height = $(document).height();
          $('#wdw').innerHeight(height);
          $('.page').css("filter", "blur(10px)");
          $('#wdw').fadeIn();
        });
      };
    
    $('#roma1').on('click', function(){

        money=money-14;
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
        location.href = 'https://jazkydev.github.io/activePassive';

        
        });
    



});
