import FetchDrinks from './fetchDrinks';
import cocktailMarkup from './cocktailMarkup';
import Plagination from './plagination';
import listenLearnMoreBtns from './learnMoreBtns';
const refs = {
  form: document.querySelector('.form-search-tablet'),
  error: document.querySelector('.cocktails-err'),
  cocktailsSection: document.querySelector('.cocktails'),
  mainCocktailsList: document.querySelector('.cocktails-cards'),
  plagination: document.querySelector('.pagination'),
  plaginationList: document.querySelector('.pagination__list'),
  dots: document.querySelector('.dots'),
  pages: document.querySelector('.pages'),
};
let x;
const plagination = new Plagination();
const fetchDrinks = new FetchDrinks();
// ---------------------------------
refs.form.addEventListener('submit', handleSubmit);
async function handleSubmit(e) {
  e.preventDefault();
  refs.mainCocktailsList.innerHTML = '';

  const serchResult = await fetchDrinks.byName(
    e.target.elements.searchInput.value
  );
  x = serchResult;
  if (serchResult != null && serchResult.length > 9) {
    createPlaginationList(serchResult.length);
    refs.plagination.classList.remove('visually-hidden');
  }
  console.log('res', serchResult);
  if (serchResult == null) {
    refs.cocktailsSection.classList.add('visually-hidden');
    refs.error.classList.remove('visually-hidden');
    refs.plagination.classList.add('visually-hidden');
  } else {
    refs.error.classList.add('visually-hidden');
    refs.cocktailsSection.classList.remove('visually-hidden');
    showSearchResults(serchResult);
  }
}
function showSearchResults(serchResult) {
  serchResult.map((el, index) => {
    if (
      index >= (plagination.currentPage - 1) * 9 &&
      index < plagination.currentPage * 9
    ) {
      refs.mainCocktailsList.insertAdjacentHTML(
        'beforeend',
        cocktailMarkup(el)
      );
    }
  });
  listenLearnMoreBtns();
}
function createPlaginationList(resultsNumber) {
  const plaginationMarkup = [];
  const numberOfPages = Math.ceil(resultsNumber / 9);
  for (let i = 1; i < numberOfPages + 1; i++) {
    plaginationMarkup.push(
      `<li><button type="button" class="pagination__numb pagination__item" id="${i}" data-page><span>${i}</span></button></li>`
    );
  }
  refs.pages.innerHTML = plaginationMarkup.join('');
  const plagBtns = document.querySelectorAll('[data-page]');
  plagBtns.forEach(btn => {
    btn.addEventListener('click', plaginationClick);
  });
}

async function plaginationClick(e) {
  const plagBtns1 = document.querySelectorAll('[data-page]');
  plagBtns1.forEach(btn => btn.classList.remove('pagination__active'));
  e.target.classList.add('pagination__active');
  plagination.currentPage = e.currentTarget.id;
  console.log(plagination.currentPage);
  refs.mainCocktailsList.innerHTML = '';
  showSearchResults(x);
}
