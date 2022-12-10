export default function (drink, ingredientDetails) {
  return `
    <h1 class="modal-hero">${drink.strIngredient}</h1>

    <h2 class="modal-description">${drink.strType}</h2>

    <p class="modal-description__text">
      ${drink.strDescription}
    </p>

    <ul class="modal-cocktail list">
      ${ingredientDetails}
    </ul>

    <div class="modal-wrapper">
      <button type="button" class="modal-wrapper__btn" data-modal-open>
        <span class="modal-wrapper__text">Add to favorite</span>
      </button>
    </div>
    `;
}
