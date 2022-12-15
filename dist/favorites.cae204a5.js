// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6c4RQ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "db7c3224cae204a5";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1pLZR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _refs = require("./JS/refs");
var _refsDefault = parcelHelpers.interopDefault(_refs);
var _storage = require("./JS/storage");
var _storageDefault = parcelHelpers.interopDefault(_storage);
var _plagination = require("./JS/plagination");
var _plaginationDefault = parcelHelpers.interopDefault(_plagination);
var _cocktailMarkup = require("./JS/cocktailMarkup");
var _cocktailMarkupDefault = parcelHelpers.interopDefault(_cocktailMarkup);
var _ingredientModalMarkup = require("./JS/ingredientModalMarkup");
var _ingredientModalMarkupDefault = parcelHelpers.interopDefault(_ingredientModalMarkup);
var _learnMoreBtns = require("./JS/learnMoreBtns");
// import { showNextPage, showPrevPage } from './JS/searchForm';
var _favIngredientsMarkup = require("./JS/favIngredientsMarkup");
var _favIngredientsMarkupDefault = parcelHelpers.interopDefault(_favIngredientsMarkup);
var _fetchDrinks = require("./JS/fetchDrinks");
var _fetchDrinksDefault = parcelHelpers.interopDefault(_fetchDrinks);
const plagination = new (0, _plaginationDefault.default)();
const fetchDrinks = new (0, _fetchDrinksDefault.default)();
const storage = new (0, _storageDefault.default)();
// let modalId = '1';
(0, _refsDefault.default).modalAddDrink.addEventListener("click", addDrinkModal);
(0, _refsDefault.default).modalAddIngredient.addEventListener("click", addIngredientModal);
// refs.modalAddIngredient.children[0].textContent = 'Remove from favorite';
let page = localStorage.getItem("page");
if (page == "cocktails") //  тут має бути if local storage ('page')==1 .... і т. д.
swhowCocktailsPage();
else swhowIngredientsPage();
function swhowCocktailsPage() {
    (0, _refsDefault.default).favIngredientsTitle.classList.add("visually-hidden");
    if (storage.hasDrinks()) createFavCocktailsList();
    else showFavCocktailErr();
}
function swhowIngredientsPage() {
    (0, _refsDefault.default).favCocktailsTitle.classList.add("visually-hidden");
    if (storage.hasIngredients()) createFavIngredientsList();
    else showIngredientsErr();
}
function createFavCocktailsList() {
    const numberOfItems = plagination.itemsPerPage();
    const storageCocktails = localStorage.getItem("cocktails");
    const savedDrinks = JSON.parse(storageCocktails);
    if (savedDrinks.length > 9) {
        createPlaginationList(savedDrinks.length);
        (0, _refsDefault.default).plagination.classList.remove("visually-hidden");
    }
    savedDrinks.map((el, index)=>{
        if (index >= (plagination.currentPage - 1) * numberOfItems && index < plagination.currentPage * numberOfItems) {
            (0, _refsDefault.default).mainCocktailsList.insertAdjacentHTML("beforeend", (0, _cocktailMarkupDefault.default)(el));
            const favDrink = document.querySelector(`[id="${el.idDrink}"]`);
            favDrink.addEventListener("click", addDrink);
            const useHtml = (0, _refsDefault.default).iconHeart.innerHTML;
            const svg = favDrink.children[1];
            svg.innerHTML = useHtml;
            (0, _learnMoreBtns.listenLearnMoreBtns)(el);
        }
    });
}
// ----------------------------------------------------------
function createFavIngredientsList() {
    const numberOfItems = plagination.itemsPerPage();
    const storageIngredients = localStorage.getItem("ingredients");
    const savedIngredients = JSON.parse(storageIngredients);
    // if (savedIngredients.length > 9) {
    //   createPlaginationList(savedIngredients.length);
    //   refs.plagination.classList.remove('visually-hidden');
    // }
    savedIngredients.map((el, index)=>{
        {
            (0, _refsDefault.default).favIngredientsList.insertAdjacentHTML("beforeend", (0, _favIngredientsMarkupDefault.default)(el));
            const favIngred = document.querySelector(`[id="${el.strIngredient}"]`);
            favIngred.addEventListener("click", addIngredient);
            const useHtml = (0, _refsDefault.default).iconHeart.innerHTML;
            const svg = favIngred.children[1];
            svg.innerHTML = useHtml;
            // ingredientDetailsBtn(el);
            const ingredientDetailsBtns = document.querySelector(`[id="${1 + el.strIngredient}"]`);
            ingredientDetailsBtns.addEventListener("click", showModalIngregients);
        }
    });
}
async function showModalIngregients(e) {
    let ingredientModalName = e.currentTarget.id.slice(1);
    let modalId = ingredientModalName;
    localStorage.setItem("favIngredientmodalId", modalId);
    console.log("modal id", modalId);
    console.log("e.currentTarget.id", e.currentTarget.id);
    if (storage.isIngredientInStorage(modalId)) (0, _refsDefault.default).modalAddIngredient.children[0].textContent = "Remove from favorite";
    else (0, _refsDefault.default).modalAddIngredient.children[0].textContent = "Add to favorite";
    (0, _refsDefault.default).ingredientMOdal.classList.remove("visually-hidden");
    // =====
    // const ingredientsStorage = localStorage.getItem('ingredients');
    // const arr = JSON.parse(ingredientsStorage);
    // const ingred = arr.find(el => el.strIngredient == modalId);
    // ===
    const ingred = await fetchDrinks.ingredient(modalId);
    const ingredientDetails = (0, _learnMoreBtns.createIngredientDetails)(ingred);
    (0, _refsDefault.default).ingredientMOdalContent.innerHTML = (0, _ingredientModalMarkupDefault.default)(ingred, ingredientDetails);
}
// function ingredientDetailsBtn() {
//   const ingredientDetailsBtns = document.querySelectorAll('learn-more-ingred');
// }
function addDrink(e) {
    storage.toggleDrink(e.currentTarget.id);
    if (e.currentTarget.children[0].textContent == "Add to") e.currentTarget.children[0].textContent = "Remove";
    else e.currentTarget.children[0].textContent = "Add to";
    e.currentTarget.children[1].classList.toggle("icon-heart-not-active");
}
function showIngredientsErr() {
    console.log("no items");
    (0, _refsDefault.default).favIngredientsErr.classList.remove("visually-hidden");
}
function showFavCocktailErr() {
    (0, _refsDefault.default).favCocktailsErr.classList.remove("visually-hidden");
}
function addDrinkModal(e) {
    if (e.target.textContent === "Add to favorite") e.target.textContent = "Remove from favorite";
    else e.target.textContent = "Add to favorite";
    const btn = document.querySelector(`[id="${(0, _learnMoreBtns.currentModalID)}"]`);
    console.log(storage.isInStorage((0, _learnMoreBtns.currentModalID)));
    if (storage.isInStorage((0, _learnMoreBtns.currentModalID))) {
        btn.children[0].textContent = "Add to";
        btn.children[1].classList.toggle("icon-heart-not-active");
    } else {
        btn.children[0].textContent = "Remove";
        btn.children[1].classList.toggle("icon-heart-not-active");
    }
    storage.toggleDrink((0, _learnMoreBtns.currentModalID));
}
function createPlaginationList(resultsNumber) {
    const plaginationMarkup = [];
    const numberOfItems = plagination.itemsPerPage();
    const numberOfPages = Math.ceil(resultsNumber / numberOfItems);
    for(let i = 1; i < numberOfPages + 1; i++){
        let active;
        if (i == plagination.currentPage) active = "pagination__active";
        plaginationMarkup.push(`<li><button type="button" class="pagination__numb pagination__item ${active}" id="${i}" data-page>${i}</button></li>`);
    }
    (0, _refsDefault.default).pages.innerHTML = plaginationMarkup.join("");
    const plagBtns = document.querySelectorAll("[data-page]");
    plagBtns.forEach((btn)=>{
        btn.addEventListener("click", plaginationClick);
    });
}
function plaginationClick(e) {
    const plagBtns1 = document.querySelectorAll("[data-page]");
    plagBtns1.forEach((btn)=>btn.classList.remove("pagination__active"));
    e.target.classList.add("pagination__active");
    plagination.currentPage = e.currentTarget.id;
    console.log(plagination.currentPage);
    (0, _refsDefault.default).mainCocktailsList.innerHTML = "";
    const numOfPages = (0, _refsDefault.default).pages.children.length;
    if (plagination.currentPage != 1) (0, _refsDefault.default).arrowPrev.children[0].classList.remove("arrow-no-active");
    if (plagination.currentPage == 1) (0, _refsDefault.default).arrowPrev.children[0].classList.add("arrow-no-active");
    if (plagination.currentPage == numOfPages) (0, _refsDefault.default).arrowNext.children[0].classList.add("arrow-no-active");
    if (plagination.currentPage != numOfPages) (0, _refsDefault.default).arrowNext.children[0].classList.remove("arrow-no-active");
    createFavCocktailsList();
}
// ====== inport this later
(0, _refsDefault.default).arrowNext.addEventListener("click", showNextPage);
(0, _refsDefault.default).arrowPrev.addEventListener("click", showPrevPage);
function showNextPage() {
    const numOfPages = (0, _refsDefault.default).pages.children.length;
    if (plagination.currentPage < numOfPages) {
        plagination.nextPage();
        (0, _refsDefault.default).mainCocktailsList.innerHTML = "";
        const plagBtns1 = document.querySelectorAll("[data-page]");
        plagBtns1.forEach((btn)=>{
            btn.classList.remove("pagination__active");
            if (btn.textContent == plagination.currentPage) btn.classList.add("pagination__active");
        });
        if (plagination.currentPage != 1) (0, _refsDefault.default).arrowPrev.children[0].classList.remove("arrow-no-active");
        if (plagination.currentPage == 1) (0, _refsDefault.default).arrowPrev.children[0].classList.add("arrow-no-active");
        if (plagination.currentPage == numOfPages) (0, _refsDefault.default).arrowNext.children[0].classList.add("arrow-no-active");
        if (plagination.currentPage != numOfPages) (0, _refsDefault.default).arrowNext.children[0].classList.remove("arrow-no-active");
        console.log(plagination.currentPage);
        createFavCocktailsList();
    }
}
function showPrevPage() {
    const numOfPages = (0, _refsDefault.default).pages.children.length;
    if (plagination.currentPage > 1) {
        plagination.prevPage();
        (0, _refsDefault.default).mainCocktailsList.innerHTML = "";
        const plagBtns1 = document.querySelectorAll("[data-page]");
        plagBtns1.forEach((btn)=>{
            btn.classList.remove("pagination__active");
            if (btn.textContent == plagination.currentPage) btn.classList.add("pagination__active");
        });
        if (plagination.currentPage != 1) (0, _refsDefault.default).arrowPrev.children[0].classList.remove("arrow-no-active");
        if (plagination.currentPage == 1) (0, _refsDefault.default).arrowPrev.children[0].classList.add("arrow-no-active");
        if (plagination.currentPage == numOfPages) (0, _refsDefault.default).arrowNext.children[0].classList.add("arrow-no-active");
        if (plagination.currentPage != numOfPages) (0, _refsDefault.default).arrowNext.children[0].classList.remove("arrow-no-active");
        console.log(plagination.currentPage);
        createFavCocktailsList();
    }
}
// ======
function addIngredient(e) {
    if (e.currentTarget.children[0].textContent == "Add to") e.currentTarget.children[0].textContent = "Remove";
    else e.currentTarget.children[0].textContent = "Add to";
    e.currentTarget.children[1].classList.toggle("icon-heart-not-active");
    storage.toggleIngredient(e.currentTarget.id);
}
function addIngredientModal(e) {
    if (e.currentTarget.children[0].textContent == "Add to favorite") e.currentTarget.children[0].textContent = "Remove from favorite";
    else e.currentTarget.children[0].textContent = "Add to favorite";
    let favIngredientmodalId = localStorage.getItem("favIngredientmodalId");
    console.log("id 11111", favIngredientmodalId);
    if (localStorage.getItem("page") === "ingredients") {
        const btn = document.querySelector(`[id="${favIngredientmodalId}"]`);
        console.log(btn);
        if (storage.isIngredientInStorage(favIngredientmodalId)) {
            btn.children[0].textContent = "Add to";
            console.log("add to");
            btn.children[1].classList.toggle("icon-heart-not-active");
        } else {
            btn.children[0].textContent = "Remove";
            btn.children[1].classList.toggle("icon-heart-not-active");
        }
    }
    storage.toggleIngredient(favIngredientmodalId);
}

},{"./JS/refs":"2SdoY","./JS/storage":"61jHw","./JS/plagination":"gvhGl","./JS/cocktailMarkup":"jAKy1","./JS/learnMoreBtns":"dXxCJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./JS/favIngredientsMarkup":"ePWWG","./JS/ingredientModalMarkup":"if63o","./JS/fetchDrinks":"fYJqY"}],"2SdoY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const refs = {
    addToFavoritesBtn: document.querySelectorAll("[data-favorite-cocktail]"),
    mainCocktailsList: document.querySelector(".cocktails-cards"),
    tempBlock: document.querySelector(".temp-block"),
    iconHeart: document.querySelector(".icon-heart-not-active"),
    cocktailModal: document.querySelector("[data-modal-cocktail]"),
    cocktailModalContent: document.querySelector("[data-modal-cocktail-content]"),
    ingredientMOdal: document.querySelector("[data-modal-ingredients]"),
    ingredientMOdalContent: document.querySelector("[data-modal-ingredients-content]"),
    cocktailCloseBtn: document.querySelector("[data-modal-cocktail-close]"),
    ingredientCloseBtn: document.querySelector("[data-modal-ingredients-close]"),
    modalAddDrink: document.querySelector("[data-add-drink]"),
    modalAddIngredient: document.querySelector("[data-add-ingredient]"),
    form: document.querySelectorAll(".js-form-search"),
    error: document.querySelector(".cocktails-err"),
    cocktailsSection: document.querySelector(".cocktails"),
    plagination: document.querySelector(".pagination"),
    plaginationList: document.querySelector(".pagination__list"),
    dots: document.querySelector(".dots"),
    pages: document.querySelector(".pages"),
    burger: document.querySelector(".burger-menu"),
    favCocktailsList: document.querySelector("[data-fav-cock-list]"),
    favCocktailsErr: document.querySelector("[data-fav-cock-err]"),
    favIngredientsErr: document.querySelector("[data-fav-ingred-err]"),
    favCocktailsTitle: document.querySelector("[data-cock-title]"),
    favIngredientsTitle: document.querySelector("[data-ingred-title]"),
    favIngredientsList: document.querySelector("[data-fav-ingred-list]"),
    switcher: document.querySelectorAll('[type="checkbox"]'),
    //  switcher:document.querySelector('[type="checkbox"]'),
    body: document.querySelector("body"),
    searchByAbcBtns: document.querySelector(".hero__keyset"),
    searchByAbcBtnsMobile: document.querySelector(".hero__form-select"),
    arrowPrev: document.querySelector(".pagination__prev"),
    arrowNext: document.querySelector(".pagination__next"),
    // switcherToggle: document.querySelector('[type="checkbox"]'),
    pageSelectFavCocktails: document.querySelectorAll("[data-page-cocktails]"),
    pageSelectFavIngredients: document.querySelectorAll("[data-page-ingredients]")
};
exports.default = refs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"61jHw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fetchDrinks = require("./fetchDrinks");
var _fetchDrinksDefault = parcelHelpers.interopDefault(_fetchDrinks);
const fetchDrinks = new (0, _fetchDrinksDefault.default)();
class Storage {
    constructor(){
        if (localStorage.getItem("cocktails") === null) localStorage.setItem("cocktails", JSON.stringify([]));
        if (localStorage.getItem("ingredients") === null) localStorage.setItem("ingredients", JSON.stringify([]));
    }
    async toggleDrink(id) {
        const cocktailsStorege = localStorage.getItem("cocktails");
        const arr = JSON.parse(cocktailsStorege);
        const drinkObj = await fetchDrinks.byID(id);
        const isInStorage = arr.find((el)=>el.idDrink === id);
        if (isInStorage) {
            const reducedArr = arr.filter((el)=>el.idDrink != id);
            localStorage.setItem("cocktails", JSON.stringify(reducedArr));
        } else {
            arr.push(drinkObj);
            localStorage.setItem("cocktails", JSON.stringify(arr));
        }
    }
    async toggleIngredient(name) {
        const ingredientsStorage = localStorage.getItem("ingredients");
        const arr = JSON.parse(ingredientsStorage);
        const ingredientObj = await fetchDrinks.ingredient(name);
        const isInStorage = arr.find((el)=>el.strIngredient === name);
        if (isInStorage) {
            const reducedArr = arr.filter((el)=>el.strIngredient != name);
            localStorage.setItem("ingredients", JSON.stringify(reducedArr));
        } else {
            arr.push(ingredientObj);
            localStorage.setItem("ingredients", JSON.stringify(arr));
        }
    }
    isInStorage(id) {
        const cocktailsStorege = localStorage.getItem("cocktails");
        const arr = JSON.parse(cocktailsStorege);
        // if (arr == null) {
        //   return false;
        // }
        const isInStorage = arr.find((el)=>el.idDrink === id);
        if (isInStorage === undefined) return false;
        else return true;
    }
    isIngredientInStorage(name) {
        const ingredientStorege = localStorage.getItem("ingredients");
        const arr = JSON.parse(ingredientStorege);
        const isInStorage = arr.find((el)=>el.strIngredient === name);
        if (isInStorage === undefined) return false;
        else return true;
    }
    hasDrinks() {
        const cocktailsStorege = localStorage.getItem("cocktails");
        const arr = JSON.parse(cocktailsStorege);
        if (arr.length === 0) return false;
        else return true;
    }
    hasIngredients() {
        const cocktailsStorege = localStorage.getItem("ingredients");
        const arr = JSON.parse(cocktailsStorege);
        if (arr.length === 0) return false;
        else return true;
    }
}
exports.default = Storage;

},{"./fetchDrinks":"fYJqY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fYJqY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class FetchDrinks {
    random() {
        return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((p)=>p.json()).then((p)=>p.drinks[0]);
    }
    byLetter(letter) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`).then((p)=>p.json()).then((p)=>p.drinks);
    }
    byName(keyWord) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyWord}`).then((p)=>p.json()).then((p)=>p.drinks);
    }
    byID(id) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then((p)=>p.json()).then((p)=>p.drinks[0]);
    }
    ingredient(keyWord) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${keyWord}`).then((p)=>p.json()).then((p)=>p.ingredients[0]);
    }
    favorites() {}
}
exports.default = FetchDrinks;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gvhGl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class plagination {
    currentPage = 1;
    nextPage() {
        this.currentPage += 1;
    }
    prevPage() {
        this.currentPage -= 1;
    }
    itemsPerPage() {
        let numberOfItems = 3;
        if (window.screen.availWidth > 768) numberOfItems = 6;
        if (window.screen.availWidth > 1280) numberOfItems = 9;
        return numberOfItems;
    }
}
exports.default = plagination;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jAKy1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _storage = require("./storage");
var _storageDefault = parcelHelpers.interopDefault(_storage);
const storage = new (0, _storageDefault.default)();
function cocktailMarkup(drink) {
    let btnText = "Add to";
    let iconClass = "icon-heart-not-active";
    if (storage.isInStorage(drink.idDrink)) {
        btnText = "Remove";
        iconClass = "";
    }
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
            <button class="button learn-more-btn" type="button" id="${drink.strDrink}">
              Learn more
            </button>
            <button
              class="button add-remove-btn active"
              type="button"
              data-favorite-cocktail 
              id="${drink.idDrink}"
            >
              <span>${btnText}</span>

              <svg class="${iconClass}" width="20" height="20">
                  
              </svg>

            </button>
          </div>
        </div>
        </li>`;
    return markup;
}
exports.default = cocktailMarkup;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./storage":"61jHw"}],"dXxCJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "listenLearnMoreBtns", ()=>listenLearnMoreBtns);
parcelHelpers.export(exports, "currentModalID", ()=>currentModalID);
parcelHelpers.export(exports, "currentIngredientModal", ()=>currentIngredientModal);
parcelHelpers.export(exports, "createIngredientDetails", ()=>createIngredientDetails);
var _fetchDrinks = require("./fetchDrinks");
var _fetchDrinksDefault = parcelHelpers.interopDefault(_fetchDrinks);
var _cocktailModalMarkup = require("./cocktailModalMarkup");
var _cocktailModalMarkupDefault = parcelHelpers.interopDefault(_cocktailModalMarkup);
var _ingredientModalMarkup = require("./ingredientModalMarkup");
var _ingredientModalMarkupDefault = parcelHelpers.interopDefault(_ingredientModalMarkup);
var _refs = require("./refs");
var _refsDefault = parcelHelpers.interopDefault(_refs);
var _storage = require("./storage");
var _storageDefault = parcelHelpers.interopDefault(_storage);
const fetchDrinks = new (0, _fetchDrinksDefault.default)();
const storage = new (0, _storageDefault.default)();
// -------------------------------------------------
let currentModalID = 0;
let currentIngredientModal = "";
function listenLearnMoreBtns() {
    const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
    learnMoreBtns.forEach((el)=>el.addEventListener("click", showModalDrink));
}
async function showModalDrink(e) {
    fetchDrinks.byName(e.currentTarget.id).then((targetedDrink)=>{
        const ingredientList = createIngredientList(targetedDrink[0]);
        (0, _refsDefault.default).cocktailModalContent.innerHTML = (0, _cocktailModalMarkupDefault.default)(targetedDrink[0], ingredientList);
        (0, _refsDefault.default).cocktailModal.classList.remove("visually-hidden");
        currentModalID = targetedDrink[0].idDrink;
        if (storage.isInStorage(currentModalID)) (0, _refsDefault.default).modalAddDrink.children[0].textContent = "Remove from favorite";
        else (0, _refsDefault.default).modalAddDrink.children[0].textContent = "Add to favorite";
    }).then(()=>{
        const ingredients = document.querySelectorAll(".modal-cocktail__item-link");
        ingredients.forEach((el)=>el.addEventListener("click", showModalIngregients));
    });
}
function createIngredientList(targetedDrink) {
    const markup = [];
    for(let key in targetedDrink)if (key.includes("strIngredient") && targetedDrink[key] != null) markup.push(`<li class="modal-cocktail__item">
        <a class="modal-cocktail__item-link" id="${targetedDrink[key]}">✶ ${targetedDrink[key]}</a>
      </li>
      `);
    return markup.join("");
}
function showModalIngregients(e) {
    (0, _refsDefault.default).ingredientMOdal.classList.remove("visually-hidden");
    localStorage.setItem("favIngredientmodalId", e.currentTarget.id);
    console.log("this item currently in storage:", e.currentTarget.id, storage.isIngredientInStorage(e.currentTarget.id));
    if (storage.isIngredientInStorage(e.currentTarget.id)) (0, _refsDefault.default).modalAddIngredient.children[0].textContent = "Remove from favorite";
    else (0, _refsDefault.default).modalAddIngredient.children[0].textContent = "Add to favorite";
    fetchDrinks.ingredient(e.currentTarget.id).then((p)=>{
        currentIngredientModal = p.strIngredient;
        const ingredientDetails = createIngredientDetails(p);
        (0, _refsDefault.default).ingredientMOdalContent.innerHTML = (0, _ingredientModalMarkupDefault.default)(p, ingredientDetails);
    });
}
function createIngredientDetails(ingredient) {
    let abv = ingredient.strABV;
    if (ingredient.strABV == null) abv = "0";
    return `<li class="modal-cocktail__item">
        <a class="modal-cocktail__item-link">✶ Type: ${ingredient.strType}</a>
      </li>
      
      <li class="modal-cocktail__item">
        <a class="modal-cocktail__item-link"
          >✶ Alcohol by volume: ${abv}%</a
        >
      </li>`;
}

},{"./fetchDrinks":"fYJqY","./cocktailModalMarkup":"bwgT2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./ingredientModalMarkup":"if63o","./refs":"2SdoY","./storage":"61jHw"}],"bwgT2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function cocktailModalMarkup(drink, ingredientList) {
    return `
    
<h1 class="modal-hero__drink">${drink.strDrink}</h1>

    <h2 class="modal-description__drink">Instructions:</h2>

    <p class="modal-description__text-drink">
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

    <ul class="modal-cocktail__drink list">
      ${ingredientList}
    </ul>`;
}
exports.default = cocktailModalMarkup;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"if63o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function ingredientModalMarkup(drink, ingredientDetails) {
    let type = drink.strType;
    let description = drink.strDescription;
    if (drink.strType == null) type = "unknown";
    if (drink.strDescription == null) description = "Sorry, description was not found.";
    return `
    <h1 class="modal-hero">${drink.strIngredient}</h1>

    <h2 class="modal-description">${type}</h2>

    <p class="modal-description__text">
      ${description}
    </p>

    <ul class="modal-cocktail list">
      ${ingredientDetails}
    </ul>
     
    `;
}
exports.default = ingredientModalMarkup;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ePWWG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _storage = require("./storage");
var _storageDefault = parcelHelpers.interopDefault(_storage);
const storage = new (0, _storageDefault.default)();
function favIngredMarkup(ingredient) {
    let btnText = "Add to";
    let iconClass = "icon-heart-not-active";
    if (storage.isIngredientInStorage(ingredient.strIngredient)) {
        btnText = "Remove";
        iconClass = "";
    }
    let strType = ingredient.strType;
    if (strType == null) strType = ingredient.strIngredient;
    return `<li class="cocktails-cards__item">
        <div class="cocktails-description cocktails-cards__ingredients">
          <h3 class="cocktails-head cocktails-head__ingredients">${ingredient.strIngredient}</h3>
          <p class="cocktails-description__ingredients">${strType}</p>
          <div class="cocktails-buttons cocktails-buttons__ingredients">
            <button class="button learn-more-btn learn-more-ingred" type="button" id="${1 + ingredient.strIngredient}">
              Learn more
            </button>
            <button
              class="button add-remove-btn active"
              type="button"
              data-favorite-cocktail
              id="${ingredient.strIngredient}"
            >
              <span>${btnText}</span>
              <svg class="${iconClass}" width="20" height="20">
                  
              </svg>
            </button>
          </div>
        </div>
      </li>`;
}
exports.default = favIngredMarkup;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./storage":"61jHw"}]},["6c4RQ","1pLZR"], "1pLZR", "parcelRequire58cb")

//# sourceMappingURL=favorites.cae204a5.js.map
