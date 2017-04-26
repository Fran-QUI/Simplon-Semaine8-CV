$(document).ready(function(){

  $('.monportfolio').hover(
                      function () {
                          $(this).find('.vignette').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                          $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');
                      },
                      function () {
                          $(this).find('.vignette').stop().animate({bottom: -40}, 200, 'easeInQuad');
                          $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');

});
