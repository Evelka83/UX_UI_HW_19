$(document).ready
(function(e){
  $('.button'). on('mouseenter',function(e){
    x=e.pageX - $(this).offset().left;
    y=e.pageY - $(this).offset().top;
    $(this).find('span').css({top:y,left:x},)
  })
  $('.button'). on('mouseout',function(e){
    x=e.pageX - $(this).offset().left;
    y=e.pageY - $(this).offset().top;
    $(this).find('span').css({top:y,left:x})
  })
})
