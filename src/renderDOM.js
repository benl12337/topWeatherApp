import stat from './stat.js';
import resetContents from './resetContents.js';
import statIcon from './statIcon.js';
import forecastCard from './forecastCard.js';
import windImg from './wind.png';
import rainImg from './drop.png';
import tempImg from './temperature.png';

export default function renderDOM(weatherObject, iconObject, metric, animation) {

    console.log(weatherObject);

    resetContents();
    // query relevant divs
    const location = document.getElementById('locationDiv');

    // render and append location
    const locationText = document.createElement('h1');
    locationText.textContent = weatherObject.location.name + ', ' + weatherObject.location.country;
    location.appendChild(locationText);
    if (animation) {
        locationText.classList.add('fadeIn');
    }

    // append the current weather condition
    const conditions = document.createElement('div');
    conditions.className = 'conditions';

    const iconFolder = weatherObject.current.is_day == 1 ? 'day' : 'night';
    const iconNumber = weatherObject.current.condition.code;
    const conditionIcon = document.createElement('img');
    conditionIcon.classList.add('conditionIcon');

    const conditionsText = document.createElement('p');
    conditionsText.className = 'conditionStatus';
    conditionsText.textContent = weatherObject.current.condition.text;



    // get the icon code
    iconObject.forEach((object) => {
        if (object.code == weatherObject.current.condition.code) {
            conditionIcon.src = `icons/${iconFolder}/${object.icon}.png`;
        };
    });

    // APPEND conditions TO DIV
    conditions.appendChild(conditionIcon);
    conditions.appendChild(conditionsText);
    location.appendChild(conditions);

    // render wind stats 
    const statsOne = document.getElementById('statsOne');
    statsOne.appendChild(stat(metric, 'wind', weatherObject, ' km/h', ' mph'));
    statsOne.appendChild(statIcon(windImg));

    // render temp stats
    const statsTwo = document.getElementById('statsTwo');
    statsTwo.appendChild(stat(metric, 'temp', weatherObject, ' °c', ' °f'));
    statsTwo.appendChild(statIcon(tempImg));

    // render precip stats
    const statsThree = document.getElementById('statsThree');
    statsThree.appendChild(stat(metric, 'precip', weatherObject, ' mm', ' in'));
    statsThree.appendChild(statIcon(rainImg));

    // render forecast
    console.log('got up to checkpoint 1');
    const forecastContainer= document.createElement('div');
    forecastContainer.className = 'forecastContainer';
    
    const forecastObject = weatherObject.forecast.forecastday;
    const forecastDiv = document.querySelector('#forecast');
    console.log('got up to checkpoint two');


    forecastContainer.appendChild(forecastCard(-1, forecastObject, metric, 'forecastNeg'));
    forecastContainer.appendChild(forecastCard(0, forecastObject, metric, 'forecastOne'));
    forecastContainer.appendChild(forecastCard(1, forecastObject, metric, 'forecastTwo'));
    forecastContainer.appendChild(forecastCard(2, forecastObject, metric, 'forecastThree'));

    forecastDiv.appendChild(forecastContainer);
};