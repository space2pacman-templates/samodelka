var html5Slider = document.querySelector('.js-filter-box-slider');
var numberLeft = document.querySelector('.js-filter-box-number-left');
var numberRight = document.querySelector('.js-filter-box-number-right');

// Инициализация слайдера
if (html5Slider) {
    noUiSlider.create(html5Slider, {
        start: [1834, 1552185],
        connect: true,
        range: {
            'min': 1834,
            'max': 1552185
        },
        format: {
            to: function (value) {
                return value.toFixed(0).replace(/./g, function (c, i, a) {
                    return i && c !== "." && ((a.length - i) % 3 === 0) ? ' ' + c : c;
                }) + ' P';
            },
            from: function (value) {
                return value.replace(' Р', '');
            }
        }
    });

    // Передача значений в div
    html5Slider.noUiSlider.on('update', function (values, handle) {

        var value = values[handle];

        if (handle) {
            numberRight.innerHTML = value
        } else {
            numberLeft.innerHTML = value;
        }
    });

}