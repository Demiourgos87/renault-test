(function($){

  // Q&A Layout change on tab/desk \\

  // Cache DOM \\
  var $wrap = $('.block-comm-QA-list'),
      $mainContainer = $wrap.find('.container.main-QA'),
      $articlesToChange = $mainContainer.find('.teaser:nth-of-type(4n+0)'),
      windowWidth = $(window).outerWidth();

  if (windowWidth > 767) {

    for (var i = 0; i < $articlesToChange.length; i++) {

      if (i % 2 === 0) {

        $($articlesToChange[i]).removeClass('teaser--portrait teaser--m').addClass('teaser--landscape teaser--l');

      } else {

        $($articlesToChange[i]).removeClass('teaser--portrait teaser--m').addClass('teaser--landscape teaser--l float--right');

      }

    }

  }

})(jQuery);
