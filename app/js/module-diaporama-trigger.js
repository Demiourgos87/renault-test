(function($){
  // Diaporama trigger \\

  // Cache DOM \\

  var $diaporamaTrigger = $('.module-diaporama-trigger'),
      $slider = $diaporamaTrigger.find('.diaporama-trigger__slider'),
      $slides = $slider.find('.diaporama-trigger__slide'),
      $navigation = $diaporamaTrigger.find('.diaporama-trigger__navigation'),
      $arrowPrev = $navigation.find('.diaporama-trigger__prev i'),
      $arrowNext = $navigation.find('.diaporama-trigger__next i'),
      $openDiaporama = $navigation.find('.diaporama__open'),
      windowWidth = $(window).outerWidth(),
      $diaporama = $('body').find('.module-diaporama'),
      $diaporamaSlider = $diaporama.find('.diaporama--wrap');

  $openDiaporama.on('click', function(e) {
    e.stopPropagation();
    $diaporama.slideDown(200);
    $diaporamaSlider.slick('setPosition');
    $('body, html').css('overflow', 'hidden');
  });

  $arrowPrev.on('click', function(e) {
    e.stopPropagation();
    $slider.slick('slickPrev');
    $slider.slick('slickPause');
  });

  $arrowNext.on('click', function(e) {
    e.stopPropagation();
    $slider.slick('slickNext');
    $slider.slick('slickPause');
  });

  if (windowWidth < 1025) {

    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 400,
      autoplay: false,
      dots: false,
      pauseOnHover: true,
      arrows: false
    });

  }

})(jQuery);
