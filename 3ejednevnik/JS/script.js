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

    $('#eje1').on('click', function(){

        money=money-10;
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
        location.href = 'https://jazkydev.github.io/activePassive';

        
        });
    
    $('#eje2').on('click', function(){
    
            money=money-8;
            sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
            location.href = 'https://jazkydev.github.io/activePassive';

            
    });
    
    $('#eje3').on('click', function(){
    
                money=money-18;
                sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
                location.href = 'https://jazkydev.github.io/activePassive';

                
    });
    
    
    


});