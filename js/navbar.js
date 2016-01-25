$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#top-carousel');
   var offset = startchange.offset();

   checkSize();
   $(window).resize(checkSize);


    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar-nav').css('background-color', '#000000');

       } else {
          $('.navbar-nav').css('background-color', 'transparent');
       }
   });
    }
});

function checkSize(){
    if($('.right').css('text-align') == 'right')
    {
        $('#left').addClass('navbar-fixed-top');
    }
}