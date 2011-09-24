$(document).ready(function() {
  $('div.child').hide(); 
  $('#menu-postres').hide(); 
  $('#vermas').click(function() {
    $('#menu-postres').slideToggle('fast');
    if ($('#vermas span').html() == "→") {
      $('#vermas span').html("&darr;");
    }
    else {
      $('#vermas span').html("&rarr;");
    }
  });
  $('h2.faq').click(function() {
    $(this).next().slideToggle('fast');
  });
});
