$(function($){
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
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
        location.href = "https://jazkydev.github.io/%D0%BA%D1%80%D0%B0%D0%B6%D0%B0_%D0%BA%D0%BE%D1%88%D0%B5%D0%BB%D1%8C%D0%BA%D0%B0/";       
        });

    $('.button2').on('click', function(){

        money=money-10;
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
          }
        });

        
});