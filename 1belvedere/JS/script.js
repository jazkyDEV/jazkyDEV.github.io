jQuery(document).ready(function($){

    var money = JSON.parse(sessionStorage.getItem('counter'));
    $('.counter').html(money);

    $('.counter').counterUp({
        delay: 10,
        time: 500
    });


    $('#belvedere1').on('click', function(){

        money=money-8;
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
        location.href = 'https://jazkydev.github.io/activePassive';

        
        });
    
    $('#belvedere2').on('click', function(){
    
            money=money-6;
            sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
            location.href = 'https://jazkydev.github.io/activePassive';

            
    });
    
    $('#belvedere3').on('click', function(){
    
                money=money-4;
                sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
                location.href = 'https://jazkydev.github.io/activePassive';

                
    });
    
    


});