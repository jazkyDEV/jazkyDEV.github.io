jQuery(document).ready(function($){
    $('.button1,.button2').hover(function(){
        $('.nesnakomec').toggleClass('none');
    })

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

    $('.button1').on('click', function(){
        location.href = "https://jazkydev.github.io/кража_кошелька/";       
        });

    $('.button2').on('click', function(){

        money-=10;
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));     
        if(money<=0){
            $(function(){
              var height = $(document).height();
              $('#wdw').innerHeight(height);
              $('.page').css("filter", "blur(10px)");
              $('#wdw').fadeIn();
            });
          };
          if(money>0){
              location.href = "https://jazkydev.github.io/Thanks/";
          };
        });

        
});