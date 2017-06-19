(function($){
  // FAQ Slider \\

  // cache DOM \\
  var $slider = $('.faq__slider .slider'),
      $articles = $slider.find('.article'),
      $navigation = $slider.find('.slider__navigation'),
      $arrowNext = $navigation.find('i.fa-carret-right'),
      $arrowPrev = $navigation.find('i.fa-carret-left'),
      $slidesTotal = $navigation.find('.slide__total'),
      $currentSlide = $navigation.find('.slide__current'),
      totalSlides = $articles.length,
      currentSlide;

  $slidesTotal.text('0' + totalSlides);

  function updateNavigation(current) {

    $currentSlide.text('0' + (current + 1));

  }

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    infinite: true,
    prevArrow: $arrowPrev,
    nextArrow: $arrowNext
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {

    updateNavigation(currentSlide);

  });

})(jQuery);
