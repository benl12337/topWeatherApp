export default function forecastCard(maxtemp, mintemp, cardId) {
    const div = document.createElement('div');
    const maxTempEl = document.createElement('p');
    const minTempEl = document.createElement('p');
    maxTempEl.textContent = maxtemp;
    minTempEl.textContent = mintemp;
    div.id = cardId;
    div.className = 'forecastCard';
    div.appendChild(maxTempEl);
    div.appendChild(minTempEl);
    return div;
}