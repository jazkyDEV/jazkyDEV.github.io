jQuery(document).ready(function($){

    var money = JSON.parse(sessionStorage.getItem('counter'));
    var hotel = JSON.parse(sessionStorage.getItem('hotel'));
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


    $('#yandex1').on('click', function(){

    money-=(0.2*hotel);
    sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));

    });


    $('#almaz1').on('click', function(){
        money-=(0.4*hotel);

        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));

    });


    $('#bavaria1').on('click', function(){

        money-=(0.5*hotel);
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
    });
    
    


});