import FetchDrinks from './JS/fetchDrinks';
import cocktailMarkup from './JS/cocktailMarkup';
import listenLearnMoreBtns from './JS/learnMoreBtns';
import Plagination from './JS/plagination';
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
  cocktailCloseBtn: document.querySelector('[data-modal-cocktail-close]'),
  ingredientCloseBtn: document.querySelector('[data-modal-ingredients-close]'),
};
export default refs;

// refs.tempBlock.innerHTML = '';
const fetchDrinks = new FetchDrinks();
const plagination = new Plagination();
// --------------------------------------

createRandomUI().then(learnMoreLogic);

async function createRandomUI() {
  const numberOfItems = plagination.itemsPerPage();
  await Promise.resolve().then(() => {
    for (let i = 0; i < numberOfItems; i++) {
      fetchDrinks
        .random()
        .then(p => {
          refs.mainCocktailsList.insertAdjacentHTML(
            'beforeend',
            cocktailMarkup(p)
          );
          return p;
        })
        .then(p => {
          const fav = document.querySelector(`[data="${p.idDrink}"]`);
          fav.addEventListener('click', toggleActive);
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
