(function($){
  // Psychotest

  // Cache DOM
  var $pageWrap = $('.p-psychotest'),
      $intro = $pageWrap.find('.psychotest-intro'),
      $startButton = $intro.find('.psychotest-start'),
      $allSlides = $pageWrap.find('.psychotest-slide'),
      $questions = $pageWrap.find('.psychotest-question'),
      $counters = $pageWrap.find('.psychotest-counter'),
      $header = $('.b-header'),
      headerHeight = $header.outerHeight(),
      windowWidth = $(window).outerWidth(),
      windowHeight = $(window).outerHeight();

  // Update counter
  $.each($counters, function() {
    var counter = $(this),
        currentQuestion = counter.closest('.psychotest-question').index(),
        totals = counter.find('.psychotest-counter__total'),
        current = counter.find('.psychotest-counter__current');

    totals.text($questions.length);
    current.text(currentQuestion);
  });

  $pageWrap.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    autoplay: false,
    dots: false,
    arrows: false,
    draggable: false,
    swipe: false,
    pauseOnHover: false
  });

  // Set slick height to intro height
  var $slickList = $pageWrap.find('.slick-list');
  $slickList.height($intro.outerHeight());

  $startButton.on('click', function(){ $pageWrap.slick('slickNext'); });

  if (windowWidth >= 1024) {

    $intro.height(windowHeight - headerHeight);
    $slickList.height(windowHeight - headerHeight);

    $pageWrap.on('afterChange', function(event, slick, currentSlide) {

      var $currentQuestion = $($questions[currentSlide - 1]),
          $options = $currentQuestion.find('.question-option'),
          $confirm = $currentQuestion.find('.btn-confirm'),
          $endTest = $currentQuestion.find('.btn-confirm.end-test');

      function activateOption(element) {

        var $current = $(element).closest('.question-option'),
            $circle = $current.find('.question-option-circle'),
            $tick = $circle.find('.tick');

        $.each($options, function() {

          var elem = $(this);

          if (elem.hasClass('active')) {
            elem.removeClass('active');
            elem.find('.question-option-circle').removeClass('active');
            elem.find('.tick').fadeOut(200);
          }
          if (elem.hasClass('inactive')) elem.removeClass('inactive');
        });

        $current.addClass('active');
        $confirm.addClass('btn--yellow');

        $.each($options, function() {
          if (!$(this).hasClass('active')) {
            $(this).addClass('inactive');
          }
        });

        $circle.addClass('active');
        $tick.fadeIn(200);

      }


      $options.on('click', function(e) {
        e.stopPropagation();
        activateOption($(this));
      });

      $confirm.on('click', function(e) {
        e.stopPropagation();
        if ($(this).hasClass('btn--yellow') && !$(this).hasClass('end-test')) $pageWrap.slick('slickNext');
      });

      $endTest.on('click', function(e) {
        if (!$(this).hasClass('btn--yellow')) e.preventDefault();
      });

    });

  }

  if (windowWidth < 1024) {

    $pageWrap.on('afterChange', function(event, slick, currentSlide) {

      $('html, body, window').animate({scrollTop: 0}, 400);

      var $currentQuestion = $($questions[currentSlide - 1]),
          $options = $currentQuestion.find('.question-option');

      // Adjust slick height to current question height
      $slickList.height($currentQuestion.outerHeight());

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
