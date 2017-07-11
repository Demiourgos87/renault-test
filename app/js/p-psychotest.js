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

      function activateOption(element) {

        var $current = $(element).closest('.question-option'),
            $overlay = $current.find('.question-option__overlay'),
            $confirm = $overlay.find('.btn'),
            $cancel = $overlay.find('.option-cancel'),
            $circle = $current.find('.question-option-circle'),
            $tick = $circle.find('.tick');

        $current.addClass('active');

        $.each($options, function() {
          if (!$(this).hasClass('active')) {
            $(this).addClass('inactive').off();
          }
        });

        $overlay.fadeIn(200);
        $circle.addClass('active');
        $tick.fadeIn(200);

        $cancel.on('click', function(e){
          e.stopPropagation();
          $overlay.fadeOut(200);
          $circle.removeClass('active');
          $tick.fadeOut(200);
          $current.removeClass('active');

          $.each($options, function() {
            if ($(this).hasClass('inactive')) {
              $(this).removeClass('inactive');
            }
            $options.on('click', function(e) {
              activateOption(e.target);
            });
          });
        });

        $confirm.on('click', function() {
          $pageWrap.slick('slickNext');
        });

      }

      $options.on('click', function(e) {
        activateOption(e.target);
      });

    });

  }

})(jQuery);
