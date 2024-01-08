$(document).ready(function(){
    $(window).scroll(function(){
          $val = $(window).scrollTop();
          if($val > 10){
                $('.container .nav').addClass('active');
          }else{
             $('.container .nav').removeClass('active');  
          }
    })

    $('.container .nav').click(function(){
      $('.container .nav ul.menu').toggleClass('display');
    })
})
   
