import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import renderCountries from './js/renderCountries';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector("#search-box");

input.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY));

function searchCountries(event) {
    let countryName = event.target.value.trim();
    fetchCountries(countryName)
    .then(countriesObjects => {
        renderCountries(countriesObjects);
    })
    .catch(error => {
        Notify.failure("Oops, there is no country with that name");
    })
}
