!function(){function t(t){return t&&t.__esModule?t.default:t}function n(t,n,e,r){Object.defineProperty(t,n,{get:e,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=e.parcelRequire58cb;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in o){var n=o[t];delete o[t];var e={id:t,exports:{}};return r[t]=e,n.call(e.exports,e,e.exports),e.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,n){o[t]=n},e.parcelRequire58cb=i),i.register("bpxeT",(function(t,n){"use strict";function e(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=t.apply(n,r);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}})),i.register("2TvXO",(function(t,n){var e=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,e){return t[n]=e}}function s(t,n,e,r){var o=n&&n.prototype instanceof v?n:v,i=Object.create(o.prototype),a=new T(r||[]);return i._invoke=function(t,n,e){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return E()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=S(a,e);if(c){if(c===g)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===f)throw r=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=h;var u=l(t,n,e);if("normal"===u.type){if(r=e.done?p:d,u.arg===g)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",g={};function v(){}function y(){}function m(){}var k={};u(k,i,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(j([])));b&&b!==e&&r.call(b,i)&&(k=b);var x=m.prototype=v.prototype=Object.create(k);function _(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function I(t,n){function e(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?n.resolve(f.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):n.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(i,i):i()}}function S(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,S(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function O(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function L(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:E}}function E(){return{value:n,done:!0}}return y.prototype=m,u(x,"constructor",m),u(m,"constructor",y),y.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===y||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(I.prototype),u(I.prototype,a,(function(){return this})),t.AsyncIterator=I,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new I(s(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=j,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}})),i.register("52cT6",(function(e,r){n(e.exports,"default",(function(){return c}));var o=i("8MBJY"),a=i("a2hTj"),c=function(){"use strict";function n(){t(o)(this,n)}return t(a)(n,[{key:"random",value:function(){return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((function(t){return t.json()})).then((function(t){return t.drinks[0]}))}},{key:"byLetter",value:function(t){return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=".concat(t)).then((function(t){return t.json()})).then((function(t){return t.drinks}))}},{key:"byName",value:function(t){return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(t)).then((function(t){return t.json()})).then((function(t){return t.drinks}))}},{key:"byID",value:function(t){return fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(t)).then((function(t){return t.json()})).then((function(t){return t.drinks[0]}))}},{key:"ingredient",value:function(t){return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=".concat(t)).then((function(t){return t.json()})).then((function(t){return t.ingredients[0]}))}},{key:"favorites",value:function(){}}]),n}()})),i.register("8MBJY",(function(t,n){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}})),i.register("a2hTj",(function(t,n){"use strict";function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,n,r){n&&e(t.prototype,n);r&&e(t,r);return t}})),i.register("DIZKv",(function(t,e){n(t.exports,"default",(function(){return o}));var r=new(0,i("gp0NK").default);function o(t){var n="Add to",e="icon-heart-not-active";return r.isInStorage(t.idDrink)&&(n="Remove",e=""),'<li class="cocktails-cards__item">\n        <img\n          class="cocktails__photo"\n          src="'.concat(t.strDrinkThumb,'"\n          alt="Коктейль"\n          width="280px"\n        />\n\n        <div class="cocktails-description">\n          <h3 class="cocktails-head">').concat(t.strDrink,'</h3>\n          <div class="cocktails-buttons">\n            <button class="button learn-more-btn" type="button" id="').concat(t.strDrink,'">\n              Learn more\n            </button>\n            <button\n              class="button add-remove-btn active"\n              type="button"\n              data-favorite-cocktail \n              id="').concat(t.idDrink,'"\n            >\n              <span>').concat(n,'</span>\n\n              <svg class="').concat(e,'" width="20" height="20">\n                  \n              </svg>\n\n            </button>\n          </div>\n        </div>\n        </li>')}})),i.register("gp0NK",(function(e,r){n(e.exports,"default",(function(){return l}));var o=i("bpxeT"),a=i("8MBJY"),c=i("a2hTj"),u=i("2TvXO"),s=new(0,i("52cT6").default),l=function(){"use strict";function n(){t(a)(this,n),null===localStorage.getItem("cocktails")&&localStorage.setItem("cocktails",JSON.stringify([])),null===localStorage.getItem("ingredients")&&localStorage.setItem("ingredients",JSON.stringify([]))}return t(c)(n,[{key:"toggleDrink",value:function(n){return t(o)(t(u).mark((function e(){var r,o,i,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=localStorage.getItem("cocktails"),o=JSON.parse(r),t.next=4,s.byID(n);case 4:i=t.sent,o.find((function(t){return t.idDrink===n}))?(a=o.filter((function(t){return t.idDrink!=n})),localStorage.setItem("cocktails",JSON.stringify(a))):(o.push(i),localStorage.setItem("cocktails",JSON.stringify(o)));case 7:case"end":return t.stop()}}),e)})))()}},{key:"toggleIngredient",value:function(n){return t(o)(t(u).mark((function e(){var r,o,i,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=localStorage.getItem("ingredients"),o=JSON.parse(r),t.next=4,s.ingredient(n);case 4:i=t.sent,o.find((function(t){return t.strIngredient===n}))?(a=o.filter((function(t){return t.strIngredient!=n})),localStorage.setItem("ingredients",JSON.stringify(a))):(o.push(i),localStorage.setItem("ingredients",JSON.stringify(o)));case 7:case"end":return t.stop()}}),e)})))()}},{key:"isInStorage",value:function(t){var n=localStorage.getItem("cocktails");return void 0!==JSON.parse(n).find((function(n){return n.idDrink===t}))}},{key:"isIngredientInStorage",value:function(t){var n=localStorage.getItem("ingredients");return void 0!==JSON.parse(n).find((function(n){return n.strIngredient===t}))}},{key:"hasDrinks",value:function(){var t=localStorage.getItem("cocktails");return 0!==JSON.parse(t).length}},{key:"hasIngredients",value:function(){var t=localStorage.getItem("ingredients");return 0!==JSON.parse(t).length}}]),n}()})),i.register("fSyzt",(function(e,r){n(e.exports,"currentModalID",(function(){return p})),n(e.exports,"currentIngredientModal",(function(){return g})),n(e.exports,"listenLearnMoreBtns",(function(){return v})),n(e.exports,"createIngredientDetails",(function(){return b}));var o=i("bpxeT"),a=i("2TvXO"),c=i("52cT6"),u=i("d7jht"),s=i("ln48k"),l=i("dZ50N"),f=i("gp0NK"),d=new(0,c.default),h=new(0,f.default),p=0,g="";function v(){document.querySelectorAll(".learn-more-btn").forEach((function(t){return t.addEventListener("click",y)}))}function y(t){return m.apply(this,arguments)}function m(){return(m=t(o)(t(a).mark((function n(e){return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d.byName(e.currentTarget.id).then((function(t){var n=k(t[0]);l.default.cocktailModalContent.innerHTML=(0,u.default)(t[0],n),l.default.cocktailModal.classList.remove("visually-hidden"),p=t[0].idDrink,h.isInStorage(p)?l.default.modalAddDrink.children[0].textContent="Remove from favorite":l.default.modalAddDrink.children[0].textContent="Add to favorite"})).then((function(){document.querySelectorAll(".modal-cocktail__item-link").forEach((function(t){return t.addEventListener("click",w)}))}));case 1:case"end":return t.stop()}}),n)})))).apply(this,arguments)}function k(t){var n=[];for(var e in t)e.includes("strIngredient")&&null!=t[e]&&n.push('<li class="modal-cocktail__item">\n        <a class="modal-cocktail__item-link" id="'.concat(t[e],'">✶ ').concat(t[e],"</a>\n      </li>\n      "));return n.join("")}function w(t){l.default.ingredientMOdal.classList.remove("visually-hidden"),localStorage.setItem("favIngredientmodalId",t.currentTarget.id),h.isIngredientInStorage(t.currentTarget.id)?l.default.modalAddIngredient.children[0].textContent="Remove from favorite":l.default.modalAddIngredient.children[0].textContent="Add to favorite",d.ingredient(t.currentTarget.id).then((function(t){g=t.strIngredient;var n=b(t);l.default.ingredientMOdalContent.innerHTML=(0,s.default)(t,n)}))}function b(t){var n=t.strABV;return null==t.strABV&&(n="0"),'<li class="modal-cocktail__item">\n        <a class="modal-cocktail__item-link">✶ Type: '.concat(t.strType,'</a>\n      </li>\n      \n      <li class="modal-cocktail__item">\n        <a class="modal-cocktail__item-link"\n          >✶ Alcohol by volume: ').concat(n,"%</a\n        >\n      </li>")}})),i.register("d7jht",(function(t,e){function r(t,n){return'\n    \n<h1 class="modal-hero__drink">'.concat(t.strDrink,'</h1>\n\n    <h2 class="modal-description__drink">Instructions:</h2>\n\n    <p class="modal-description__text-drink">\n      ').concat(t.strInstructions,'\n    </p>\n\n    <img\n      class="modal-images"\n      src="').concat(t.strDrinkThumb,'"\n      alt="').concat(t.strDrink,'"\n      width="280"\n      height="280"\n    />\n\n    <h2 class="modal-ingredients">INGREDIENTS</h2>\n\n    <h3 class="modal-ingredients__cocktail">Per cocktail</h3>\n\n    <ul class="modal-cocktail__drink list">\n      ').concat(n,"\n    </ul>")}n(t.exports,"default",(function(){return r}))})),i.register("ln48k",(function(t,e){function r(t,n){var e=t.strType,r=t.strDescription;return null==t.strType&&(e="unknown"),null==t.strDescription&&(r="Sorry, description was not found."),'\n    <h1 class="modal-hero">'.concat(t.strIngredient,'</h1>\n\n    <h2 class="modal-description">').concat(e,'</h2>\n\n    <p class="modal-description__text">\n      ').concat(r,'\n    </p>\n\n    <ul class="modal-cocktail list">\n      ').concat(n,"\n    </ul>\n     \n    ")}n(t.exports,"default",(function(){return r}))})),i.register("f3eg1",(function(e,r){n(e.exports,"default",(function(){return u}));var o=i("8MBJY"),a=i("a2hTj"),c=i("hKHmD"),u=function(){"use strict";function n(){t(o)(this,n),t(c)(this,"currentPage",1)}return t(a)(n,[{key:"nextPage",value:function(){this.currentPage+=1}},{key:"prevPage",value:function(){this.currentPage-=1}},{key:"itemsPerPage",value:function(){var t=3;return window.screen.availWidth>768&&(t=6),window.screen.availWidth>1280&&(t=9),t}}]),n}()})),i.register("hKHmD",(function(t,n){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,n,e){n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e;return t}}))}();
//# sourceMappingURL=index.89da4218.js.map
