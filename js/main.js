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
var lines = [];

$.ajax({
    type: "GET",
    url: "iterrarij.txt",
    dataType: "text",
    success: function(data) {processData(data);}
  });


function processData(allText) {
  var allTextLines = allText.split(/\r\n|\n/);
  var headers = allTextLines[0].split(',');
  for (var i=1; i<allTextLines.length; i++) {
      var data = allTextLines[i].split(',');
      if (data.length == headers.length) {

          var tarr = {};
          for (var j=0; j<headers.length; j++) {
              tarr[headers[j]] = data[j];
          }
          lines.push(tarr);
      }
  }
  console.log(lines[0]['Место пребывания'])
  // alert(lines);
}
var previous_plot;
var current_plot = 0;
const dictionary = {
  'Замок Фонтенбло':"Fontenblo",
  2:"Louvre",
  3:"Bourges",
  4:'Beaugency',
  5:'Gien',
  6:'Bordeaux',
  7:'Mont-de-Marsan',
  8:'Bayonne',
  9:'Saint-Jean-de-Luz'
}
$('.right').on('click', function () {
  if(current_plot < 9){
    current_plot +=1;
    var updatedOptions = {'plots': {}};
    updatedOptions.plots[dictionary[lines[0]['Место пребывания']]] = {
      size: 25,
      attrs: {
          fill: "#3a7bfc"
      }
    };
    if(current_plot > 1){
    updatedOptions.plots[dictionary[previous_plot]] = {
      size: 15,
      attrs: {
            fill: "#343434"
        }
    };
    }
    $(".mapcontainer").trigger('zoom', {level: 10, plot:dictionary[current_plot]});
    $(".mapcontainer").trigger('update', [{
      mapOptions: updatedOptions
    }]);
    previous_plot = current_plot;
  }
});
$('.left').on('click', function () {
  if(current_plot > 1){
    current_plot -=1;

  var updatedOptions = {'plots': {}};
  updatedOptions.plots[dictionary[current_plot]] = {
    size: 25,
    attrs: {
        fill: "#3a7bfc"
    }
  };
  if(current_plot < 9){
    updatedOptions.plots[dictionary[previous_plot]] = {
      size: 15,
      attrs: {
            fill: "#343434"
        }
    };
  }
  $(".mapcontainer").trigger('zoom', {level: 10, plot:dictionary[current_plot]});
  $(".mapcontainer").trigger('update', [{
    mapOptions: updatedOptions
    
  }]);
  previous_plot = current_plot;
}
});
