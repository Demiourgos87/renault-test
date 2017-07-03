(function($){
  // Diaporama \\

  // Cache DOM \\

  var $diaporama = $('.module-diaporama'),
      $diaporamaWrap = $diaporama.find('.diaporama--wrap'),
      $diaporamaClose = $diaporama.find('.diaporama__close'),
      $diaporamaSlides = $diaporamaWrap.find('.diaporama__slide'),
      $diaporamaPrev = $diaporamaWrap.find('.diaporama__prev'),
      $diaporamaNext = $diaporamaWrap.find('.diaporama__next'),
      $diaporamaCounter = $diaporamaWrap.find('.diaporama__counter'),
      $diaporamaCurrent = $diaporamaCounter.find('.diaporama__current'),
      $diaporamaTotal = $diaporamaCounter.find('.diaporama__total'),
      windowWidth = $(window).outerWidth();

  $.each($diaporamaTotal, function() {
    $(this).text($diaporamaSlides.length);
  });

  $.each($diaporamaCurrent, function() {
    var currentIndex = $(this).closest('.diaporama__slide').index();
    $(this).text(currentIndex + 1);
  });

  $diaporamaClose.on('click', function() {
    $diaporama.slideUp(200);
  });

  if (windowWidth < 1025) {

    $diaporamaWrap.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 400,
      autoplay: false,
      dots: false,
      prevArrow: $diaporamaPrev,
      nextArrow: $diaporamaNext,
      infinite: true
    });

  }

})(jQuery);
