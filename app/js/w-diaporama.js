(function($){
  // Diaporama \\

  // Cache DOM \\

  var $diaporama = $('.w-diaporama'),
      $diaporamaWrap = $diaporama.find('.diaporama--wrap'),
      $diaporamaClose = $diaporama.find('.diaporama__close'),
      $diaporamaSlides = $diaporamaWrap.find('.diaporama__slide'),
      $diaporamaImages = $diaporamaWrap.find('.diaporama__image'),
      $diaporamaThumbs = $diaporama.find('.diaporama__thumbs'),
      $diaporamaPrev = $diaporama.find('.diaporama__prev'),
      $diaporamaNext = $diaporama.find('.diaporama__next'),
      $diaporamaCounter = $diaporamaWrap.find('.diaporama__counter'),
      $diaporamaCurrent = $diaporamaCounter.find('.diaporama__current'),
      $diaporamaTotal = $diaporamaCounter.find('.diaporama__total'),
      windowWidth = $(window).outerWidth(),
      windowHeight = $(window).outerHeight();

  $.each($diaporamaTotal, function() {
    $(this).text($diaporamaSlides.length);
  });

  $.each($diaporamaCurrent, function() {
    var currentIndex = $(this).closest('.diaporama__slide').index();
    $(this).text(currentIndex + 1);
  });

  $diaporamaClose.on('click', function(e) {
    e.stopPropagation();
    $('body, html').removeClass('diaporamaOpened');
    $diaporama.slideUp(200);
  });

  $diaporamaPrev.on('click', function(e) {
    e.stopPropagation();
    $diaporamaWrap.slick('slickPrev');
    $diaporamaWrap.slick('slickPause');
  });

  $diaporamaNext.on('click', function(e) {
    e.stopPropagation();
    $diaporamaWrap.slick('slickNext');
    $diaporamaWrap.slick('slickPause');
  });

  // Mobile + Tablet version \\

  if (windowWidth < 1024) {

    $diaporamaWrap.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 400,
      autoplay: false,
      dots: false,
      fade: true,
      pauseOnHover: true,
      arrows: false
    });

  }

  // Desktop version \\

  if (windowWidth >= 1024) {

    $.each($diaporamaSlides, function() {
      $(this).width(windowWidth);
    });

    // $.each($diaporamaSlides, function() {
    //   var $image = $(this).find('.diaporama__image img');
    //       thumb = document.createElement('div'),
    //       overlay = document.createElement('div');
    //
    //   $(overlay).addClass('overlay');
    //   $(thumb).addClass('diaporama__thumb');
    //
    //   $image.clone().appendTo(thumb);
    //   $(overlay).appendTo(thumb);
    //   $diaporamaThumbs.append(thumb);
    // });

    $('.w-diaporama .diaporama--wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      speed: 400,
      autoplay: false,
      draggable: false,
      dots: false,
      pauseOnHover: true,
      // customPaging: function(slider, i) {
      //   var thumb = $(slider.$slides[i]).data('thumb');
      //   return '<img src="' + thumb + '"><div class="shadow"></div>';
      // },
      arrows: false,
      asNavFor: '.w-diaporama .diaporama__thumbs'
    });

    $('.w-diaporama .diaporama__thumbs').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      speed: 400,
      arrows: false,
      dots: false,
      pauseOnHover: true,
      centerMode: false,
      focusOnSelect: true,
      asNavFor: '.w-diaporama .diaporama--wrap'
    });

  }

})(jQuery);
