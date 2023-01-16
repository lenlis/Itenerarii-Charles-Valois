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
//анимация header
const map_header = document.querySelector('.map-header');
map_header.classList.remove('opacity-animation');

// Добавить наблюдение за появлением элемента
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      map_header.classList.add('opacity-animation');
      return;
    }
    map_header.classList.remove('opacity-animation');
  });
});
observer.observe(document.querySelector('.map-header'));
//Письмо
var openFlag = false;
let popup = document.querySelector('.popup');
$('.event').on('click', function () {
  document.getElementById('popup').style = "display: block";
})
$('.button-exit').on('click', function () {
  document.getElementById('popup').style = "display: none";
})
//События
let popup_event = document.querySelector('.popup-event');
$('.events').on('click', function () {
  document.getElementById('popup-event').style = "display: block";
})
$('.events-exit').on('click', function () {
  document.getElementById('popup-event').style = "display: none";
})
//Перемещение
var previous_plot = lines[0]['Место пребывания'];
var current_plot = -1;

// current_plot = document.getElementById("DateSlider").value;
var updatedOptions = { 'plots': {} };
var prevSliderValue = 0;
document.getElementById("DateSlider").oninput = function () {
  if (!openFlag) {
    openFlag = true;
    document.getElementById('event').style = "display: block";
  }
  current_plot = parseInt(current_plot)
  current_plot = parseInt(this.value);
  updatedOptions = { 'plots': {} };
  updatedOptions.plots[dictionary[lines[current_plot]['Место пребывания']]] = {
    size: 25,
    attrs: {
      fill: "#3a7bfc"
    }
  };
  if (previous_plot != lines[current_plot]['Место пребывания']) {
    updatedOptions.plots[dictionary[previous_plot]] = {
      text: {content: ''},
      size: 15,
      attrs: {
        fill: "#343434"
      }
    };
  }
  $(".mapcontainer").trigger('zoom', { level: 10, plot: dictionary[lines[current_plot]['Место пребывания']]});
  $(".mapcontainer").trigger('update', [{
    mapOptions: updatedOptions
  }]);
  UpdateEvent();
}

$(".right").on('click', function () {
  console.log(current_plot);
  if (!openFlag) {
    openFlag = true;
    document.getElementById('event').style = "display: block";
  }
  if (current_plot < 268) {
    current_plot = parseInt(current_plot)
    current_plot += 1;
    console.log(current_plot);
    document.getElementById("DateSlider").value = ''+current_plot;
    updatedOptions = { 'plots': {} };
    updatedOptions.plots[dictionary[lines[current_plot]['Место пребывания']]] = {
      size: 25,
      attrs: {
        fill: "#3a7bfc"
      }
    };
    if (current_plot > 1 && previous_plot != lines[current_plot]['Место пребывания']) {
      updatedOptions.plots[dictionary[previous_plot]] = {
        size: 15,
        attrs: {
          fill: "#343434"
        }
      };
    }
    $(".mapcontainer").trigger('zoom', { level: 10, plot: dictionary[lines[current_plot]['Место пребывания']]});
    $(".mapcontainer").trigger('update', [{
      mapOptions: updatedOptions
    }]);
    UpdateEvent();

  }
});
$('.left').on('click', function () {
  if (current_plot > 1) {
    current_plot = parseInt(current_plot)
    current_plot -= 1;
    document.getElementById("DateSlider").value = ''+current_plot;
    updatedOptions = { 'plots': {} };
    updatedOptions.plots[dictionary[lines[current_plot]['Место пребывания']]] = {
      size: 25,
      attrs: {
        fill: "#3a7bfc"
      }
    };
    if (current_plot < 268 && previous_plot != lines[current_plot]['Место пребывания']) {
      updatedOptions.plots[dictionary[previous_plot]] = {
        size: 15,
        attrs: {
          fill: "#343434"
        }
      };
    }
    $(".mapcontainer").trigger('zoom', { level: 10, plot: dictionary[lines[current_plot]['Место пребывания']]});
    $(".mapcontainer").trigger('update', [{
      mapOptions: updatedOptions
    }]);
    UpdateEvent();
  }
});
function UpdateEvent() {
  document.getElementById('num').innerHTML = lines[current_plot]['Номер'];
  document.getElementById('event_name').innerHTML = lines[current_plot]['Источник'].split('/')[0].split(',')[0];
  document.getElementById('PEvent').innerHTML = lines[current_plot]['Источник'].split('/')[0].split(',')[0];
  document.getElementById('PDate').innerHTML = 'Дата пребывания: ' + lines[current_plot]['Дата пребывания'];
  document.getElementById('PPlace').innerHTML = 'Место пребывания: ' + lines[current_plot]['Место пребывания'];
  document.getElementById('PSource').innerHTML = 'Истчоник: ' + lines[current_plot]['Источник'];
  // console.log(lines[current_plot]['Имя монарха']);
  // console.log(lines[current_plot]['Дата пребывания']);
  // console.log(lines[current_plot]['Место пребывания']);
  // console.log(lines[current_plot]['Источник']);
  previous_plot = lines[current_plot]['Место пребывания'];
}

