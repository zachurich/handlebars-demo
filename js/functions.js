$(document).ready(function() {
  setTimeout(function() {
    $('body').addClass('fadeIn');
  }, 1000)
  // Scroll Animation Detection
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 350) {
      $('header').css('display', 'flex').addClass('slideDown');
    } else {
      $('header').css('display', 'none').removeClass('slideDown');
    }
});
  // Lets set some color based on background
  var sectionOneColor = $("#section-1").css('background-color');
  var sectionFourColor = $("#section-4").css('background-color');
  var sectionTwoColor = $("#section-2").css('background-color');

  $('#section-2').find('.divider').css('background-color' , sectionFourColor);
  $('#section-2').find('h3').css('color' , sectionFourColor);

  $('#section-4').find('.divider').css('background-color' , sectionTwoColor);
  $('#section-4').find('h3').css('color' , sectionTwoColor);

  for(var i = 0; i <= 4; i++) {
    if(document.querySelector('#section-' + i).style.backgroundColor == 'white') {
      // $('#section-' + i).find('p').css('color', '#35528C');
      console.log('hello');
    }
  }
});
