import FetchDrinks from './fetchDrinks';
import cocktailModalMarkup from './cocktailModalMarkup';
import ingredientModalMarkup from './ingredientModalMarkup';
import refs from './refs';
const fetchDrinks = new FetchDrinks();
// -------------------------------------------------
let currentModalID = 0;
export default function listenLearnMoreBtns() {
  const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
  learnMoreBtns.forEach(el => el.addEventListener('click', showModalDrink));
}
async function showModalDrink(e) {
  fetchDrinks
    .byName(e.currentTarget.id)
    .then(targetedDrink => {
      const ingredientList = createIngredientList(targetedDrink[0]);
      refs.cocktailModalContent.innerHTML = cocktailModalMarkup(
        targetedDrink[0],
        ingredientList
      );
      refs.cocktailModal.classList.remove('visually-hidden');
      currentModalID = targetedDrink[0].idDrink;
      console.log(currentModalID);
    })
    .then(() => {
      const ingredients = document.querySelectorAll(
        '.modal-cocktail__item-link'
      );
      ingredients.forEach(el =>
        el.addEventListener('click', showModalIngregients)
      );
    });
}
function createIngredientList(targetedDrink) {
  const markup = [];
  for (let key in targetedDrink) {
    if (key.includes('strIngredient') && targetedDrink[key] != null) {
      markup.push(`<li class="modal-cocktail__item">
        <a class="modal-cocktail__item-link" id="${targetedDrink[key]}">${targetedDrink[key]}</a>
      </li>
      `);
    }
  }
  return markup.join('');
}
function showModalIngregients(e) {
  refs.ingredientMOdal.classList.remove('visually-hidden');
  fetchDrinks.ingredient(e.currentTarget.id).then(p => {
    const ingredientDetails = createIngredientDetails(p);
    refs.ingredientMOdalContent.innerHTML = ingredientModalMarkup(
      p,
      ingredientDetails
    );
  });
}
function createIngredientDetails(ingredient) {
  let abv = ingredient.strABV;
  if (ingredient.strABV == null) {
    abv = '0';
  }
  return `<li class="modal-cocktail__item">
        <a class="modal-cocktail__item-link">✶ Type: ${ingredient.strType}</a>
      </li>
      
      <li class="modal-cocktail__item">
        <a class="modal-cocktail__item-link"
          >✶ Alcohol by volume: ${abv}%</a
        >
      </li>`;
}
