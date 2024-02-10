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

    // clean up the input value

    // get the weather object
    getWeatherObject(input.value, metric);
});

toggle.addEventListener('click', ()=>{
    console.log('yayysdfh');
    toggleSwitch.classList.toggle('farenheit');
    metric = metric == 'celsius' ? 'fahrenheit' : 'celsius';
    // add some logic to alter measurements
    // console.log(toggleSwitch.classList);
    getWeatherObject(input.value, metric);
});







