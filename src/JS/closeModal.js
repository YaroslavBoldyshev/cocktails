import refs from '../index';
refs.cocktailCloseBtn.addEventListener('click', closeCocktailModal);
refs.ingredientCloseBtn.addEventListener('click', closeIngredientModal);
function closeCocktailModal() {
  refs.cocktailModal.classList.add('visually-hidden');
}
function closeIngredientModal() {
  refs.ingredientMOdal.classList.add('visually-hidden');
}
