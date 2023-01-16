//События
let popup_event = document.querySelector('.popup-event');
$('.events').on('click', function () {
  document.getElementById('popup-event').style = "display: block";
})
$('.popup-event-button-exit').on('click', function () {
  document.getElementById('popup-event').style = "display: none";
})