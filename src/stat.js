export default function renderStat(metric, stat, weatherObject, metric1, metric2) {
    const statNumber = document.createElement('h4');

    if (stat == 'wind') {
        statNumber.textContent = metric == 'celsius' ? (weatherObject.current.wind_kph + ' ' + metric1) : (weatherObject.current.wind_mph + ' ' + metric2);
    } else if (stat == 'temp') {
        statNumber.textContent = metric == 'celsius' ? (weatherObject.current.feelslike_c + ' ' + metric1) : (weatherObject.current.feelslike_f + ' ' + metric2);
    } else {
        statNumber.textContent = metric == 'celsius' ? (weatherObject.current.precip_mm + ' ' + metric1) : (weatherObject.current.precip_in + ' ' + metric2);
    }



    return statNumber;
}