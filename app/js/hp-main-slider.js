function onYouTubeIframeAPIReady() {

  var $sliderWrap = $('.hp-main-slider'),
      $slider = $sliderWrap.find('.hp-main-slider--wrap'),
      $allSlides = $slider.find('.hp-main-slider__slide:not(.slick-cloned)'),
      player;

  var playersCreated = (function() {

    var created = [];

    function createYTPlayer(id) {

      return new YT.Player(id, {
        events: {
          'onReady': onPlayerReady,
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

  function onPlayerReady(event) {
    // allPlayers[0].playVideo();
  }

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

  function checkSlideType(index) {

    var slide = playersCreated[index];

    if (slide.hasOwnProperty('element')) return 'vimeo';
    else if (slide.hasOwnProperty('a')) return 'youtube';
    else return 'image';

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

  $slider.on('afterChange', function(event, slick, currentSlide) {

    // if (checkSlideType(currentSlide) == 'image') {
    //
    //   $slider.slick('slickPlay');
    //
    //   if (checkSlideType(nextSlide) == 'youtube') {
    //
    //     $slider.slick('slickPause');
    //     playersCreated[nextSlide].playVideo();
    //
    //   } else if (checkSlideType(nextSlide) == 'vimeo') {
    //
    //     $slider.slick('slickPause');
    //     playersCreated[nextSlide].play();
    //
    //   } else $slider.slick('slickPlay');
    //
    // }
    //
    // if (checkSlideType(currentSlide) == 'youtube' || checkSlideType(nextSlide) == 'youtube') {
    //
    //   $slider.slick('slickPause');
    //   playersCreated[currentSlide].playVideo();
    //
    //   if (checkSlideType(nextSlide) == 'vimeo') {
    //
    //     playersCreated[nextSlide].play();
    //
    //   } else $slider.slick('slickPlay');
    //
    // }

    if (checkSlideType(currentSlide) == 'youtube') {

      $slider.slick('slickPause');
      playersCreated[currentSlide].playVideo();

    } else if (checkSlideType(currentSlide) == 'vimeo') {
      console.log(playersCreated[currentSlide]);
      playersCreated[currentSlide].play();
      playersCreated[currentSlide].on('ended', function() {
        console.log('ended');
        $slider.slick('slickNext');
      });
      // $slider.slick('slickPause');
      // playersCreated[currentSlide].play();

    } else $slider.slick('slickPlay');

  });

}
