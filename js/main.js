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

//Событие
var openFlag = false;
let popup = document.querySelector('.popup');
$('.event').on('click', function () {
  document.getElementById('popup').style = "display: block";
})
$('.button-exit').on('click', function () {
  document.getElementById('popup').style = "display: none";
})
//Перемещение
var previous_plot = lines[0]['Место пребывания'];
var current_plot = -1;
const dictionary = {
  'Замок Фонтенбло': "Fontenblo",
  'Париж; Лувр': "Louvre",
  'Бурж': "Bourges",
  'Божанси': 'Beaugency',
  'Замок Жьен': 'Gien',
  'Замок Сен-Жермен-ан-Ле': 'Saint-Germain',
  'Бордо': 'Bordeaux',
  'Мон-Де-Марсан': 'Mont-de-Marsan',
  'Байонна': 'Bayonne',
  'Сен-Жан-де-Люз': 'Saint-Jean-de-Luz',
  'Сен-Мор-де-Фоссе': 'Saint-Mor-de-Fosse',
  'Палаточный лагерь близ Шатодена': 'Chateaudun',
  'Палаточный лагерь близ Руана': 'Rouen',
  'Венсеннский замок': 'Vincennes',
  'Палаточный лагерь близ Орлеана': 'Orlean',
  'Труа': 'Trua',
  'Замок Шенонсо': 'Shenonso',
  'Мант': 'Mant',
  'Палаточный лагерь близ Гавра': 'Havre',
  'Замок Гайон': 'Gaillon',
  'Замок Мелан': 'Meulan',
  'Лион': 'Lyon',
  'Руссильон': 'Roussillon',
  'Валанс': 'Valence',
  'Авиньон': 'Avignon',
  'Марсель': 'Marseilles',
  'Арль': 'Arles',
  'Тараскон': 'Tarascon',
  'Монпелье': 'Montpellier',
  'Каркассон': 'Carcasson',
  'Тулуза': 'Toulouse',
  'Вилле-Коттре': 'Villers-Cottere',
  'Шири-Урскан': 'Chiry-Ourscamp',
  'Суассон': 'Soissons',
  'Компьень': 'Kompen',
  'Санлис': 'Senlis',
  'Мец': 'Mec',
  'Замок Плесси-Ле-Тур': 'Plessis-lez-Tours',
  'Замок Бирон': 'Biron',
  'Палаточный лагерь близ Тонне-Бутонн': 'Tonnay-Boutonne',
  'Палаточный лагерь близ Сен-Жан-д’Анжели': 'Saint-Jean-Anjeli',
  'Анжерский замок': 'Angers',
  'Шатобриан': 'Chateaubriant',
  'Аржантан': 'Argentan',
  'Замок Блуа': 'Blua',
  'Замок Уссе': 'Houssay',
  'Амбуазский замок': 'Amboise',
  'Сен-Лежер-ан-Ивлин': 'Yvelines',
  'Лезиньи': 'Lesigny'
}
// current_plot = document.getElementById("DateSlider").value;
var updatedOptions = { 'plots': {} };
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
      size: 15,
      attrs: {
        fill: "#343434"
      }
    };
  }
  $(".mapcontainer").trigger('zoom', { level: 10, plot: dictionary[lines[current_plot]['Место пребывания']] });
  $(".mapcontainer").trigger('update', [{
    mapOptions: updatedOptions
  }]);
  UpdateEvent();
}

$('.right').on('click', function () {
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
    $(".mapcontainer").trigger('zoom', { level: 10, plot: dictionary[lines[current_plot]['Место пребывания']] });
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
    $(".mapcontainer").trigger('zoom', { level: 10, plot: dictionary[lines[current_plot]['Место пребывания']] });
    $(".mapcontainer").trigger('update', [{
      mapOptions: updatedOptions
    }]);
    UpdateEvent();
  }
});
function UpdateEvent() {
  document.getElementById('event_name').innerHTML = lines[current_plot]['Источник'].split(' /')[0].split(';')[0];
  document.getElementById('PEvent').innerHTML = lines[current_plot]['Источник'].split(' /')[0].split(';')[0];
  document.getElementById('PDate').innerHTML = 'Дата пребывания: ' + lines[current_plot]['Дата пребывания'];
  document.getElementById('PPlace').innerHTML = 'Место пребывания: ' + lines[current_plot]['Место пребывания'];
  document.getElementById('PSource').innerHTML = 'Истчоник: ' + lines[current_plot]['Источник'].split(' /')[1];
  // console.log(lines[current_plot]['Имя монарха']);
  // console.log(lines[current_plot]['Дата пребывания']);
  // console.log(lines[current_plot]['Место пребывания']);
  // console.log(lines[current_plot]['Источник']);
  previous_plot = lines[current_plot]['Место пребывания'];
}

