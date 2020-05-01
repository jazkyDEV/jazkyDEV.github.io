$(function(){


  $('#btn').on('click', function(){
    $('#instruction').fadeIn();
    $('#page').addClass('blur');

  });


  $('#cross').on('click', function(){
    $('#instruction').fadeOut();
    $('#page').removeClass('blur');
  });

});

