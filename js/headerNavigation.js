(function($){
  // mobile navigation \\

  // cache DOM \\
  var $headerNavWrap = $('.header__nav--wrap'),
      $headerNav = $('.header__nav'),
      $menuTrigger = $('.menu__trigger i'),
      $subMenuTrigger = $('.sub__menu__trigger'),
      $menuOpenedOverlay = $('.menu__opened__overlay'),
      $mainContent = $('.main__content'),
      windowHeight = $(window).outerHeight(),
      headerHeight = $('header').outerHeight();

  console.log(windowHeight);
  console.log(headerHeight);

  $headerNavWrap.height(windowHeight - headerHeight);

  $menuTrigger.on('click', function() {

    $headerNavWrap.toggleClass('inView');
    $menuOpenedOverlay.fadeToggle(400);
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
      $sub.slideToggle(400);

      if ($arrow.hasClass('fa-chevron-down')) {
        $arrow.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      } else {
        $arrow.removeClass('fa-chevron-up').addClass('fa-chevron-down');
      }

    });

  });

})(jQuery);
