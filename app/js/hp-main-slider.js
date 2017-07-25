function onYouTubeIframeAPIReady() {

  // Cache DOM
  var $sliderWrap = $('.hp-main-slider'),
      $slider = $sliderWrap.find('.hp-main-slider--wrap'),
      $allSlides = $slider.find('.hp-main-slider__slide:not(.slick-cloned)'),
      $navigation = $sliderWrap.find('.hp-main-slider__navigation')
      $arrowPrev = $navigation.find('.hp-main-slider__navigation__left'),
      $arrowNext = $navigation.find('.hp-main-slider__navigation__right'),
      $sliderCounter = $sliderWrap.find('.hp-main-slider__counter'),
      $sliderCurrent = $sliderCounter.find('.slider__current'),
      $sliderTotal = $sliderCounter.find('.slider__total'),
      windowWidth = $(window).outerWidth();

  var playersCreated = (function() {

    var created = [];

    function createYTPlayer(id) {

      return new YT.Player(id, {
        events: {
          'onStateChange': onPlayerStateChange
        }
      });

    }

    function createVimeoPlayer(iframe) {

      return new Vimeo.Player(iframe);

    }

    for (var i = 0; i < $allSlides.length; i++) {

      var $current = $($allSlides[i]);

      if ($current.hasClass('video')) {

        var currentIframeID = $current.find('iframe').attr('id');

        if (/(youtube)/.test(currentIframeID)) {

          player = createYTPlayer(currentIframeID);
          created.push(player);

        } else if (/(vimeo)/.test(currentIframeID)) {

          player = createVimeoPlayer($current);
          created.push(player);

        }

      } else created.push($current.get(0));

    }

    return created;

  })();

  function onPlayerStateChange(event) {

    if (event.data == YT.PlayerState.ENDED) {

      event.target.pauseVideo();
      event.target.seekTo(0, true);
      $slider.slick('slickNext');

    }

  }

  function setSlidesDimensions(slide) {

    var slideWidth = slide.width();
    var aspectRatio = 16 / 9;
    var slideHeight = slideWidth / aspectRatio;

    slide.css({width: slideWidth, height: slideHeight});

  }

  function updateNavigationCounter(currentIndex) {

    $sliderCurrent.text('0' + (currentIndex + 1));

  }

  $sliderTotal.text('0' + $allSlides.length);

  function checkSlideType(index) {

    var slide = playersCreated[index];

    if (slide.hasOwnProperty('element')) return 'vimeo';
    else if (slide.hasOwnProperty('a')) return 'youtube';
    else return 'image';

  }

  function onVimeoEnded(player) {

    player.on('ended', function(data) {
      player.pause();
      player.setCurrentTime(0);
      $slider.slick('slickNext');
    });

  }

  $.each($allSlides, function(){

    setSlidesDimensions($(this));

  });

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    dots: false,
    arrows: false,
    swipe: true
  });

  $slider.slick('slickPause');

  $arrowPrev.on('click', function() {
    $slider.slick('slickPrev');
  });

  $arrowNext.on('click', function() {
    $slider.slick('slickNext');
  });

  // function simulateClick(element) {
  //   element.trigger('click');
  // }
  //
  // if (windowWidth < 1025) {
  //
  //   $slider.on('afterChange', function(event, slick, currentSlide) {
  //
  //     var $currentSlide = $($allSlides[currentSlide]),
  //         $videoOverlay = $currentSlide.find('.video__overlay'),
  //         $iframe = $currentSlide.find('iframe'),
  //         currentPlayer = playersCreated[currentSlide];
  //
  //     $slider.slick('slickPause');
  //
  //     $videoOverlay.on('click', function() {
  //       currentPlayer.playVideo();
  //     });
  //
  //     $iframe.on('click', function() {
  //       currentPlayer.playVideo();
  //     });
  //
  //     simulateClick($videoOverlay);
  //     simulateClick($iframe);
  //
  //   });
  //
  // } else {

  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {

    updateNavigationCounter(nextSlide);

    var currentSlideType = checkSlideType(currentSlide),
        nextSlideType = checkSlideType(nextSlide),
        currentPlayer = playersCreated[currentSlide],
        nextPlayer = playersCreated[nextSlide];

      if (windowWidth < 1025) {

        var $currentSlide = $($allSlides[nextSlide]),
            $videoOverlay = $currentSlide.find('.video__overlay');

        $videoOverlay.on('click', function() {

          if (nextSlideType == 'youtube') nextPlayer.playVideo();
          else nextPlayer.play();

          $(this).find('span').fadeOut(200);

        });

      }

    if (currentSlideType == 'image') {

      if (nextSlideType == 'youtube') {

        $slider.slick('slickPause');
        nextPlayer.playVideo();

      } else if (nextSlideType == 'vimeo') {

        $slider.slick('slickPause');
        nextPlayer.play();
        onVimeoEnded(nextPlayer);

      } else $slider.slick('slickPlay');

    } else if (currentSlideType == 'youtube') {

      $slider.slick('slickPause');
      currentPlayer.pauseVideo();
      currentPlayer.seekTo(0, true);

      if (nextSlideType == 'youtube') nextPlayer.playVideo();
      else if (nextSlideType == 'vimeo') {

        nextPlayer.play();
        onVimeoEnded(nextPlayer);

      }
      else $slider.slick('slickPlay');

    } else if (currentSlideType == 'vimeo') {

      $slider.slick('slickPause');
      currentPlayer.pause();
      currentPlayer.setCurrentTime(0);
      onVimeoEnded(currentPlayer);

      if (nextSlideType == 'vimeo') {

        nextPlayer.play();
        onVimeoEnded(nextPlayer);

      } else if (nextSlideType == 'youtube') { nextPlayer.playVideo(); }
      else $slider.slick('slickPlay');

    }

  });

  // }

}
