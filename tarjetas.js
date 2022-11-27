$('.question-block .responses button:not(.btn-reset)').click(function() {
  var response = $(this).parents('.question-block').attr('data-question');
  var toggleTo = $(this).attr('data-toggle');
  $('.question-block').each(function() {
    var question = $(this).attr('data-question');
    if (question > response) {
      $(this).removeClass('active').removeClass('answered');
      $(this).find('button').removeClass('btn-primary').addClass('btn-outline-primary')
    } 
  });
  $('.question-block[data-question="' + response + '"] button').each(function() {
    $(this).removeClass('btn-primary');
    var hider = $(this).attr('data-toggle');
    $('.question-block[data-question="' + hider + '"]').removeClass('active').removeClass('answered');
  });
  $(this).addClass('btn-primary').removeClass('btn-outline-primary');
  $(this).parents('.question-block').addClass('answered').removeClass('active');
  $('.question-block[data-question="' + toggleTo + '"]').addClass('active');
});
$('.question-block button.btn-reset').click(function() {
  $('.question-block').removeClass('active').removeClass('answered');
  $('.question-block[data-question="1"]').addClass('active');
  $('.question-block button').removeClass('btn-primary').addClass('btn-outline-primary')
});