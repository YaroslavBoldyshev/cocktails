export default class FetchDrinks {
  random() {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(p => p.json())
      .then(p => {
        return p.drinks[0];
      });
  }
  byLetter(letter) {
    return fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
  }
  byName(keyWord) {
    return fetch(
      `www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyWord}`
    ).then(p => p.json());
  }
  favorites() {}
}
