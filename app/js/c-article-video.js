(function($){

  var $video = $('.c-article-video--wrap'),
      $overlay = $video.find('.c-article-video__overlay'),
      $play = $overlay.find('.fa-play'),
      $iframe = $video.find('iframe');

  $video.css({height: ($video.outerWidth() / (16 / 9))});

})(jQuery);

// var player = new YT.Player($iframe.attr('id'), {
//   events: {
//     'onStateChange': onPlayerStateChange
//   }
// });
