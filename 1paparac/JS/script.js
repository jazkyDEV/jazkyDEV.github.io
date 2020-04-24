jQuery(document).ready(function($){

    var money = JSON.parse(sessionStorage.getItem('counter'));
    $('.counter').html(money);

    $('.counter').counterUp({
        delay: 10,
        time: 500
    });


    
    
    $('#paparac1').on('click', function(){

        money=money-17;
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
        location.href = 'https://jazkydev.github.io/activePassive';

        
        });
    
    $('#paparac2').on('click', function(){
    
            money=money-20;
            sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
            location.href = 'https://jazkydev.github.io/activePassive';

            
    });
    
    $('#paparac3').on('click', function(){
    
                money=money-18;
                sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
                location.href = 'https://jazkydev.github.io/activePassive';

                
    });


});