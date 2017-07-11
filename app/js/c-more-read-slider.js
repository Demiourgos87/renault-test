(function($){
  // More Read Slider \\

  // cache DOM \\
  var $slider = $('.c-more-read .slider'),
      $wrap = $slider.closest('.slider__wrap'),
      $arrowNext = $wrap.find('.fa-arrow-circle-o-right'),
      $arrowPrev = $wrap.find('.fa-arrow-circle-o-left'),
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

  }

})(jQuery);
