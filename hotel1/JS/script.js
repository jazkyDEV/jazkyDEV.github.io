jQuery(document).ready(function($){

    var money = JSON.parse(sessionStorage.getItem('counter')).toFixed(1);
    $('.counter').html(money);

    $('.counter').counterUp({
        delay: 10,
        time: 500
    });


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