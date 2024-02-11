import './style.css';
import getWeatherObject from './getWeatherObject.js';



// querying the required elements
const form = document.querySelector('form');
const input = document.querySelector('input');
const toggle = document.querySelector('#toggle');
const toggleSwitch = document.querySelector('#toggleSwitch');



let metric = 'celsius';

// listen for form submission
form.addEventListener('submit', (e) => {
   
    e.preventDefault();

    // get the weather object
    getWeatherObject(input.value, metric, true);
});

toggle.addEventListener('click', ()=>{
    toggleSwitch.classList.toggle('fahrenheit');
    metric = metric == 'celsius' ? 'fahrenheit' : 'celsius';
    getWeatherObject(input.value, metric, false);
});







