(function($){

  // ARTICLE FAQ ACCORDION \\

  // Cache DOM \\

  var $accordionWrap = $('.accordion-wrap'),
      $accordion = $accordionWrap.find('.module-faq-accordion'),
      $accordionElements = $accordion.find('.accordion__element');

  $.each($accordionElements, function() {

    var $heading = $(this).find('.accordion__element__heading');

    $heading.on('click', function() {

      var $arrow = $(this).find('.accordion-heading__arrow i'),
          $accordionText = $(this).next('.accordion__element__text');

      if ($arrow.hasClass('fa-caret-down')) {
        $arrow.removeClass('fa-caret-down').addClass('fa-caret-up');
      } else {
        $arrow.removeClass('fa-caret-up').addClass('fa-caret-down');
      }

      $accordionText.slideToggle(200);

    });

  });

})(jQuery);
