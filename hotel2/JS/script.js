jQuery(document).ready(function($){

    var money = JSON.parse(sessionStorage.getItem('counter'));
    $('.counter').html(money);

    $('.counter').counterUp({
        delay: 10,
        time: 500
    });

    if(money<=0){
        $(function(){
          $('#wdw').fadeIn();
        });
      };


    $('#econom').on('click', function(){

        money=money-60;
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
        
        });
    
    $('#comfort').on('click', function(){
    
            money=money-89;
            sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
            
    });
    
    $('#lux2k').on('click', function(){
    
                money=money-159;
                sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
            
    });
    
    
    


});