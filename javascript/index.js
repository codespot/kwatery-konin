$(document).ready(function() {
  $('.phone').each(function(index, value) {
    var field = $(value);
    var phone = field.text();
    field.attr('href', 'tel:' + phone);
  });

  $('.email').each(function(index, value) {
    var field = $(value);
    var email = field.text(); 
    field.attr('href', 'mailto:' + email);
  });
});

