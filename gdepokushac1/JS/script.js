jQuery(document).ready(function($){

    var money = JSON.parse(sessionStorage.getItem('counter')).toFixed(1);
    $('.counter').html(money);

    $('.counter').counterUp({
        delay: 10,
        time: 500
    });

    
    
    
    


});