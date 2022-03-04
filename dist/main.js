(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\n.content {\n    height: 100vh;\n    width: 100vw;\n}\n\n/* NAV BAR */\n\n.navDiv {\n    height: 15%;\n    \n    background-color: aliceblue;\n    \n    display: flex;\n    align-items: center;\n\n    padding: 0 6rem;\n}\n\n.navLogo {\n    margin-right: 6rem;\n}\n\n.navUL {\n    list-style-type: none;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    gap: 4rem;\n}\n\n.navLI {\n    cursor: pointer;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=()=>{o.renderNavBar();const e=document.createElement("h1");e.textContent="test contact us",document.querySelector(".content").appendChild(e);const t=document.createElement("div");document.querySelector(".content").appendChild(t);const n=document.createElement("p");n.textContent="123 fourth street, chicago, il 60615",t.appendChild(n);const r=document.createElement("p");r.textContent="every day from 2 am to 8 am",t.appendChild(r);const a=document.createElement("button");a.textContent="contact button",t.appendChild(a)},t=()=>{o.renderNavBar();const e=document.createElement("h1");e.textContent="test menu",document.querySelector(".content").appendChild(e);const t=document.createElement("div");document.querySelector(".content").appendChild(t),t.appendChild(new r("#","test item 1","$1","this is test item 1").createMenuItem()),t.appendChild(new r("#","test item 2","$2","this is test item 2").createMenuItem()),t.appendChild(new r("#","test item 3","$3","this is test item 3").createMenuItem()),t.appendChild(new r("#","test item 4","$4","this is test item 4").createMenuItem())};class r{constructor(e,t,n,r){this.imageSrc=e,this.itemName=t,this.itemPrice=n,this.itemDesc=r}createMenuItem(){const e=document.createElement("div"),t=document.createElement("img");t.src=this.imageSrc;const n=document.createElement("h2");n.textContent=this.itemName;const r=document.createElement("p");r.textContent=this.itemPrice;const o=document.createElement("p");return o.textContent=this.itemDesc,e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(o),e}}const o=(()=>{const n=document.createElement("div"),r=document.createElement("h1"),o=document.createElement("ul"),c=document.createElement("li"),i=document.createElement("li"),d=document.createElement("li");return{renderNavBar:()=>{n.classList.add("navDiv"),r.classList.add("navLogo"),r.textContent="restaurant name",o.classList.add("navUL"),c.classList.add("navLI"),i.classList.add("navLI"),d.classList.add("navLI"),c.textContent="home",i.textContent="menu",d.textContent="contact",o.appendChild(c),o.appendChild(i),o.appendChild(d),n.appendChild(r),n.appendChild(o),document.querySelector(".content").appendChild(n),c.addEventListener("click",(()=>{document.querySelector(".content").innerHTML="",a.renderHomePage()})),i.addEventListener("click",(()=>{document.querySelector(".content").innerHTML="",t()})),d.addEventListener("click",(()=>{document.querySelector(".content").innerHTML="",e()}))}}})(),a={renderHomePage:()=>{o.renderNavBar();const e=document.createElement("div"),t=document.createElement("h1");t.textContent="cool tagline about the restaurant";const n=document.createElement("h3");n.textContent="short subtitle!";const r=document.createElement("button");r.textContent="order btn";const a=document.createElement("div"),c=document.createElement("p");c.textContent="123 fourth street, chicago, il 60615";const i=document.createElement("p");i.textContent="every day from 2 am to 8 am",a.appendChild(i),a.appendChild(c),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(a),document.querySelector(".content").appendChild(e)}};var c=n(379),i=n.n(c),d=n(795),s=n.n(d),l=n(569),u=n.n(l),p=n(565),m=n.n(p),h=n(216),v=n.n(h),f=n(589),C=n.n(f),y=n(426),g={};g.styleTagTransform=C(),g.setAttributes=m(),g.insert=u().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=v(),i()(y.Z,g),y.Z&&y.Z.locals&&y.Z.locals,a.renderHomePage()})()})();