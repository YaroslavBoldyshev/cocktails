import FetchDrinks from './fetchDrinks';
import cocktailMarkup from './cocktailMarkup';
import Plagination from './plagination';
import { listenLearnMoreBtns, currentModalID } from './learnMoreBtns';
import refs from './refs';
import { addDrink } from '..';
export default { createPlaginationList };
let x;
const plagination = new Plagination();
const fetchDrinks = new FetchDrinks();
// ---------------------------------
refs.form.forEach(e => e.addEventListener('submit', handleSubmit));
async function handleSubmit(e) {
  e.preventDefault();
  refs.burger.classList.add('visually-hidden');
  refs.mainCocktailsList.innerHTML = '';
  console.dir(e.currentTarget.elements);
  const serchResult = await fetchDrinks.byName(
    e.currentTarget.elements['search-input'].value
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
  const numberOfItems = plagination.itemsPerPage();
  serchResult.map((el, index) => {
    if (
      index >= (plagination.currentPage - 1) * numberOfItems &&
      index < plagination.currentPage * numberOfItems
    ) {
      refs.mainCocktailsList.insertAdjacentHTML(
        'beforeend',
        cocktailMarkup(el)
      );
      // ------- adding icon----
      const useHtml = refs.iconHeart.innerHTML;
      const favDrink = document.querySelector(`[id="${el.idDrink}"]`);

      favDrink.addEventListener('click', addDrink);
      listenLearnMoreBtns(el);
      const svg = favDrink.children[1];
      svg.innerHTML = useHtml;
      // const icon = document.createElement('div');
      // icon.classList.add('icon-heart-container');
      // icon.innerHTML = refs.iconHeart.outerHTML;
      // const fav = document.querySelector(`[id="${el.idDrink}"]`);
      // fav.addEventListener('click', addDrink);
      // listenLearnMoreBtns(el);
      // fav.insertAdjacentElement('beforeend', icon);
      // console.log(icon);
      // ----------------------
    }
  });

  listenLearnMoreBtns();
}
function createPlaginationList(resultsNumber) {
  const plaginationMarkup = [];
  const numberOfItems = plagination.itemsPerPage();
  const numberOfPages = Math.ceil(resultsNumber / numberOfItems);
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
