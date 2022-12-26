//Перемещение

$(document).ready(function() {
  $.ajax({
      type: "GET",
      url: "source/iterrarij.csv",
      dataType: "text",
      success: function(data) {processData(data);}
   });
});

function processData(allText) {
  var allTextLines = allText.split(/\r\n|\n/);
  var headers = allTextLines[0].split(',');
  var lines = [];

  for (var i=1; i<allTextLines.length; i++) {
      var data = allTextLines[i].split(',');
      if (data.length == headers.length) {

          var tarr = [];
          for (var j=0; j<headers.length; j++) {
              tarr.push(headers[j]+":"+data[j]);
          }
          lines.push(tarr);
      }
  }
  // alert(lines);
}
var previous_plot;
var current_plot = 0;
const dictionary = {
  1:"Fontenblo",
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
    updatedOptions.plots[dictionary[current_plot]] = {
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
