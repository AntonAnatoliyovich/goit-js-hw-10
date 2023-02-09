export default function renderCountries(countriesObjects) {
    let countryLength = countriesObjects.length;
    let countries = [];

    const countriesList = document.querySelector(".country-list");
     // const countryInfo

    if(countryLength > 10) {
        console.log("Too many matches found. Please enter a more specific name.");
    } else if(countryLength >= 2 && countryLength <= 10) {
        countriesObjects.map(country => {
            countries += `<li class="country">
            <img src="${country.flags.svg}" width=25/>
            <span>${country.name}</span>
            </li>`
            countriesList.innerHTML = countries;
        })
    } else {
        let country = countriesObjects[0];
        // countryInfo.innerHTML = ``
    }
}


