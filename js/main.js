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
var previous_plot;
var current_plot = 0;
const dictionary = {
  1:"Fontenblo",
  2:"Louvre",
  3:"Bourges"
}
$('.right').on('click', function () {
  if(current_plot < 3){
    current_plot +=1;
    }
  previous_plot = current_plot;
  var updatedOptions = {'plots': {}};
  updatedOptions.plots[dictionary[current_plot]] = {
    attrs: {
        fill: "#3a7bfc"
    }
  };
  if(current_plot > 1){
  updatedOptions.plots[dictionary[current_plot - 1]] = {
    attrs: {
          fill: "#343434"
      }
  };
  }
  $(".mapcontainer").trigger('zoom', {level: 10, plot:dictionary[current_plot]});
  $(".mapcontainer").trigger('update', [{
    mapOptions: updatedOptions
  }]);
});
$('.left').on('click', function () {
  if(current_plot > 1){
    current_plot -=1;
    }
  previous_plot = current_plot;
  var updatedOptions = {'plots': {}};
  updatedOptions.plots[dictionary[current_plot]] = {
    attrs: {
        fill: "#3a7bfc"
    }
  };
  if(current_plot < 3){
  updatedOptions.plots[dictionary[current_plot + 1]] = {
    attrs: {
          fill: "#343434"
      }
  };
  }
  $(".mapcontainer").trigger('zoom', {level: 10, plot:dictionary[current_plot]});
  $(".mapcontainer").trigger('update', [{
    mapOptions: updatedOptions
  }]);
});