//скролл
$(function () {
  $.scrollify({
    section: ".panel",
    scrollbars: false,
    afterRender: function () {
      $(".logo-items a").on("click", function () {
        $.scrollify.move("#home");
      });
    }
  });
});
//Блокировка скролла по карте
$('.mapcontainer').on('mouseenter', function () {
    $.scrollify.disable();
}).on('mouseleave', function () {
    $.scrollify.enable();
});
//Перемещение
var current_plot;
$('#test').on('click', function () {
  $(".mapcontainer").trigger('zoom', {level: 10, plot:'Fontenblo'});
  $('svg [data-id="Fontenblo"]').trigger('mouseover')
});