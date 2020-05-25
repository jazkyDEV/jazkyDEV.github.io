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
      



    let zis = $('.back').innerHeight()-$('.head').innerHeight();
    zis-=50;
    $('.kontr').innerHeight(zis);

    $( window ).resize(function() {
      let zis = $('.back').innerHeight()-$('.head').innerHeight();
      zis-=50;
      $('.kontr').innerHeight(zis);
    });


    $('.button-4').on('click', function(){

        money=money-4;
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
    });
    


      /* while(true){
        $('.flipper').css({'transform' : 'scale(1.03)', 'transform' : 'rotate(-15deg)'}).delay(100);
        $('.flipper').css({'transform' : 'rotate(-15deg)'}).delay(100);
        $('.flipper').css({'transform' : 'rotate(0)', 'transform' : 'scale(1.03)'}).delay(100);
      } */
});