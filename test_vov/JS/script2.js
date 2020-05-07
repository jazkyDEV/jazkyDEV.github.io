jQuery(document).ready(function($){

    var money = JSON.parse(sessionStorage.getItem('counter'));
    $('.counter').html(money);

    $('.counter').counterUp({
        delay: 10,
        time: 500
    });
});

$('#win').on('click', function(){
    var money = JSON.parse(sessionStorage.getItem('counter'));
    money=money+15;
    sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
})
