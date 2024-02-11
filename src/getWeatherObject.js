import renderDOM from './renderDOM.js';
import loadAnimation from './loadAnimation.js';

export default async function getWeatherObject(searchTerm, metric, animation) {

    const fetchLink = 'http://api.weatherapi.com/v1/forecast.json?key=cf257d4d214f44b6993120155240402&q=' + searchTerm + '&days=3';

    try {

        // put loading animation here
        document.querySelector('#weatherContent').innerHTML = '';
        document.querySelector('#weatherContent').appendChild(loadAnimation());

        // fetch the weather object
        const response = await fetch(fetchLink, { mode: 'cors' });
        const weatherObject = await response.json();

        console.log("logging the weather object" + weatherObject);
        // fetch the weather condition icons object
        const icons = await fetch('https://www.weatherapi.com/docs/weather_conditions.json', { mode: 'cors' });
        const iconObject = await icons.json();


        renderDOM(weatherObject, iconObject, metric, animation);
    }
    catch (err) {

        // weather content
        console.log("logging the error" + err);
        const weatherContent = document.querySelector('#weatherContent');
        weatherContent.innerHTML = '';
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Location not found. Please enter a valid location.'
        errorMessage.classList.add('error');
        weatherContent.appendChild(errorMessage);
    }
};