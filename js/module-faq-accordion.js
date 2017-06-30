(function($){

  // ARTICLE FAQ ACCORDION \\

  // Cache DOM \\

  var $accordionWrap = $('.accordion-wrap'),
      $accordion = $accordionWrap.find('.module-faq-accordion'),
      $accordionElements = $accordion.find('.accordion__element');

  function closeOpenedElement() {

      var $opened = $accordion.find('.accordion__element.opened'),
          $openedText = $opened.find('.accordion__element__text'),
          $openedArrow = $opened.find('.accordion-heading__arrow i');

      $opened.removeClass('opened');
      $openedText.slideUp(200);
      $openedArrow.removeClass('fa-caret-up').addClass('fa-caret-down');

  }

  $.each($accordionElements, function() {

    var $current = $(this);
        $heading = $current.find('.accordion__element__heading');

    $heading.on('click', function() {

      var $arrow = $(this).find('.accordion-heading__arrow i'),
          $accordionText = $(this).next('.accordion__element__text');

      if ($current.hasClass('opened')) {

        $current.removeClass('opened');
        $accordionText.slideUp(200);
        $arrow.removeClass('fa-caret-up').addClass('fa-caret-down');

      } else {

        closeOpenedElement();
        $current.addClass('opened');
        $accordionText.slideDown(200);
        $arrow.removeClass('fa-caret-down').addClass('fa-caret-up');

      }

    });

  });

})(jQuery);
