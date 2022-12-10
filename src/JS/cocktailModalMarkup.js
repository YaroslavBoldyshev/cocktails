export default function cocktailModalMarkup(drink, ingredientList) {
  return `
    <h1 class="modal-hero">${drink.strDrink}</h1>

    <h2 class="modal-description">Instractions:</h2>

    <p class="modal-description__text">
      ${drink.strInstructions}
    </p>

    <img
      class="modal-images"
      src="${drink.strDrinkThumb}"
      alt="${drink.strDrink}"
      width="280"
      height="280"
    />

    <h2 class="modal-ingredients">INGREDIENTS</h2>

    <h3 class="modal-ingredients__cocktail">Per cocktail</h3>
    
    <ul class="modal-cocktail list">
      ${ingredientList}
    </ul>

    <div class="modal-wrapper">
      <button type="button" class="modal-wrapper__btn" data-modal-open>
        <span class="modal-wrapper__text">Add to favorite</span>
      </button>
    </div>
`;
}
