import Notiflix from 'notiflix';

export default function fetchCountry(name) {
  const BASE_URL = 'https://restcountries.com/v3.1/';
  return fetch(
    `${BASE_URL}name/${name}?fields=name,capital,population,languages,flags`
  ).then(response => {
    if (!response.ok) {
      throw new Error(
        Notiflix.Notify.failure(`Oops, there is no country with that name`)
      );
    }
    return response.json();
  });
}
