(function($){
  // FAQ Slider \\
  // Also used for the Renault Vu Q&A slider on communication page \\

  // cache DOM \\
  var $sliderWrap = $('.c-faq-slider'),
      $slider = $sliderWrap.find('.slider'),
      $articles = $slider.find('.teaser'),
      $navigation = $sliderWrap.find('.slider__navigation'),
      $arrowNext = $navigation.find('.fa-caret-right'),
      $arrowPrev = $navigation.find('.fa-caret-left'),
      $slidesTotal = $navigation.find('.slide__total'),
      $currentSlide = $navigation.find('.slide__current'),
      totalSlides = $articles.length,
      windowWidth = $(window).outerWidth();

  $slidesTotal.text('0' + totalSlides);

  if (!$sliderWrap.hasClass('vu--slider')) {

    if (windowWidth > 767) {

      $.each($articles, function() {

        $(this).removeClass('teaser--portrait').addClass('teaser--landscape');

      });

    }

  }

  function updateNavigationCounter(currentIndex) {

    $currentSlide.text('0' + (currentIndex + 1));

  }

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    dots: false,
    infinite: true,
    prevArrow: $arrowPrev,
    nextArrow: $arrowNext
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {

    updateNavigationCounter(currentSlide);

  });

})(jQuery);
