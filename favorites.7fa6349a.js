var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire58cb;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire58cb=r),r.register("8qp6o",(function(e,t){var n,a,i,o;n=e.exports,a="default",i=function(){return d},Object.defineProperty(n,a,{get:i,set:o,enumerable:!0,configurable:!0});const c=new(0,r("1W6ce").default);function d(e){let t="Add to",n="icon-heart-not-active";c.isIngredientInStorage(e.strIngredient)&&(t="Remove",n="");let r=e.strType;return null==r&&(r=e.strIngredient),`<li class="cocktails-cards__item">\n        <div class="cocktails-description cocktails-cards__ingredients">\n          <h3 class="cocktails-head cocktails-head__ingredients">${e.strIngredient}</h3>\n          <p class="cocktails-description__ingredients">${r}</p>\n          <div class="cocktails-buttons cocktails-buttons__ingredients">\n            <button class="button learn-more-btn learn-more-ingred" type="button" id="${1+e.strIngredient}">\n              Learn more\n            </button>\n            <button\n              class="button add-remove-btn active"\n              type="button"\n              data-favorite-cocktail\n              id="${e.strIngredient}"\n            >\n              <span>${t}</span>\n              <svg class="${n}" width="20" height="20">\n                  \n              </svg>\n            </button>\n          </div>\n        </div>\n      </li>`}}));var a=r("8Obb9"),i=r("1W6ce"),o=r("2wGo8"),c=r("6ZrOe"),d=r("kEQa9"),l=r("byv5z"),s=r("8qp6o"),u=r("9vN2i");const g=new(0,o.default),f=new(0,u.default),v=new(0,i.default);function h(){const e=g.itemsPerPage(),t=localStorage.getItem("cocktails"),n=JSON.parse(t);n.length>9&&(!function(e){const t=[],n=g.itemsPerPage(),r=Math.ceil(e/n);for(let e=1;e<r+1;e++){let n;e==g.currentPage&&(n="pagination__active"),t.push(`<li><button type="button" class="pagination__numb pagination__item ${n}" id="${e}" data-page>${e}</button></li>`)}a.default.pages.innerHTML=t.join("");document.querySelectorAll("[data-page]").forEach((e=>{e.addEventListener("click",p)}))}(n.length),a.default.plagination.classList.remove("visually-hidden")),n.map(((t,n)=>{if(n>=(g.currentPage-1)*e&&n<g.currentPage*e){a.default.mainCocktailsList.insertAdjacentHTML("beforeend",(0,c.default)(t));const e=document.querySelector(`[id="${t.idDrink}"]`);e.addEventListener("click",L);const n=a.default.iconHeart.innerHTML;e.children[1].innerHTML=n,(0,l.listenLearnMoreBtns)(t)}}))}async function m(e){let t=e.currentTarget.id.slice(1);localStorage.setItem("favIngredientmodalId",t),v.isIngredientInStorage(t)?a.default.modalAddIngredient.children[0].textContent="Remove from favorite":a.default.modalAddIngredient.children[0].textContent="Add to favorite",a.default.ingredientMOdal.classList.remove("visually-hidden");const n=await f.ingredient(t),r=(0,l.createIngredientDetails)(n);a.default.ingredientMOdalContent.innerHTML=(0,d.default)(n,r)}function L(e){v.toggleDrink(e.currentTarget.id),"Add to"==e.currentTarget.children[0].textContent?e.currentTarget.children[0].textContent="Remove":e.currentTarget.children[0].textContent="Add to",e.currentTarget.children[1].classList.toggle("icon-heart-not-active")}function p(e){document.querySelectorAll("[data-page]").forEach((e=>e.classList.remove("pagination__active"))),e.target.classList.add("pagination__active"),g.currentPage=e.currentTarget.id,a.default.mainCocktailsList.innerHTML="";const t=a.default.pages.children.length;1!=g.currentPage&&a.default.arrowPrev.children[0].classList.remove("arrow-no-active"),1==g.currentPage&&a.default.arrowPrev.children[0].classList.add("arrow-no-active"),g.currentPage==t&&a.default.arrowNext.children[0].classList.add("arrow-no-active"),g.currentPage!=t&&a.default.arrowNext.children[0].classList.remove("arrow-no-active"),h()}function w(e){"Add to"==e.currentTarget.children[0].textContent?e.currentTarget.children[0].textContent="Remove":e.currentTarget.children[0].textContent="Add to",e.currentTarget.children[1].classList.toggle("icon-heart-not-active"),v.toggleIngredient(e.currentTarget.id)}a.default.modalAddDrink.addEventListener("click",(function(e){"Add to favorite"===e.target.textContent?e.target.textContent="Remove from favorite":e.target.textContent="Add to favorite";const t=document.querySelector(`[id="${l.currentModalID}"]`);v.isInStorage(l.currentModalID)?(t.children[0].textContent="Add to",t.children[1].classList.toggle("icon-heart-not-active")):(t.children[0].textContent="Remove",t.children[1].classList.toggle("icon-heart-not-active"));v.toggleDrink(l.currentModalID)})),a.default.modalAddIngredient.addEventListener("click",(function(e){"Add to favorite"==e.currentTarget.children[0].textContent?e.currentTarget.children[0].textContent="Remove from favorite":e.currentTarget.children[0].textContent="Add to favorite";let t=localStorage.getItem("favIngredientmodalId");if("ingredients"===localStorage.getItem("page")){const e=document.querySelector(`[id="${t}"]`);v.isIngredientInStorage(t)?(e.children[0].textContent="Add to",e.children[1].classList.toggle("icon-heart-not-active")):(e.children[0].textContent="Remove",e.children[1].classList.toggle("icon-heart-not-active"))}v.toggleIngredient(t)})),"cocktails"==localStorage.getItem("page")?(a.default.favIngredientsTitle.classList.add("visually-hidden"),v.hasDrinks()?h():a.default.favCocktailsErr.classList.remove("visually-hidden")):(a.default.favCocktailsTitle.classList.add("visually-hidden"),v.hasIngredients()?function(){g.itemsPerPage();const e=localStorage.getItem("ingredients");JSON.parse(e).map(((e,t)=>{{a.default.favIngredientsList.insertAdjacentHTML("beforeend",(0,s.default)(e));const t=document.querySelector(`[id="${e.strIngredient}"]`);t.addEventListener("click",w);const n=a.default.iconHeart.innerHTML;t.children[1].innerHTML=n,document.querySelector(`[id="${1+e.strIngredient}"]`).addEventListener("click",m)}}))}():a.default.favIngredientsErr.classList.remove("visually-hidden")),a.default.arrowNext.addEventListener("click",(function(){const e=a.default.pages.children.length;if(g.currentPage<e){g.nextPage(),a.default.mainCocktailsList.innerHTML="";document.querySelectorAll("[data-page]").forEach((e=>{e.classList.remove("pagination__active"),e.textContent==g.currentPage&&e.classList.add("pagination__active")})),1!=g.currentPage&&a.default.arrowPrev.children[0].classList.remove("arrow-no-active"),1==g.currentPage&&a.default.arrowPrev.children[0].classList.add("arrow-no-active"),g.currentPage==e&&a.default.arrowNext.children[0].classList.add("arrow-no-active"),g.currentPage!=e&&a.default.arrowNext.children[0].classList.remove("arrow-no-active"),h()}})),a.default.arrowPrev.addEventListener("click",(function(){const e=a.default.pages.children.length;if(g.currentPage>1){g.prevPage(),a.default.mainCocktailsList.innerHTML="";document.querySelectorAll("[data-page]").forEach((e=>{e.classList.remove("pagination__active"),e.textContent==g.currentPage&&e.classList.add("pagination__active")})),1!=g.currentPage&&a.default.arrowPrev.children[0].classList.remove("arrow-no-active"),1==g.currentPage&&a.default.arrowPrev.children[0].classList.add("arrow-no-active"),g.currentPage==e&&a.default.arrowNext.children[0].classList.add("arrow-no-active"),g.currentPage!=e&&a.default.arrowNext.children[0].classList.remove("arrow-no-active"),h()}}));
//# sourceMappingURL=favorites.7fa6349a.js.map