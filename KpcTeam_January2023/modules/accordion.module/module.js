$(document).ready(function(){

  $('.itemWrapper .accordionItem:first-of-type').addClass('open');
  $('.itemWrapper .accordionItem:first-of-type').find('.accordionItemContent').slideDown(300);

  $('.accordionItem').click(function(e){
    
    $(this).siblings('.accordionItem').find('.accordionItemContent').slideUp(350);
    $(this).siblings('.accordionItem').removeClass('open');
    $(this).find('.accordionItemContent').slideToggle(350);
    $(this).toggleClass('open');
    e.preventDefault();
  });
});

