(function($){

  // Q&A list layout \\

  var $wrap = $('.QA-list'),
      $mainContainer = $wrap.find('.container.main-QA'),
      $articlesToChange = $mainContainer.find('.article:nth-of-type(4n+0)'),
      windowWidth = $(window).outerWidth();

  if (windowWidth > 767) {

    for (var i = 0; i < $articlesToChange.length; i++) {

      if (i % 2 === 0) {

        $($articlesToChange[i]).removeClass('article--portrait article--m').addClass('article--landscape article--l');

      } else {

        $($articlesToChange[i]).removeClass('article--portrait article--m').addClass('article--landscape article--l float--right');

      }

    }

  }

})(jQuery);
