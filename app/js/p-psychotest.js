(function($){
  // Psychotest

  // Cache DOM
  var $pageWrap = $('.p-psychotest'),
      $intro = $pageWrap.find('.psychotest-intro'),
      $startButton = $intro.find('.psychotest-start'),
      $questions = $pageWrap.find('.psychotest-question'),
      $counters = $pageWrap.find('.psychotest-counter'),
      windowWidth = $(window).outerWidth(),
      windowHeight = $(window).outerHeight();

  $pageWrap.height(windowHeight - 62);

  $.each($counters, function() {
    var counter = $(this),
        currentQuestion = counter.closest('.psychotest-question').index(),
        totals = counter.find('.psychotest-counter__total'),
        current = counter.find('.psychotest-counter__current');

    totals.text($questions.length);
    current.text(currentQuestion);
  });

  if (windowWidth < 1025) {

    $pageWrap.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 400,
      autoplay: false,
      dots: false,
      arrows: false,
      draggable: false,
      swipe: false
    });

    $startButton.on('click', function(){ $pageWrap.slick('slickNext'); });

    $pageWrap.on('afterChange', function(event, slick, currentSlide) {

      $('html, body, window').animate({scrollTop: 0}, 400);

      var $currentQuestion = $($questions[currentSlide - 1]),
          $options = $currentQuestion.find('.question-option');

      $.each($options, function() {

        $(this).on('click', function(e) {

          var $current = $(this);

          $current.addClass('active');

          $.each($options, function(e) {

            var $option = $(this);

            if (!$option.hasClass('active')) {
              $option.addClass('inactive');

              // $.each($options, function() {
              //   if ($(this).hasClass('inactive')) {
              //     $(this).on('click', function() {
              //       return false;
              //     });
              //   }
              // });

            }

          });

          var $overlay = $(this).find('.question-option__overlay'),
              $confirm = $overlay.find('.btn'),
              $cancel = $overlay.find('.option-cancel');

          $overlay.fadeIn(200);

          $cancel.on('click', function(e){
            e.stopPropagation();
            $overlay.fadeOut(200);
            $current.removeClass('active');

            $.each($options, function() {
              if ($(this).hasClass('inactive')) {
                $(this).removeClass('inactive');
              }
            });
          });

          $confirm.on('click', function() {
            $pageWrap.slick('slickNext');
          });

        });

      });

    });

  }


})(jQuery);
