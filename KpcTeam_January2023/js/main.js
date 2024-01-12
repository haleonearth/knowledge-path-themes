$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -1
        }, 600);
        return false;
      }
    }
  });
});

$('.mobile_nav_menu').click(function(){
  $('.menu-wrapper').slideToggle();
})

$(window).resize(function(){  
  var w = $(window).width();  
  if(w > 980) {  
    $('.menu-wrapper').removeAttr('style');  
  }  
});

$(window).scroll(function(){
  if ($(window).scrollTop()>100){
    $(".back-to-top").fadeIn(500);
  }
  else
  {
    $(".back-to-top").fadeOut(500);
  }
});

//back to top
$(".back-to-top").click(function(){
  $('body,html').animate({scrollTop:0},500);
  return false;
});
