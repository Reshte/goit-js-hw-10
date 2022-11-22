const refs = {
  searchForm: document.querySelector('#search-box'),
  articelsContainer: document.querySelector('.articels-list'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  console.log(e.currentTarget);
  const form = e.currentTarget.elements.query.value;
  console.log(form);

  const options = {
    headers: {
      authorization: '3d937d9acd60402c9bdad5ecd929a9d7',
    },
  };
  const URL =
    'https://newsapi.org/v2/everything?q=apple&language=en&pageSize=5&page=1';

  fetch(URL, options)
    .then(r => r.json())
    .then(console.log());
}
