(function($){

  // Q&A Layout change on tab/desk \\

  // Cache DOM \\
  var $wrap = $('.block-QA-list'),
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

(function($){

  // navigation \\

  // cache DOM \\
  var $headerNavWrap = $('.master-header__nav--wrap'),
      $headerNav = $('.master-header__nav'),
      $menuTrigger = $('.master-header__menu-trigger i'),
      $subMenuTrigger = $('.sub__menu__trigger'),
      $menuOpenedOverlay = $('.menu__opened__overlay'),
      $mainContent = $('.page'),
      $headerSearch = $('.master-header__search'),
      $searchOverlay = $('.search__overlay'),
      $searchClose = $('.search__close'),
      windowWidth = $(window).outerWidth();


  // mobile main menu \\

  if (windowWidth < 1025) {

    $menuTrigger.on('click', function() {

      $headerNavWrap.toggleClass('inView');
      $headerSearch.fadeToggle(200);
      $menuOpenedOverlay.fadeToggle(200);
      $mainContent.toggleClass('menuOpened');
      $('body, html').toggleClass('menuOpened');

      if ($menuTrigger.hasClass('fa-bars')) {
        $menuTrigger.removeClass('fa-bars').addClass('fa-times');
      } else {
        $menuTrigger.removeClass('fa-times').addClass('fa-bars');
      }

    });

    $.each($subMenuTrigger, function() {

      var $current = $(this);

      $current.on('click', function(e) {

        e.preventDefault();

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

  }

  // search overlay \\

  $headerSearch.on('click', function() {

    $searchOverlay.fadeIn(200);

  });

  $searchClose.on('click', function() {

    $searchOverlay.fadeOut(200);

  });

  // desktop main menu \\

  if (windowWidth > 1024) {

    $.each($subMenuTrigger, function() {

      var $current = $(this);
      var $li = $(this).closest('li');
      var $sub = $li.find('.sub__menu');

      $li.on('mouseenter', function() {

        $current.addClass('active');
        $sub.fadeIn(200);

      });

      $sub.on('mouseleave', function() {

        $sub.fadeOut(200);
        $current.removeClass('active');

      });

    });

  }

})(jQuery);

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

(function($){

  // ARTICLE FAQ ACCORDION \\

  // Cache DOM \\

  var $accordionWrap = $('.accordion-wrap'),
      $accordion = $accordionWrap.find('.module-faq-accordion'),
      $accordionElements = $accordion.find('.accordion__element');

  function closeOpenedElement() {

      var $opened = $accordion.find('.accordion__element.opened'),
          $openedText = $opened.find('.accordion__element__text'),
          $openedArrow = $opened.find('.accordion-heading__arrow i');

      $opened.removeClass('opened');
      $openedText.slideUp(200);
      $openedArrow.removeClass('fa-caret-up').addClass('fa-caret-down');

  }

  $.each($accordionElements, function() {

    var $current = $(this);
        $heading = $current.find('.accordion__element__heading');

    $heading.on('click', function() {

      var $arrow = $(this).find('.accordion-heading__arrow i'),
          $accordionText = $(this).next('.accordion__element__text');

      if ($current.hasClass('opened')) {

        $current.removeClass('opened');
        $accordionText.slideUp(200);
        $arrow.removeClass('fa-caret-up').addClass('fa-caret-down');

      } else {

        closeOpenedElement();
        $current.addClass('opened');
        $accordionText.slideDown(200);
        $arrow.removeClass('fa-caret-down').addClass('fa-caret-up');

      }

    });

  });

})(jQuery);

(function($){
  // FAQ Slider \\
  // Also used for the slider on Q&A page \\

  // cache DOM \\
  var $sliderWrap = $('.faq__slider'),
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

(function($){
  // More Read Slider \\

  // cache DOM \\
  var $slider = $('.module-more-read .slider'),
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

(function($){
  // Portrait Slider \\

  // cache DOM \\
  var $sliderWrap = $('.portrait__slider'),
      $slider = $sliderWrap.find('.slider'),
      $slides = $slider.find('.portrait__slide'),
      $navigation = $sliderWrap.find('.slider__navigation'),
      $arrowNext = $navigation.find('.fa-caret-right'),
      $arrowPrev = $navigation.find('.fa-caret-left'),
      $slidesTotal = $navigation.find('.slide__total'),
      $currentSlide = $navigation.find('.slide__current'),
      totalSlides = $slides.length;

  $slidesTotal.text('0' + totalSlides);

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
