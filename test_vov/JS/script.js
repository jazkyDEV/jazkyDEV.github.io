$(function($){

    var money = JSON.parse(sessionStorage.getItem('counter'));
    $('.counter').html(money);

    $('.counter').counterUp({
        delay: 10,
        time: 500
    });


    $('.win').on('click', function(){
        money -= (-15);
        sessionStorage.setItem('counter', JSON.stringify(money.toFixed(1)));
    });


    $('#btn').on('click',  function(){          
        var q1=document.myform.q1.value;
        var q2=document.myform.q2.value;
        var q3=document.myform.q3.value;
        var q4=document.myform.q4.value;
        var q5=document.myform.q5.value;
        var q6=document.myform.q6.value;
        var q7=document.myform.q7.value;
        var q8=document.myform.q8.value;
        var q9=document.myform.q9.value;
        var q10=document.myform.q10.value;
        var q11=document.myform.q11.value;
        
        var count=0;
        
        if(q1=="true"){
            count=count+1;
        }
        if(q2=="true"){
            count=count+1;
        }
        if(q3=="true"){
            count=count+1;
        }
        if(q4=="true"){
            count=count+1;
        }
        if(q5=="true"){
            count=count+1;
        }
        if(q6=="true"){
            count=count+1;
        }
        if(q7=="true"){
            count=count+1;
        }
        if(q8=="true"){
            count=count+1;
        }
        if(q9=="true"){
            count=count+1;
        }
        if(q10=="true"){
            count=count+1;
        }
        if(q11=="true"){
            count=count+1;
        }
        
        if(count==11)
        {

            var btn=document.getElementById("btn");
            var page=document.getElementById("page");
            var result=document.getElementById("result_Yes");
            if(result.style.display==="block")
            {
                result.style.display="none";
                page.style.filter="blur()";
            }
            else 
            {
                result.style.display="block";
                page.style.filter="blur(10px)";
            }
        }
        else{
            var btn=document.getElementById("btn");
            var page=document.getElementById("page");
            var result=document.getElementById("result_No");
            if(result.style.display==="block")
            {
                result.style.display="none";
                page.style.filter="blur()";
            }
            else 
            {
                result.style.display="block";
                page.style.filter="blur(10px)";
            }
        }
    });

});
