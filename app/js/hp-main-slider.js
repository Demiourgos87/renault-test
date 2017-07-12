(function($) {
  // HP Main Slider

  // Cache DOM
  var $sliderWrap = $('.hp-main-slider'),
      $slider = $sliderWrap.find('.hp-main-slider--wrap'),
      $allSlides = $slider.find('.hp-main-slider__slide');

  function setSlidesDimensions(slide) {

    var slideWidth = slide.width();
    var aspectRatio = 16 / 9;
    var slideHeight = slideWidth / aspectRatio;

    slide.css({width: slideWidth, height: slideHeight});

  }

  $.each($allSlides, function(){

    setSlidesDimensions($(this));

  });

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    dots: false,
    arrows: false
  });

})(jQuery);

// function createYoutubePlayer(id) {
//
//   if (onYouTubeIframeAPIReady()) {
//
//     var player = new YT.Player(id);
//
//     videos.push(player);
//   }
//
// }
//
// console.log(videos);

// for (var i = 0; i < videos.length; i++) {
//
//   if (/(youtube)/.test(videos[i])) console.log('youtube');
//   else if (/(vimeo)/.test(videos[i])) console.log('vimeo');
//
// }

function onYouTubeIframeAPIReady() {

  var $allSlides = $('.hp-main-slider--wrap .hp-main-slider__slide'),
      videos = [],
      player;

  function createPlayer(id) {

    return new YT.Player(id, {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });

  }

  for (var i = 0; i < $allSlides.length; i++) {

    var $current = $($allSlides[i]);

    if ($current.hasClass('video')) {

      var currentIframeId = $current.find('iframe').attr('id');

      if (/(youtube)/.test(currentIframeId)) {

        player = createPlayer(currentIframeId);
        videos.push(player);

      }

    }

  }

}

function onPlayerReady() {
  return true;
}

function onPlayerStateChange() {
  return;
}
