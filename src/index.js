import FetchDrinks from './JS/fetchDrinks';
import cocktailMarkup from './JS/cocktailMarkup';
import { listenLearnMoreBtns, currentModalID } from './JS/learnMoreBtns';
import Plagination from './JS/plagination';
import refs from './JS/refs';
import Storage from './JS/storage';
export { addDrink };

const fetchDrinks = new FetchDrinks();
const plagination = new Plagination();
const storage = new Storage();
// --------------------------------------
refs.modalAddDrink.addEventListener('click', addDrinkModal);
refs.modalAddIngredient.addEventListener('click', addIngredient);

createRandomUI();

async function createRandomUI() {
  const numberOfItems = plagination.itemsPerPage();
  for (let i = 0; i < numberOfItems; i++) {
    const drink = await fetchDrinks.random();

    refs.mainCocktailsList.insertAdjacentHTML(
      'beforeend',
      cocktailMarkup(drink)
    );

    const icon = document.createElement('div');
    icon.classList.add('icon-heart-container');
    icon.innerHTML = refs.iconHeart.outerHTML;

    const fav = document.querySelector(`[id="${drink.idDrink}"]`);
    fav.addEventListener('click', addDrink);
    listenLearnMoreBtns(drink);
    fav.insertAdjacentElement('beforeend', icon);
  }
  // refs.tempBlock.classList.add('visually-hidden');
}
function addDrink(e) {
  toggleActive(e);
  storage.toggleDrink(e.currentTarget.id);
}
function toggleActive(e) {
  if (e.currentTarget.children[0].textContent == 'Add to') {
    e.currentTarget.children[0].textContent = 'Remove';
  } else {
    e.currentTarget.children[0].textContent = 'Add to';
  }
  console.dir(e.currentTarget.children[1].children[0].classList);
  e.currentTarget.children[1].children[0].classList.toggle(
    'icon-heart-not-active'
  );
}

function addDrinkModal(e) {
  if (e.target.textContent === 'Add to favorite') {
    e.target.textContent = 'Remove from favorite';
  } else {
    e.target.textContent = 'Add to favorite';
  }
  storage.toggleDrink(currentModalID);

  const btn = document.querySelector(`[id="${currentModalID}"]`);
  if (storage.isInStorage(currentModalID)) {
    console.log('remove');
    btn.children[0].textContent == 'Remove';
    btn.children[1].classList.toggle('icon-heart-not-active');
  } else {
    console.log('remove');
    btn.children[0].textContent = 'Add to';
    btn.children[1].classList.toggle('icon-heart-not-active');
  }
  // if (btn.children[0].textContent == 'Add to') {
  //   btn.children[0].textContent = 'Remove';
  // } else {
  //   btn.children[0].textContent = 'Add to';
  // }
}
function addIngredient(e) {
  if (e.target.textContent === 'Add to favorite') {
    e.target.textContent = 'Remove from favorite';
  } else {
    e.target.textContent = 'Add to favorite';
  }
}
