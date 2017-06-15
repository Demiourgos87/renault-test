(function($){
  // mobile navigation \\

  // cache DOM \\
  var $headerNavWrap = $('.header__nav--wrap'),
      $headerNav = $('.header__nav'),
      $menuTrigger = $('.menu__trigger i'),
      $subMenuTrigger = $('.sub__menu__trigger'),
      $menuOpenedOverlay = $('.menu__opened__overlay'),
      $mainContent = $('.main__content'),
      $headerSearch = $('.header__search'),
      $searchOverlay = $('.search__overlay'),
      $searchClose = $('.search__close');

  $menuTrigger.on('click', function() {

    $headerNavWrap.toggleClass('inView');
    $headerSearch.fadeToggle(200);
    $menuOpenedOverlay.fadeToggle(200);
    $mainContent.toggleClass('menuOpened');

    if ($menuTrigger.hasClass('fa-bars')) {
      $menuTrigger.removeClass('fa-bars').addClass('fa-times');
    } else {
      $menuTrigger.removeClass('fa-times').addClass('fa-bars');
    }

  });

  $.each($subMenuTrigger, function() {

    var $current = $(this);

    $current.on('click', function() {

      var $sub = $current.next('.sub__menu');
      var $arrow = $current.prev('i.fa');

      $headerNavWrap.css('overflow-y', 'scroll');
      $sub.slideToggle(200);

      if ($arrow.hasClass('fa-chevron-down')) {
        $arrow.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      } else {
        $arrow.removeClass('fa-chevron-up').addClass('fa-chevron-down');
      }

    });

  });

  $headerSearch.on('click', function() {

    $searchOverlay.fadeIn(200);

  });

  $searchClose.on('click', function() {

    $searchOverlay.fadeOut(200);

  });

})(jQuery);