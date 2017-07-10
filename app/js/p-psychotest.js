(function($){
  // Psychotest

  // Cache DOM
  var $pageWrap = $('.p-psychotest'),
      windowWidth = $(window).outerWidth(),
      windowHeight = $(window).outerHeight();

  $pageWrap.height(windowHeight - 62);

  console.log(windowHeight);


})(jQuery);
