import './css/styles.css';
import fetchCountry from './fetchCountries';
import Notiflix from 'notiflix';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const refs = {
  inputEl: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(evt) {
  evt.preventDefault();
  name = evt.target.value.trim();

  if (!name) {
    refs.countryList.innerHTML = ' ';
    return;
  }

  fetchCountry(name).then(countries => {
    if (countries.length === 1) {
      refs.countryList.innerHTML = ' ';
      refs.countryInfo.innerHTML = ' ';
      createMarkupCountriesCard(countries);
      return;
    }
    if (countries.length < 10 && countries.length > 1) {
      refs.countryList.innerHTML = ' ';
      refs.countryInfo.innerHTML = ' ';
      createMarkupCountriesList(countries);
      return;
    }

    if (countries.length > 10) {
      refs.countryList.innerHTML = ' ';
      refs.countryInfo.innerHTML = ' ';
      Notiflix.Notify.info(
        'Too many matches found. Please enter a more specific name.'
      );
      return;
    }
  });
}

function createMarkupCountriesList(countries) {
  const markupList = countries
    .map(country => {
      return `<li><img src="${country.flags.svg}" alt="flag of country ${country.name.common}" width ='150px' /><h1>${country.name.common}</h1></li>`;
    })
    .join('');

  refs.countryList.innerHTML = markupList;
}

function createMarkupCountriesCard(countries) {
  const markupCard = countries
    .map(country => {
      return ` <img src="${country.flags.svg}" alt="flag of country ${
        country.name.common
      }" width ='450px'/>
      <h1>${country.name.common}</h1>
      <h2>Capital: ${country.capital}</h2>
      <h2>Population: ${country.population}</h2>
      <h2>Languages: ${Object.values(country.languages).join(', ')}</h2>`;
    })
    .join('');
  refs.countryInfo.innerHTML = markupCard;
}
