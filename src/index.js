import FetchDrinks from './JS/fetchDrinks';
import {burgerMenuOpenClose} from './JS/headerBurgerMenu';
import { renderKeyset } from './JS/hero';
import {renderSelectOptions} from './JS/hero';
import cocktailMarkup from './JS/cocktailMarkup';
import cocktailModalMarkup from './JS/cocktailModalMarkup';
import ingredientModalMarkup from './JS/ingredientModalMarkup';
import listenLearnMoreBtns from './JS/learnMoreBtns';
export const refs = {
  addToFavoritesBtn: document.querySelectorAll('[data-favorite-cocktail]'),
  mainCocktailsList: document.querySelector('.cocktails-cards'),
  tempBlock: document.querySelector('.temp-block'),
  iconHeart: document.querySelector('.icon-heart-not-active'),
  cocktailModal: document.querySelector('[data-modal-cocktail]'),
  cocktailModalContent: document.querySelector('[data-modal-cocktail-content]'),
  ingredientMOdal: document.querySelector('[data-modal-ingredients]'),
  ingredientMOdalContent: document.querySelector(
    '[data-modal-ingredients-content]'
  ),
};
export default refs;
console.dir(refs);
// refs.tempBlock.innerHTML = '';
const fetchDrinks = new FetchDrinks();
// --------------------------------------

createRandomUI().then(learnMoreLogic);

async function createRandomUI() {
  await Promise.resolve().then(() => {
    for (let i = 0; i < 9; i++) {
      fetchDrinks.random().then(p => {
        refs.mainCocktailsList.insertAdjacentHTML(
          'beforeend',
          cocktailMarkup(p)
        );
      });
    }
  });
}
function learnMoreLogic() {
  setTimeout(() => listenLearnMoreBtns(), 700);
}

function toggleActive(e) {
  if (e.currentTarget.children[0].textContent == 'Add to') {
    e.currentTarget.children[0].textContent = 'Remove';
  } else {
    e.currentTarget.children[0].textContent = 'Add to';
  }
  e.currentTarget.children[1].classList.toggle('icon-heart-not-active');
}
fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552');
