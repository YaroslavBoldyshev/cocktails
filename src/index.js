import FetchDrinks from './JS/fetchDrinks';
import cocktailMarkup from './JS/cocktailMarkup';
const refs = {
  addToFavoritesBtn: document.querySelectorAll('[data-favorite-cocktail]'),
  mainCocktailsList: document.querySelector('.cocktails-cards'),
  tempBlock: document.querySelector('.temp-block'),
  iconHeart: document.querySelector('.icon-heart-not-active'),
};
// refs.tempBlock.innerHTML = '';
const fetchDrinks = new FetchDrinks();

refs.addToFavoritesBtn.forEach(btn =>
  btn.addEventListener('click', toggleActive)
);
createRandomUI();

async function createRandomUI() {
  for (let i = 0; i < 9; i++) {
    const rnd = await fetchDrinks.random();
    rnd.then(p => {
      refs.mainCocktailsList.insertAdjacentHTML('beforeend', cocktailMarkup(p));
    });
  }
}
const learnMoreBtn = document.querySelectorAll('.learn-more-btn');
// setTimeout(addHearts, 1000);
// function addHearts() {
//   const allBtns = document.querySelectorAll('[data-favorite-cocktail]');
//   for (let i = 0; i < 9; i++) {
//     allBtns[i].insertAdjacentElement('beforeend', refs.iconHeart);
//   }
//   console.log(allBtns[1]);
// }
function toggleActive(e) {
  if (e.currentTarget.children[0].textContent == 'Add to') {
    e.currentTarget.children[0].textContent = 'Remove';
  } else {
    e.currentTarget.children[0].textContent = 'Add to';
  }
  e.currentTarget.children[1].classList.toggle('icon-heart-not-active');
}
