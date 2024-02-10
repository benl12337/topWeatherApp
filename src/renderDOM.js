export default function renderDOM(weatherObject, iconObject, metric) {


    // reset the weather contents
    const weatherContent = document.getElementById('weatherContent');
    weatherContent.innerHTML = `<div id="locationDiv"></div>
    <img id="locationCondition src="">
    <div class="today">
        <div id = "statsOne"  class="currentStats"></div>
        <div id = "statsTwo"  class="currentStats"></div>
        <div id = "statsThree"  class="currentStats"></div>
    </div>
    <div class="forecast">
        <div id = "forecastOne" class="forecastStats"></div>
        <div id = "forecastTwo" class="forecastStats"></div>
        <div id = "forecastThree" class="forecastStats"></div>
    </div>`;

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
    const statsOne = document.getElementById('statsOne');[]
    const windSpeed = document.createElement('h4');
    const windTitle = document.createElement('h5');
    windSpeed.textContent = metric == 'celsius' ? (weatherObject.current.wind_kph + ' km/h') : (weatherObject.current.wind_mph + ' mph');
    windTitle.textContent = 'WIND';
    statsOne.appendChild(windSpeed);
    statsOne.appendChild(windTitle);

    // render temp stats
    const statsTwo = document.getElementById('statsTwo');
    const temp = document.createElement('h4');
    const tempTitle = document.createElement('h5');
    temp.textContent = metric == 'celsius' ? (weatherObject.current.feelslike_c + ' °c') : (weatherObject.current.feelslike_f) + ' °f';
    tempTitle.textContent = 'FEELS LIKE';
    statsTwo.appendChild(temp);
    statsTwo.appendChild(tempTitle);

    // render temp stats
    const statsThree = document.getElementById('statsThree');
    const precip = document.createElement('h4');
    const precipTitle = document.createElement('h5');
    precip.textContent = metric == 'celsius' ? (weatherObject.current.precip_mm + ' mm') : (weatherObject.current.precip_in + ' in');
    precipTitle.textContent = 'PRECIPITATION';
    statsThree.appendChild(precip);
    statsThree.appendChild(precipTitle);

};