$(function ($) {

  $('.inner-height').text('innerHeight = ' + window.innerHeight);
  $('.outer-height').text('outerHeight = ' + window.outerHeight);
  $('.vh').text('100vh = ' + $('#vh').height());
  $('.screen-height').text('screen.height = ' + screen.height);

  if (window.innerHeight == screen.height) {
    $('.answer').text('同じ値です');
  } else {
    $('.answer').text('違う値です');
  }

  $(window).resize(function () {

    $('.inner-height').text('innerHeight = ' + window.innerHeight);
    $('.outer-height').text('outerHeight = ' + window.outerHeight);
    $('.vh').text('100vh = ' + $('#vh').height());
    $('.screen-height').text('screen.height = ' + screen.height);

    if (window.innerHeight == screen.height) {
      $('.answer').text('同じ値です');
    } else {
      $('.answer').text('違う値です');
    }
  });

});