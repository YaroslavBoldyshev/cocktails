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
})({"igsCX":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "e41b5915956df3a3";
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

},{}],"8nBsd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPlaginationList", ()=>createPlaginationList);
parcelHelpers.export(exports, "handleSubmit", ()=>handleSubmit);
var _fetchDrinks = require("./fetchDrinks");
var _fetchDrinksDefault = parcelHelpers.interopDefault(_fetchDrinks);
var _cocktailMarkup = require("./cocktailMarkup");
var _cocktailMarkupDefault = parcelHelpers.interopDefault(_cocktailMarkup);
var _plagination = require("./plagination");
var _plaginationDefault = parcelHelpers.interopDefault(_plagination);
var _learnMoreBtns = require("./learnMoreBtns");
var _refs = require("./refs");
var _refsDefault = parcelHelpers.interopDefault(_refs);
var _storage = require("./storage");
var _storageDefault = parcelHelpers.interopDefault(_storage);
// import { addDrink } from '..';
let x;
const plagination = new (0, _plaginationDefault.default)();
const fetchDrinks = new (0, _fetchDrinksDefault.default)();
const storage = new (0, _storageDefault.default)();
// ---------------------------------
(0, _refsDefault.default).searchByAbcBtnsMobile.addEventListener("click", searchByAbcMobile);
(0, _refsDefault.default).searchByAbcBtns.addEventListener("click", searchByAbc);
function searchByAbc(e) {
    if (e.target != e.currentTarget) handleSubmit(e);
}
function searchByAbcMobile(e) {
    if (e.target != e.currentTarget && e.target.nodeName != "BUTTON") {
        console.log(e.currentTarget.nodeName);
        handleSubmit(e);
    }
}
(0, _refsDefault.default).form.forEach((e)=>e.addEventListener("submit", handleSubmit));
async function handleSubmit(e) {
    e.preventDefault();
    (0, _refsDefault.default).plagination.classList.add("visually-hidden");
    plagination.currentPage = 1;
    (0, _refsDefault.default).burger.classList.add("visually-hidden");
    (0, _refsDefault.default).mainCocktailsList.innerHTML = "";
    let searchKeyWord;
    let serchResult;
    console.dir(e.currentTarget.nodeName);
    if (e.currentTarget.nodeName == "UL" || e.currentTarget.nodeName == "DIV") {
        searchKeyWord = e.target.textContent;
        serchResult = await fetchDrinks.byLetter(searchKeyWord);
    } else {
        searchKeyWord = e.currentTarget.elements.searchInput.value;
        serchResult = await fetchDrinks.byName(searchKeyWord);
    }
    x = serchResult;
    if (serchResult != null && serchResult.length > 9) {
        createPlaginationList(serchResult.length);
        (0, _refsDefault.default).plagination.classList.remove("visually-hidden");
    }
    console.log("res", serchResult);
    if (serchResult == null) {
        (0, _refsDefault.default).cocktailsSection.classList.add("visually-hidden");
        (0, _refsDefault.default).error.classList.remove("visually-hidden");
        (0, _refsDefault.default).plagination.classList.add("visually-hidden");
    } else {
        (0, _refsDefault.default).error.classList.add("visually-hidden");
        (0, _refsDefault.default).cocktailsSection.classList.remove("visually-hidden");
        showSearchResults(serchResult);
    }
}
function showSearchResults(serchResult) {
    const numberOfItems = plagination.itemsPerPage();
    serchResult.map((el, index)=>{
        if (index >= (plagination.currentPage - 1) * numberOfItems && index < plagination.currentPage * numberOfItems) {
            (0, _refsDefault.default).mainCocktailsList.insertAdjacentHTML("beforeend", (0, _cocktailMarkupDefault.default)(el));
            // ------- adding icon----
            const useHtml = (0, _refsDefault.default).iconHeart.innerHTML;
            const favDrink = document.querySelector(`[id="${el.idDrink}"]`);
            favDrink.addEventListener("click", addDrink);
            (0, _learnMoreBtns.listenLearnMoreBtns)(el);
            const svg = favDrink.children[1];
            svg.innerHTML = useHtml;
        // ----------------------
        }
    });
    function addDrink(e) {
        toggleActive(e);
        storage.toggleDrink(e.currentTarget.id);
    }
    function toggleActive(e) {
        if (e.currentTarget.children[0].textContent === "Add to") e.currentTarget.children[0].textContent = "Remove";
        else e.currentTarget.children[0].textContent = "Add to";
        e.currentTarget.children[1].classList.toggle("icon-heart-not-active");
    }
// listenLearnMoreBtns();
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
async function plaginationClick(e) {
    const plagBtns1 = document.querySelectorAll("[data-page]");
    plagBtns1.forEach((btn)=>btn.classList.remove("pagination__active"));
    e.target.classList.add("pagination__active");
    plagination.currentPage = +e.currentTarget.id;
    console.log(plagination.currentPage);
    (0, _refsDefault.default).mainCocktailsList.innerHTML = "";
    const numOfPages = (0, _refsDefault.default).pages.children.length;
    if (plagination.currentPage != 1) (0, _refsDefault.default).arrowPrev.children[0].classList.remove("arrow-no-active");
    if (plagination.currentPage == 1) (0, _refsDefault.default).arrowPrev.children[0].classList.add("arrow-no-active");
    if (plagination.currentPage == numOfPages) (0, _refsDefault.default).arrowNext.children[0].classList.add("arrow-no-active");
    if (plagination.currentPage != numOfPages) (0, _refsDefault.default).arrowNext.children[0].classList.remove("arrow-no-active");
    showSearchResults(x);
}
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
        showSearchResults(x);
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
        showSearchResults(x);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./fetchDrinks":"fYJqY","./cocktailMarkup":"jAKy1","./plagination":"gvhGl","./learnMoreBtns":"dXxCJ","./refs":"2SdoY","./storage":"61jHw"}]},["igsCX","8nBsd"], "8nBsd", "parcelRequire58cb")

//# sourceMappingURL=index.956df3a3.js.map
