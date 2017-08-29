(function($){
  $(window).on('load', function() {
    var article = $('body').find('.article-body__body'),
        social = article.find('.c-social-share.article-default');
    if (social.length > 0) {
      var headerHeight = $('.b-header').outerHeight(),
          articleHeight = article.outerHeight(),
          articleTopPosition = article.offset().top,
          articleBottomPosition = articleTopPosition + articleHeight,
          social = $('.c-social-share.article-default'),
          socialHeight = social.outerHeight();

      $(window).on('scroll', $.debounce(300, function() {
        var windowTopPosition = $(window).scrollTop() + headerHeight,
            socialTopPosition = social.offset().top + headerHeight,
            socialBottomPosition = socialTopPosition + socialHeight,
            offset;

        if (windowTopPosition > articleTopPosition && windowTopPosition < (articleBottomPosition - socialHeight - headerHeight)) {
          offset = windowTopPosition - articleTopPosition;
          social.animate({top: offset}, 400);
        }

        if (windowTopPosition > (articleBottomPosition - socialHeight - headerHeight)) {
          social.css('top', 'auto');
          social.animate({bottom: '25px'});
        }

        if (windowTopPosition < (articleBottomPosition - socialHeight - headerHeight)) {
          social.stop();
          social.css('bottom', 'auto');
          social.animate({top: offset + 10 + 'px'});

          if (windowTopPosition < articleTopPosition) {
            social.stop();
            social.animate({top: 0});
          }
        }
      }));
    }
  });
})(jQuery);
