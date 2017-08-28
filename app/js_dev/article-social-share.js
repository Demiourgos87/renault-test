(function($){
  $(window).on('load', function() {
    var article = $('body').find('.article-body__body'),
        social = article.find('.c-social-share.article-default');
    if (social.length > 0) {
      var headerHeight = $('.b-header').outerHeight(),
          articleHeight = article.outerHeight(),
          articleTopPosition = article.offset().top - headerHeight,
          articleBottomPosition = articleTopPosition + articleHeight,
          social = $('.c-social-share.article-default'),
          socialHeight = social.outerHeight();

      $(window).on('scroll', function(){
        var windowTopPosition = $(window).scrollTop() + 10;
        socialTopPosition = social.offset().top - headerHeight,
        socialBottomPosition = socialTopPosition + socialHeight;

        if (windowTopPosition > articleTopPosition) {
          var offset = windowTopPosition - articleTopPosition;
          social.animate({top: offset + 'px'}, 200);

          if (articleBottomPosition < (windowTopPosition + socialHeight + 60)) {
            social.stop();
          }
        }
      });
    }
  });
})(jQuery);
