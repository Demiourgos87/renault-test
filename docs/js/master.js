(function($){
  // FAQ Slider \\

  // cache DOM \\
  var $sliderWrap = $('.faq__slider'),
      $slider = $sliderWrap.find('.slider'),
      $articles = $slider.find('.article'),
      $navigation = $sliderWrap.find('.slider__navigation'),
      $arrowNext = $navigation.find('.fa-caret-right'),
      $arrowPrev = $navigation.find('.fa-caret-left'),
      $slidesTotal = $navigation.find('.slide__total'),
      $currentSlide = $navigation.find('.slide__current'),
      totalSlides = $articles.length,
      windowWidth = $(window).width();

  $slidesTotal.text('0' + totalSlides);

  if (windowWidth > 767) {

    $.each($articles, function() {

      $(this).removeClass('article--portrait').addClass('article--landscape');

    });

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

  // navigation \\

  // cache DOM \\
  var $headerNavWrap = $('.header__nav--wrap'),
      $headerNav = $('.header__nav'),
      $menuTrigger = $('.menu__trigger i'),
      $subMenuTrigger = $('.sub__menu__trigger'),
      $menuOpenedOverlay = $('.menu__opened__overlay'),
      $mainContent = $('.page'),
      $headerSearch = $('.header__search'),
      $searchOverlay = $('.search__overlay'),
      $searchClose = $('.search__close'),
      windowWidth = $(window).width();


  // mobile main menu \\

  if (windowWidth < 1024) {

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

  }

  // search overlay \\

  $headerSearch.on('click', function() {

    $searchOverlay.fadeIn(200);

  });

  $searchClose.on('click', function() {

    $searchOverlay.fadeOut(200);

  });

  // desktop main menu \\

  if (windowWidth > 1023) {

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
