import './css/styles.css';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputEl: document.querySelector('[search-box]'),
  ulEl: document.querySelector('.country-list'),
  countryEl: document.querySelector('.country-info'),
};
