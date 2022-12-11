const refs = {
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
  modalAddDrink: document.querySelector('[data-add-drink]'),
  modalAddIngredient: document.querySelector('[data-add-ingredient]'),
};
export default refs;
