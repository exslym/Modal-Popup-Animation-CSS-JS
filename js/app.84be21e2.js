!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);window.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector("#modal"),t=document.querySelector(".open-button"),n=document.querySelector(".close-button");t.addEventListener("click",()=>{document.querySelector("html").classList.add("noScroll"),e.showModal()}),n.addEventListener("click",()=>{document.querySelector("html").classList.remove("noScroll"),e.setAttribute("closing",""),e.addEventListener("animationend",()=>{e.removeAttribute("closing"),e.close()},{once:!0})}),e.addEventListener("click",(function(t){"DIALOG"===t.target.nodeName&&(document.querySelector("html").classList.remove("noScroll"),e.setAttribute("closing",""),e.addEventListener("animationend",()=>{e.removeAttribute("closing"),e.close()},{once:!0}))}))}))},function(e,t,n){}]);
//# sourceMappingURL=app.84be21e2.js.map