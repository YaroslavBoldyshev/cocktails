function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequire58cb;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},n.parcelRequire58cb=o),o.register("9vN2i",(function(e,n){t(e.exports,"default",(function(){return r}));class r{random(){return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((t=>t.json())).then((t=>t.drinks[0]))}byLetter(t){return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${t}`).then((t=>t.json())).then((t=>t.drinks))}byName(t){return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${t}`).then((t=>t.json())).then((t=>t.drinks))}byID(t){return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${t}`).then((t=>t.json())).then((t=>t.drinks[0]))}ingredient(t){return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${t}`).then((t=>t.json())).then((t=>t.ingredients[0]))}favorites(){}}})),o.register("6ZrOe",(function(e,n){t(e.exports,"default",(function(){return i}));const r=new(0,o("1W6ce").default);function i(t){let e="Add to",n="icon-heart-not-active";r.isInStorage(t.idDrink)&&(e="Remove",n="");return`<li class="cocktails-cards__item">\n        <img\n          class="cocktails__photo"\n          src="${t.strDrinkThumb}"\n          alt="Коктейль"\n          width="280px"\n        />\n\n        <div class="cocktails-description">\n          <h3 class="cocktails-head">${t.strDrink}</h3>\n          <div class="cocktails-buttons">\n            <button class="button learn-more-btn" type="button" id="${t.strDrink}">\n              Learn more\n            </button>\n            <button\n              class="button add-remove-btn active"\n              type="button"\n              data-favorite-cocktail \n              id="${t.idDrink}"\n            >\n              <span>${e}</span>\n\n              <svg class="${n}" width="20" height="20">\n                  \n              </svg>\n\n            </button>\n          </div>\n        </div>\n        </li>`}})),o.register("1W6ce",(function(e,n){t(e.exports,"default",(function(){return i}));const r=new(0,o("9vN2i").default);class i{async toggleDrink(t){const e=localStorage.getItem("cocktails"),n=JSON.parse(e),i=await r.byID(t);if(n.find((e=>e.idDrink===t))){const e=n.filter((e=>e.idDrink!=t));localStorage.setItem("cocktails",JSON.stringify(e))}else n.push(i),localStorage.setItem("cocktails",JSON.stringify(n))}async toggleIngredient(t){const e=localStorage.getItem("ingredients"),n=JSON.parse(e),i=await r.ingredient(t);if(n.find((e=>e.strIngredient===t))){const e=n.filter((e=>e.strIngredient!=t));localStorage.setItem("ingredients",JSON.stringify(e))}else n.push(i),localStorage.setItem("ingredients",JSON.stringify(n))}isInStorage(t){const e=localStorage.getItem("cocktails");return void 0!==JSON.parse(e).find((e=>e.idDrink===t))}isIngredientInStorage(t){const e=localStorage.getItem("ingredients");return void 0!==JSON.parse(e).find((e=>e.strIngredient===t))}hasDrinks(){const t=localStorage.getItem("cocktails");return 0!==JSON.parse(t).length}hasIngredients(){const t=localStorage.getItem("ingredients");return 0!==JSON.parse(t).length}constructor(){null===localStorage.getItem("cocktails")&&localStorage.setItem("cocktails",JSON.stringify([])),null===localStorage.getItem("ingredients")&&localStorage.setItem("ingredients",JSON.stringify([]))}}})),o.register("byv5z",(function(e,n){t(e.exports,"currentModalID",(function(){return u})),t(e.exports,"currentIngredientModal",(function(){return f})),t(e.exports,"listenLearnMoreBtns",(function(){return g})),t(e.exports,"createIngredientDetails",(function(){return m}));var r=o("9vN2i"),i=o("1PNhR"),s=o("kEQa9"),a=o("8Obb9"),l=o("1W6ce");const c=new(0,r.default),d=new(0,l.default);let u=0,f="";function g(){document.querySelectorAll(".learn-more-btn").forEach((t=>t.addEventListener("click",h)))}async function h(t){c.byName(t.currentTarget.id).then((t=>{const e=function(t){const e=[];for(let n in t)n.includes("strIngredient")&&null!=t[n]&&e.push(`<li class="modal-cocktail__item">\n        <a class="modal-cocktail__item-link" id="${t[n]}">✶ ${t[n]}</a>\n      </li>\n      `);return e.join("")}(t[0]);a.default.cocktailModalContent.innerHTML=(0,i.default)(t[0],e),a.default.cocktailModal.classList.remove("visually-hidden"),u=t[0].idDrink,d.isInStorage(u)?a.default.modalAddDrink.children[0].textContent="Remove from favorite":a.default.modalAddDrink.children[0].textContent="Add to favorite"})).then((()=>{document.querySelectorAll(".modal-cocktail__item-link").forEach((t=>t.addEventListener("click",p)))}))}function p(t){a.default.ingredientMOdal.classList.remove("visually-hidden"),localStorage.setItem("favIngredientmodalId",t.currentTarget.id),d.isIngredientInStorage(t.currentTarget.id)?a.default.modalAddIngredient.children[0].textContent="Remove from favorite":a.default.modalAddIngredient.children[0].textContent="Add to favorite",c.ingredient(t.currentTarget.id).then((t=>{f=t.strIngredient;const e=m(t);a.default.ingredientMOdalContent.innerHTML=(0,s.default)(t,e)}))}function m(t){let e=t.strABV;return null==t.strABV&&(e="0"),`<li class="modal-cocktail__item">\n        <a class="modal-cocktail__item-link">✶ Type: ${t.strType}</a>\n      </li>\n      \n      <li class="modal-cocktail__item">\n        <a class="modal-cocktail__item-link"\n          >✶ Alcohol by volume: ${e}%</a\n        >\n      </li>`}})),o.register("1PNhR",(function(e,n){function r(t,e){return`\n    \n<h1 class="modal-hero__drink">${t.strDrink}</h1>\n\n    <h2 class="modal-description__drink">Instructions:</h2>\n\n    <p class="modal-description__text-drink">\n      ${t.strInstructions}\n    </p>\n\n    <img\n      class="modal-images"\n      src="${t.strDrinkThumb}"\n      alt="${t.strDrink}"\n      width="280"\n      height="280"\n    />\n\n    <h2 class="modal-ingredients">INGREDIENTS</h2>\n\n    <h3 class="modal-ingredients__cocktail">Per cocktail</h3>\n\n    <ul class="modal-cocktail__drink list">\n      ${e}\n    </ul>`}t(e.exports,"default",(function(){return r}))})),o.register("kEQa9",(function(e,n){function r(t,e){let n=t.strType,r=t.strDescription;return null==t.strType&&(n="unknown"),null==t.strDescription&&(r="Sorry, description was not found."),`\n    <h1 class="modal-hero">${t.strIngredient}</h1>\n\n    <h2 class="modal-description">${n}</h2>\n\n    <p class="modal-description__text">\n      ${r}\n    </p>\n\n    <ul class="modal-cocktail list">\n      ${e}\n    </ul>\n     \n    `}t(e.exports,"default",(function(){return r}))})),o.register("2wGo8",(function(n,r){t(n.exports,"default",(function(){return s}));var i=o("iJYdK");class s{nextPage(){this.currentPage+=1}prevPage(){this.currentPage-=1}itemsPerPage(){let t=3;return window.screen.availWidth>768&&(t=6),window.screen.availWidth>1280&&(t=9),t}constructor(){e(i)(this,"currentPage",1)}}})),o.register("iJYdK",(function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}}));
//# sourceMappingURL=index.ce76df52.js.map
