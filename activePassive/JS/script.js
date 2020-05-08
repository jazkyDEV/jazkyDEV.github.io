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

      $('#kotok').on('click', function(){

        money=money-3;
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
        });


        $('#lot').on('click', function(){

          money=money-87;
          sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
          });

        $('#leb').on('click', function(){

            money=money-21;
            sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
            });


        $('#spaPlanet').on('click', function(){

              money=money-27;
              sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
              });


        $('#roup').on('click', function(){

              money=money-6;
              sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
              });
    


});