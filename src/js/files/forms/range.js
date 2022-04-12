// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
import 'nouislider/dist/nouislider.css';

export function rangeInit() {
    const priceSlider = document.querySelector('.price__range');
    if (priceSlider) {
        let textFrom = priceSlider.getAttribute('data-from');
        let textTo = priceSlider.getAttribute('data-to');
        noUiSlider.create(priceSlider, {
            start: [100, 240],
            connect: true,
            range: {
                min: [0],
                max: [500],
            },
            format: wNumb({
                decimals: 0,
                suffix: ' EUR',
            }),
        });

        const priceStart = document.querySelector('.price__number--from');
        const priceEnd = document.querySelector('.price__number--to');
        priceStart.addEventListener('change', setPriceValues);
        priceEnd.addEventListener('change', setPriceValues);

        priceSlider.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];

            if (handle) {
                priceEnd.value = value;
            } else {
                priceStart.value = value;
            }
        });

        function setPriceValues() {
            let priceStartValue;
            let priceEndValue;
            if (priceStart.value != '') {
                priceStartValue = priceStart.value;
            }
            if (priceEnd.value != '') {
                priceEndValue = priceEnd.value;
            }
            priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
        }
    }
}
rangeInit();
