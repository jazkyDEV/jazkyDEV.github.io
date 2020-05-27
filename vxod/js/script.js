jQuery(document).ready(function($){

    var money = JSON.parse(sessionStorage.getItem('counter'));
    $('.counter').html(money);

    $('.counter').counterUp({
        delay: 10,
        time: 500
    });


/*     if(money<=0){
        $(function(){
          var height = $(document).height();
          $('#wdw').innerHeight(height);
          $('.page').css("filter", "blur(10px)");
          $('#wdw').fadeIn();
        });
      }; */
      

var user_agent = navigator.userAgent.toLowerCase();
if (user_agent.match(/(iphone|ipod|ipad)/)) {
    $('.card').addClass('flip');
    $('.back__m').fadeOut(1);
    $('.front__m').fadeIn(1);
};

    let zis = $('.back').innerHeight()-$('.head').innerHeight();
    zis-=50;
    $('.kontr').innerHeight(zis);

    $( window ).resize(function() {
      let zis = $('.back').innerHeight()-$('.head').innerHeight();
      zis-=50;
      $('.kontr').innerHeight(zis);
    });


    $('.button-4').on('click', function(){

        money=money-4;
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
    });
});