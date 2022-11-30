$('.question-block .responses button:not(.btn-reset)').click(function() {
  var response = $(this).parents('.question-block').attr('data-question');
 
  var toggleTo = $(this).attr('data-toggle');
  console.log('toggleTo:' + toggleTo);


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

  //Card Printer
  let card = $(this).attr('data-card');
  if(typeof card !== 'undefined'){
    console.log('card:' + card);
    let cardSuggestion = card.split(' ');
    console.log(cardSuggestion);
    cardSuggestion.forEach(element => {
    document.querySelector('.card-section').classList.add('active-section');
      
      console.log(element)
      let cardSelected = document.getElementById(element);
      cardSelected.classList.add('active-card');
      $(cardSelected).fadeIn(1000);
    });

  }

});

//Reset
$('button.btn-reset').click(function() {
  $('.question-block').removeClass('active').removeClass('answered');
  $('.card-item__side.-front').removeClass('active-card');
  document.querySelector('.card-section').classList.remove('active-section');
  $('.card-item__side.-front').attr("style", "");
  $('.question-block[data-question="1"]').addClass('active');
  $('.question-block button').removeClass('btn-primary').addClass('btn-outline-primary')
});

console.log('¿Quieres colaborar? Este proyecto es Codigo Abierto, mandame un DM y lo hacemos más grande. ')
console.log('Github: https://github.com/c7b/tarjetas-mexicanas-grucrib')