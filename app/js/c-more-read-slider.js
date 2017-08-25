(function($){
  // More Read Slider \\

  // cache DOM \\
  var $slider = $('.c-more-read .slider'),
      $wrap = $slider.closest('.slider__wrap'),
      $arrowNext = $wrap.find('.arrow-right'),
      $arrowPrev = $wrap.find('.arrow-left'),
      windowWidth = $(window).outerWidth();

  if (windowWidth > 767) {

    $slider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 400,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      dots: false,
      infinite: true,
      arrows: true,
      prevArrow: $arrowPrev,
      nextArrow: $arrowNext
    });

    $slider.slick('slickPause');
    checkIfInView($slider);

  }

})(jQuery);
