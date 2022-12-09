export default function cocktailMarkup(drink) {
  const markup = `<li class="cocktails-cards__item">
        <img
          class="cocktails__photo"
          src="${drink.strDrinkThumb}"
          alt="Коктейль"
          width="280px"
        />

        <div class="cocktails-description">
          <h3 class="cocktails-head">${drink.strDrink}</h3>
          <div class="cocktails-buttons">
            <button class="button learn-more-btn" type="button">
              Learn more
            </button>
            <button
              class="button add-remove-btn active"
              type="button"
              data-favorite-cocktail
            >
              <span>Add to</span>
              <svg class="icon-heart-not-active" width="20" height="20">
                <use href="dist/sprite.f14d31f7.svg#icon-Heart"></use>
              </svg>
            </button>
          </div>
        </div>
        </li>`;

  return markup;
}
