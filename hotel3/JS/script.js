jQuery(document).ready(function($){

    var money = JSON.parse(sessionStorage.getItem('counter').toFixed(1));
    $('.counter').html(money);

    $('.counter').counterUp({
        delay: 10,
        time: 500
    });



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