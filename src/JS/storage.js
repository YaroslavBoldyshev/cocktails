import FetchDrinks from './fetchDrinks';
const fetchDrinks = new FetchDrinks();
export default class Storage {
  constructor() {
    localStorage.setItem('cocktails', JSON.stringify([]));
    localStorage.setItem('ingredients', JSON.stringify([]));
  }
  async toggleDrink(id) {
    const cocktailsStorege = localStorage.getItem('cocktails');
    const arr = JSON.parse(cocktailsStorege);
    const drinkObj = await fetchDrinks.byID(id);

    const isInStorage = arr.find(el => el.idDrink === id);
    if (isInStorage) {
      const reducedArr = arr.filter(el => el.idDrink != id);
      localStorage.setItem('cocktails', JSON.stringify(reducedArr));
    } else {
      arr.push(drinkObj);
      localStorage.setItem('cocktails', JSON.stringify(arr));
    }
  }
  async toggleIngredient(id) {}
  isInStorage(id) {
    const cocktailsStorege = localStorage.getItem('cocktails');
    const arr = JSON.parse(cocktailsStorege);
    const isInStorage = arr.find(el => el.idDrink === id);
    return isInStorage;
  }
}
