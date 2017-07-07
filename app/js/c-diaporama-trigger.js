(function($){
  // Diaporama trigger \\

  // Cache DOM \\

  var $diaporamaTrigger = $('.c-diaporama-trigger'),
      $slider = $diaporamaTrigger.find('.diaporama-trigger__slider'),
      $slides = $slider.find('.diaporama-trigger__slide'),
      $navigation = $diaporamaTrigger.find('.diaporama-trigger__navigation'),
      $arrowPrev = $navigation.find('.diaporama-trigger__prev i'),
      $arrowNext = $navigation.find('.diaporama-trigger__next i'),
      $openDiaporama = $navigation.find('.diaporama__open'),
      windowWidth = $(window).outerWidth(),
      $diaporama = $('body').find('.c-diaporama'),
      $diaporamaSlider = $diaporama.find('.diaporama--wrap'),
      $diaporamaThumbs = $diaporamaTrigger.find('.diaporama-trigger__thumbs');

  $openDiaporama.on('click', function(e) {
    e.stopPropagation();
    $diaporama.slideDown(200);
    $diaporamaSlider.slick('setPosition');
    $('.c-diaporama .diaporama__thumbs').slick('setPosition');
    $('body, html').addClass('diaporamaOpened');
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
      fade: true,
      speed: 400,
      autoplay: false,
      dots: false,
      pauseOnHover: true,
      arrows: false
    });

  } else {

    $.each($slides, function() {
      var $image = $(this).find('img');
          thumb = document.createElement('div'),
          overlay = document.createElement('div');

      $(overlay).addClass('overlay');
      $(thumb).addClass('diaporama-trigger__thumb');

      $image.clone().appendTo(thumb);
      $(overlay).appendTo(thumb);
      $diaporamaThumbs.append(thumb);
    });

    $('.diaporama-trigger__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      speed: 400,
      autoplay: false,
      dots: false,
      pauseOnHover: true,
      arrows: false,
      draggable: false,
      asNavFor: '.diaporama-trigger__thumbs'
    });

    $('.diaporama-trigger__thumbs').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 400,
      autoplay: false,
      dots: false,
      pauseOnHover: true,
      arrows: false,
      draggable: false,
      centerMode: false,
      focusOnSelect: true,
      asNavFor: '.diaporama-trigger__slider'
    });

  }

})(jQuery);
