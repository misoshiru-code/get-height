$(function($){
    var log = '';
    log += 'window.innerHeight = ' + window.innerHeight + '  ';
    log += 'window.outerHeight = ' + window.outerHeight + '  ';
    log += '100vh = ' + $('#vh').height() + '  ';
    log += 'screen.height = ' + screen.height + '  ';
    $('#vh').prepend(log);
  });