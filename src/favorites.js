import refs from './JS/refs';
import Storage from './JS/storage';
import Plagination from './JS/plagination';
import cocktailMarkup from './JS/cocktailMarkup';
import {
  listenLearnMoreBtns,
  currentModalID,
  currentIngredientModal,
} from './JS/learnMoreBtns';

const plagination = new Plagination();
const storage = new Storage();
if (true) {
  //  тут має бути if local storage ('page')==1 .... і т. д.
  swhowCocktailsPage();
} else {
  swhowIngredientsPage();
}

function swhowCocktailsPage() {
  if (storage.hasDrinks()) {
    createFavCocktailsList();
  } else {
    showFavCocktailErr();
  }
}
function swhowIngredientsPage() {
  if (storage.hasIngredients) {
    createFavIngredientsList();
  } else {
    showIngredientsErr();
  }
}
function createFavCocktailsList() {
  const numberOfItems = plagination.itemsPerPage();
  const storageCocktails = localStorage.getItem('cocktails');
  const savedDrinks = JSON.parse(storageCocktails);

  savedDrinks.map((el, index) => {
    if (
      index >= (plagination.currentPage - 1) * numberOfItems &&
      index < plagination.currentPage * numberOfItems
    ) {
      refs.mainCocktailsList.insertAdjacentHTML(
        'beforeend',
        cocktailMarkup(el)
      );
    }

    const useHtml = refs.iconHeart.innerHTML;

    const favDrink = document.querySelector(`[id="${el.idDrink}"]`);

    favDrink.addEventListener('click', addDrink);
    listenLearnMoreBtns(el);
    const svg = favDrink.children[1];
    svg.innerHTML = useHtml;
  });
}
function showFavCocktailErr() {
  refs.favCocktailsErr.classList.remove('visually-hidden');
}
function addDrink(e) {
  storage.toggleDrink(e.currentTarget.id);
  if (e.currentTarget.children[0].textContent == 'Add to') {
    e.currentTarget.children[0].textContent = 'Remove';
  } else {
    e.currentTarget.children[0].textContent = 'Add to';
  }
  e.currentTarget.children[1].classList.toggle('icon-heart-not-active');
}
function showIngredientsErr() {
  refs.favIngredientsErr.classList.remove('visually-hidden');
}
