jQuery(document).ready(function($){

    var money = JSON.parse(sessionStorage.getItem('counter'));
    money-=150;
    money.toFixed(1);
    $('.counter').html(money);

    



      $('.button').on('click', function(){
        if(money<=0){
          $(function(){
            var height = $(document).height();
            $('#wdw').innerHeight(height);
            $('.page').css("filter", "blur(10px)");
            $('#wdw').fadeIn();
            $('.counter__item').fadeIn();
            $('.counter').counterUp({
              delay: 10,
              time: 500
            });
          });
        };
        if(money>=430){
          $(function(){
            var height = $(document).height();
            $('#wdw2').innerHeight(height);
            $('.page').css("filter", "blur(10px)");
            $('#wdw2').fadeIn();
            $('.counter__item').fadeIn();
            $('.counter').counterUp({
              delay: 10,
              time: 500
            });
          });
        };
        if(money<430 && money>0){
          $(function(){
            var height = $(document).height();
            $('#wdw3').innerHeight(height);
            $('.page').css("filter", "blur(10px)");
            $('#wdw3').fadeIn();
            $('.counter__item').fadeIn();
            $('.counter').counterUp({
              delay: 10,
              time: 500
            });
          });
        };
      });
    
    



});