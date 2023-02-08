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
let openFlag = false;
let popup = document.querySelector('.popup');
$('.event').on('click', function () {
  if(popup.classList.contains('is-hidden'))
  {
    popup.classList.remove('is-hidden')
  }
  popup.classList.add('is-visible');
  $.scrollify.disable();
})
$('.button-exit').on('click', function () {
  popup.classList.add('is-hidden');
  window.setTimeout(function() {
    popup.classList.remove('is-visible')}, 250)
    $.scrollify.enable();
})
//События
let popup_event = document.querySelector('.popup-event');
$('.events').on('click', function () {
  if(popup_event.classList.contains('is-hidden'))
  {
    popup_event.classList.remove('is-hidden')
  }
  popup_event.classList.add('is-visible');
  $.scrollify.disable();
})
$('.popup-event-button-exit').on('click', function () {
  popup_event.classList.add('is-hidden');
  window.setTimeout(function() {
    popup_event.classList.remove('is-visible')}, 250)
    $.scrollify.enable();
})
//Перемещение
let previous_plot = lines[0]['Место пребывания'];
let current_plot = -1;

// current_plot = document.getElementById("DateSlider").value;
let updatedOptions = { 'plots': {} };
let prevSliderValue = 0;
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
  if (current_plot < 255) {
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
    if (current_plot < 255 && previous_plot != lines[current_plot]['Место пребывания']) {
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
  document.getElementById('event_name').innerHTML = lines[current_plot]['Источник'].split('/')[0].split(' , ')[0].split(' : ')[0];
  document.getElementById('PEvent').innerHTML = lines[current_plot]['Источник'].split('/')[0].split(' , ')[0].split(' : ')[0];
  document.getElementById('PDate').innerHTML = PDate + lines[current_plot]['Дата пребывания'];
  document.getElementById('PPlace').innerHTML = PPlace+ lines[current_plot]['Место пребывания'];
  document.getElementById('PSource').innerHTML = PSource + lines[current_plot]['Источник'];
  // console.log(lines[current_plot]['Имя монарха']);
  // console.log(lines[current_plot]['Дата пребывания']);
  // console.log(lines[current_plot]['Место пребывания']);
  // console.log(lines[current_plot]['Источник']);
  previous_plot = lines[current_plot]['Место пребывания'];
}

// слайдер событий
let slideNow = 1;
let prevBtn = 0;
let slideCount = $('.slidewrapper').children().length;
let navBtnId = 0;
$('.slide-nav-btn').click(function() {
  (this).style = "background: #3a7bfc";
  if(prevBtn != 0){
    prevBtn.style = "background: #ffffff";
  }
  else{ if((this).id == 1){
    prevBtn.style = "background: #ffffff";
  }}
  navBtnId = parseInt((this).id);
  console.log(parseInt((this).id))
  if (navBtnId + 1 != slideNow) {
      translateWidth = -$('.viewport').width() * (navBtnId);
      $('.slidewrapper').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow = navBtnId + 1;   
  }
  prevBtn = (this);
});
