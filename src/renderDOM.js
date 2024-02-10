import stat from './stat.js';
import resetContents from './resetContents.js';
import statTitle from './statTitle.js';
import forecastCard from './forecastCard.js'

export default function renderDOM(weatherObject, iconObject, metric) {

    console.log(weatherObject);

    resetContents();
    // query relevant divs
    const location = document.getElementById('locationDiv');

    // render and append location
    const locationText = document.createElement('h1');
    locationText.textContent = weatherObject.location.name + ', ' + weatherObject.location.country;
    location.appendChild(locationText);
    locationText.classList.add('fadeIn');

    // append the current icon
    const iconFolder = weatherObject.current.is_day == 1 ? 'day' : 'night';
    const iconNumber = weatherObject.current.condition.code;
    const conditionIcon = document.createElement('img');
    conditionIcon.classList.add('conditionIcon');
    // get the icon code
    iconObject.forEach((object) => {
        if (object.code == weatherObject.current.condition.code) {
            conditionIcon.src = `./icons/${iconFolder}/${object.icon}.png`;
        };
    });

    location.appendChild(conditionIcon);

    // render wind stats 
    const statsOne = document.getElementById('statsOne');
    statsOne.appendChild(stat(metric, 'wind', weatherObject, ' km/h', ' mph'));
    statsOne.appendChild(statTitle('WIND'));

    // render temp stats
    const statsTwo = document.getElementById('statsTwo');
    statsTwo.appendChild(stat(metric, 'temp', weatherObject, ' °c', ' °f'));
    statsTwo.appendChild(statTitle('FEELS LIKE'));

    // render precip stats
    const statsThree = document.getElementById('statsThree');
    statsThree.appendChild(stat(metric, 'precip', weatherObject, ' mm', ' in'));
    statsThree.appendChild(statTitle('PRECIPITATION'));

    // render forecast
    console.log('got up to checkpoint 1');
    const forecastObject = weatherObject.forecast.forecastday;
    const forecastDiv = document.querySelector('#forecast');
    console.log('got up to checkpoint two');

    forecastDiv.appendChild(forecastCard(forecastObject[0].day.maxtemp_c, forecastObject[0].day.mintemp_c, 'forecastOne'));
    forecastDiv.appendChild(forecastCard(forecastObject[1].day.maxtemp_c, forecastObject[1].day.mintemp_c, 'forecastTwo'));
    forecastDiv.appendChild(forecastCard(forecastObject[2].day.maxtemp_c, forecastObject[2].day.mintemp_c, 'forecastThree'));
};