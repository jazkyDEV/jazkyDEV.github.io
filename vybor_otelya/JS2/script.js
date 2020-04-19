jQuery(document).ready(function($){

    var money = JSON.parse(sessionStorage.getItem('counter'));
    $('.counter').html(money);

    $('.counter').counterUp({
        delay: 10,
        time: 500
    });

    var taxi = JSON.parse(sessionStorage.getItem('taxi'));


    $('#mariott').on('click',function(){

      money = money-47*taxi;
      sessionStorage.setItem('counter', JSON.stringify(money));  



    });

    $('#1orbita').on('click',function(){

        money = money-48*taxi;
        sessionStorage.setItem('counter', JSON.stringify(money));  
  
  
  
      });

      $('#1viva').on('click',function(){

        money = money-40*taxi;
        sessionStorage.setItem('counter', JSON.stringify(money));  
  
  
  
      });


    
    
    


});