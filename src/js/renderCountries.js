import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function renderCountries(countriesObjects) {
    let countryLength = countriesObjects.length;
    let countries = [];

    const countriesList = document.querySelector(".country-list");
    const countryInfo = document.querySelector(".country-info");

    if(countryLength < 2) {
        let country = countriesObjects[0];
        countryInfo.innerHTML = `
        <div>
            <img src="${country.flags.svg}" width=25/>
            <span>${country.name}</span>
        </div>
        <div class="countryCard">
            <span>Capital: ${country.capital}</span>
            <span>Population: ${country.population}</span>
            <span>Languages: ${country.languages[0].name}</span>
        </div>
        `
        countriesList.innerHTML = '';
    } else if(countryLength >= 2 && countryLength <= 10) {
        countriesObjects.map(country => {
        countries += `
        <li class="country">
            <img src="${country.flags.svg}" width=25/>
            <span>${country.name}</span>
        </li>
        `
        countriesList.innerHTML = countries;
        })
        } else {
        Notify.info("Too many matches found. Please enter a more specific name.");
    }
}
