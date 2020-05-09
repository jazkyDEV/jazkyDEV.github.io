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
      
    $('#classic').on('click', function(){

        money=money-195;
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
        
        });
    
        $('#lux').on('click', function(){
    
            money=money-370;
            sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
            
        });
    
        $('#roskoshno').on('click', function(){
    
                money=money-520;
                sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
                
         });

    
    
    


});