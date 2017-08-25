function checkIfInView(slider) {
  var $window = $(window);

  if (slider.length > 0) {
    $window.on('scroll', function() {
      var windowHeight = $window.outerHeight(),
          windowTopPosition = $window.scrollTop(),
          windowBottomPosition = windowTopPosition + windowHeight,
          sliderHeight = slider.outerHeight(),
          sliderTopPosition = slider.offset().top,
          sliderBottomPosition = sliderTopPosition + sliderHeight;

      if (windowBottomPosition > sliderTopPosition || windowTopPosition < sliderBottomPosition) {
        slider.slick('slickPlay');
      }

      if (windowTopPosition > sliderBottomPosition || windowBottomPosition < sliderTopPosition) {
        slider.slick('slickPause');
      }
    });
  }
}
