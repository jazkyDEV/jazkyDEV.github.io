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
    
    
    $('.btn-lose').on('click', function(){
        money=money-25;
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
        });
    
    $('.btn-win').on('click', function(){
            sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
    });



});