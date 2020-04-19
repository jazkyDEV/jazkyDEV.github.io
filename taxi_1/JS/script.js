$(function(){

    var money=1000;
    $('.counter').html(money);

    $('.counter').counterUp({
        delay: 10,
        time: 500
    });


    $('.counter__item').on('click', function(){
        $('.counter').counterUp({
            delay: 10,
            time: 500
        });
    });


    var taxi;

    $('#yandex1').on('click', function(){

        taxi=0.2;
sessionStorage.setItem('taxi', JSON.stringify(taxi));
    

    });


    $('#almaz1').on('click', function(){

        taxi=0.4;
        sessionStorage.setItem('taxi', JSON.stringify(taxi));
    

    });


    $('#bavaria1').on('click', function(){

        taxi=0.5;
        sessionStorage.setItem('taxi', JSON.stringify(taxi));
        
    });
    
    


});