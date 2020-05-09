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


    $('#viva10').on('click', function(){

    money=money-6;
    sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
    
    });

    $('#viva5').on('click', function(){

        money=money-10;
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
        
    });

    $('#viva4').on('click', function(){

            money=money-12;
            sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
            
     });


    
    
    


});