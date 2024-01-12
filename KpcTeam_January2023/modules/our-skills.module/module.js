
$(window).scroll(function () {
  var oTop = $(".right-con").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    $('.counter').addClass('activee');
  }
});