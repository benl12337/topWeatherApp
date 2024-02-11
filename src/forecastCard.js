import { format } from 'date-fns';

export default function forecastCard(index, forecastObject, metric, cardId) {

    const div = document.createElement('div');
    const day = document.createElement('p');
    const maxTempEl = document.createElement('p');
    const minTempEl = document.createElement('p');

    if (index == 0) {
        day.textContent = 'Today';
    } else if (index == -1) {
        day.textContent = 'Forecast';
    } else {
        day.textContent = format(new Date(forecastObject[index].date), 'EEEE');
    }
    day.className = 'forecastName';

    if (index == -1) {
        maxTempEl.textContent = 'MAX';
        minTempEl.textContent = 'MIN';
    } else {
        maxTempEl.textContent = metric == 'celsius' ? (forecastObject[index].day.maxtemp_c + ' °c') : (forecastObject[index].day.maxtemp_f + ' °f');
        minTempEl.textContent = metric == 'celsius' ? (forecastObject[index].day.mintemp_c + ' °c') : (forecastObject[index].day.mintemp_f + ' °f');
    }

    maxTempEl.className = 'maxTemp';
    minTempEl.className = 'minTemp';
    div.id = cardId;
    div.className = 'forecastCard';
    div.appendChild(maxTempEl);
    div.appendChild(minTempEl);
    div.appendChild(day);
    return div;
}