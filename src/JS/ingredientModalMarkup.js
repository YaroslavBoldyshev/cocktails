export default function ingredientModalMarkup(drink, ingredientDetails) {
  return `
    <h1 class="modal-hero">${drink.strIngredient}</h1>

    <h2 class="modal-description">${drink.strType}</h2>

    <p class="modal-description__text">
      ${drink.strDescription}
    </p>

    <ul class="modal-cocktail list">
      ${ingredientDetails}
    </ul>
     
    `;
}
