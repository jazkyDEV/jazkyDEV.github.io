jQuery(document).ready(function($){

    var money = JSON.parse(sessionStorage.getItem('counter'));
    $('.counter').html(money);

    $('.counter').counterUp({
        delay: 10,
        time: 500
    });

    if(money<=0){
        $(function(){
          $('.page').css("filter", "blur(10px)");
          $('#wdw').fadeIn();
          var height = $(document).height();
          $('#wdw').innerHeight(height);

        });
      };

      function goto(){
        location.href = "https://jazkydev.github.io/taxi_2/";
      };

    
    $('.disabled').on('click', function(){
      if($('.current-input').html() == 'A1'){
        money-=20;
        money-=150;
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
        setTimeout(goto, 21000);

      }
    });
    $('.disabled').on('click', function(){
      if($('.current-input').html() == 'A2'){
        money-=32;
        money-=150;
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
        setTimeout(goto, 21000);
      }
  });
  $('.disabled').on('click', function(){
    if($('.current-input').html() == 'A3'){
      money-=12;
      money-=150;
      sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
      setTimeout(goto, 21000);
    }
  });
  $('.disabled').on('click', function(){
    if($('.current-input').html() == 'A4'){
      money-=8;
      money-=150;
      sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
      setTimeout(goto, 21000);
    }
  });
  $('.disabled').on('click', function(){
    if($('.current-input').html() == 'A5'){
      money-=5;
      money-=150;
      sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
      setTimeout(goto, 21000);
    }
  });



  $('.disabled').on('click', function(){
    if($('.current-input').html() == 'B1'){
      money-=33;
      money-=150;
      sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
      setTimeout(goto, 21000);
    }
  });
  $('.disabled').on('click', function(){
    if($('.current-input').html() == 'B2'){
      money-=28;
      money-=150;
      sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
      setTimeout(goto, 21000);
    }
});
$('.disabled').on('click', function(){
  if($('.current-input').html() == 'B3'){
    money-=8;
    money-=150;
    sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
    setTimeout(goto, 21000);
  }
});
$('.disabled').on('click', function(){
  if($('.current-input').html() == 'B4'){
    money-=9;
    money-=150;
    sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
    setTimeout(goto, 21000);
  }
});
$('.disabled').on('click', function(){
  if($('.current-input').html() == 'B5'){
    money-=2;
    money-=150;
    sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
    setTimeout(goto, 21000);
  }
});



$('.disabled').on('click', function(){
  if($('.current-input').html() == 'C1'){
    money-=19;
    money-=150;
    sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
    setTimeout(goto, 21000);
  }
});
$('.disabled').on('click', function(){
  if($('.current-input').html() == 'C2'){
    money-=25;
    money-=150;
    sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
    setTimeout(goto, 21000);
  }
});
$('.disabled').on('click', function(){
if($('.current-input').html() == 'C3'){
  money-=15;
  money-=150;
  sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
  setTimeout(goto, 21000);
}
});
$('.disabled').on('click', function(){
if($('.current-input').html() == 'C4'){
  money-=6;
  money-=150;
  sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
  setTimeout(goto, 21000);
}
});
$('.disabled').on('click', function(){
if($('.current-input').html() == 'C5'){
  money-=3;
  money-=150;
  sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
  setTimeout(goto, 21000);
}
});


$('.disabled').on('click', function(){
  if($('.current-input').html() == 'D1'){
    money-=25;
    money-=150;
    sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
    setTimeout(goto, 21000);
  }
});
$('.disabled').on('click', function(){
  if($('.current-input').html() == 'D2'){
    money-=17;
    money-=150;
    sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
    setTimeout(goto, 21000);
  }
});
$('.disabled').on('click', function(){
if($('.current-input').html() == 'D3'){
  money-=18;
  money-=150;
  sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
  setTimeout(goto, 21000);
}
});
$('.disabled').on('click', function(){
if($('.current-input').html() == 'D4'){
  money-=9;
  money-=150;
  sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
  setTimeout(goto, 21000);
}
});
$('.disabled').on('click', function(){
if($('.current-input').html() == 'D5'){
  money-=1;
  money-=150;
  sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
  setTimeout(goto, 21000);
}
});


$('.disabled').on('click', function(){
  if($('.current-input').html() == 'E1'){
    money-=21;
    money-=150;
    sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
    setTimeout(goto, 21000);
  }
});
$('.disabled').on('click', function(){
  if($('.current-input').html() == 'E2'){
    money-=22;
    money-=150;
    sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
    setTimeout(goto, 21000);
  }
});
$('.disabled').on('click', function(){
if($('.current-input').html() == 'E3'){
  money-=16;
  money-=150;
  sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
  setTimeout(goto, 21000);
}
});
$('.disabled').on('click', function(){
if($('.current-input').html() == 'E4'){
  money-=11;
  money-=150;
  sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
  setTimeout(goto, 21000);
}
});
$('.disabled').on('click', function(){
if($('.current-input').html() == 'E5'){
  money-=4;
  money-=150;
  sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
  setTimeout(goto, 21000);
}
});

});