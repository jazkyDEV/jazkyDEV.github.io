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

    var taxi = JSON.parse(sessionStorage.getItem('taxi'));


    $('#mariott').on('click',function(){

      money = money-47*taxi;
      sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));  
      sessionStorage.setItem('hotel', 47);


    });

    $('#1orbita').on('click',function(){

        money = money-48*taxi;
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1))); 
        sessionStorage.setItem('hotel', 48);
  
  
      });

      $('#1viva').on('click',function(){

        money = money-40*taxi;
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));   
        sessionStorage.setItem('hotel', 40);
  
  
      });


    
    
    


});