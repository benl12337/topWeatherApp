import './style.css';

async function getWeather(searchTerm) {

    //const fetchLink = 'http://api.weatherapi.com/v1/current.json?key=cf257d4d214f44b6993120155240402&q=' + searchTerm;
    const fetchLink = 'http://api.weatherapi.com/v1/forecast.json?key=cf257d4d214f44b6993120155240402&q=' + searchTerm + '&days=3';

    try {
        const response = await fetch(fetchLink, {mode: 'cors'});
        const weatherData = await response.json();
        console.log(weatherData);
        console.log(weatherData.location.name, weatherData.location.country);
    
        return weatherData;
    } catch (err) {
        console.error(err);
    }
}

getWeather('london');


