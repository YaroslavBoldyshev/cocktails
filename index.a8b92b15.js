var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},d=e.parcelRequire58cb;null==d&&((d=function(e){if(e in t)return t[e].exports;if(e in r){var d=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,d.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequire58cb=d);var a=d("8Obb9");function l(e){a.default.body.classList.toggle("dark-theme"),localStorage.setItem("theme",e.target.checked?"dark":"ligth")}a.default.switcher[0].addEventListener("change",(e=>{l(e)})),a.default.switcher[1].addEventListener("change",(e=>{l(e)})),"dark"===localStorage.getItem("theme")&&(a.default.body.classList.add("dark-theme"),a.default.switcher[0].checked=!0,a.default.switcher[1].checked=!0);
//# sourceMappingURL=index.a8b92b15.js.map
