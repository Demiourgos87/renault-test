(function($){
  // Diaporama \\

  // Cache DOM \\

  var $diaporama = $('.c-diaporama'),
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

  if (windowWidth < 1025) {

    $diaporamaWrap.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 400,
      autoplay: false,
      dots: false,
      pauseOnHover: true,
      arrows: false
    });

  }

  // Desktop version \\

  if (windowWidth >= 1025) {

    $.each($diaporamaSlides, function() {
      $(this).width(windowWidth);
    });

    // $.each($diaporamaImages, function() {
    //   var $image = $(this).find('img'),
    //       wrap = document.createElement('div'),
    //       shadow = document.createElement('div');
    //
    //   $(shadow).addClass('shadow');
    //   $(wrap).addClass('diaporama__thumb');
    //
    //   $image.clone().appendTo(wrap);
    //   $(shadow).appendTo(wrap);
    //   $diaporamaThumbs.append(wrap);
    // });

    $diaporamaWrap.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      speed: 400,
      autoplay: false,
      draggable: false,
      dots: true,
      pauseOnHover: true,
      customPaging: function(slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<img src="' + thumb + '"><div class="shadow"></div>';
      },
      arrows: false
    });

  }

})(jQuery);
