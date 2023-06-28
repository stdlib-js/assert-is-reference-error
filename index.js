// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).isReferenceError=r()}(this,(function(){"use strict";var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),y&&c&&c.call(t,r,e.set),t};var a=e;function p(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var j,_="function"==typeof Symbol?Symbol.toStringTag:"";j=s()?function(t){var r,e,n,o,u;if(null==t)return v.call(t);e=t[_],u=_,r=null!=(o=t)&&d.call(o,u);try{t[_]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[_]=e:delete t[_],n}:function(t){return v.call(t)};var g=j,m=Boolean.prototype.toString;var w=s();function h(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function O(t){return y(t)||h(t)}function E(){return new Function("return this;")()}p(O,"isPrimitive",y),p(O,"isObject",h);var S="object"==typeof self?self:null,A="object"==typeof window?window:null,P="object"==typeof global?global:null;var T=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(S)return S;if(A)return A;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),B=T.document&&T.document.childNodes,x=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var k,C=/^\s*function\s*([^(]*)/i;p(V,"REGEXP",C),k=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};var F=k;function G(t){return null!==t&&"object"==typeof t}var L=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!F(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(G);function R(t){var r,e,n,o;if(("Object"===(e=g(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=C.exec(n.toString()))return r[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(G,"isObjectLikeArray",L);var M="function"==typeof t||"object"==typeof x||"function"==typeof B?function(t){return R(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?R(t).toLowerCase():r};var I,N,U=Object.getPrototypeOf;N=Object.getPrototypeOf,I="function"===M(N)?U:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===g(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var X=I;function q(t){return null==t?null:(t=Object(t),X(t))}return function(t){if("object"!=typeof t||null===t)return!1;if(t instanceof ReferenceError)return!0;if(function(t){if("object"!=typeof t||null===t)return!1;if(t instanceof Error)return!0;for(;t;){if("[object Error]"===g(t))return!0;t=q(t)}return!1}(t))for(;t;){if("referenceerror"===M(t))return!0;t=q(t)}return!1}}));
//# sourceMappingURL=index.js.map
