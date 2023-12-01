// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Object,e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function i(r){return"number"==typeof r}function o(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function a(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+o(i):o(i)+r,n&&(r="-"+r)),r}var c=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function l(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=a(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=a(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):c.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var s=Math.abs,p=String.prototype.toLowerCase,g=String.prototype.toUpperCase,d=String.prototype.replace,b=/e\+(\d)$/,y=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,m=/\.0*e/,j=/(\..*[^0])0*e/;function _(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":s(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=d.call(t,j,"$1e"),t=d.call(t,m,"e"),t=d.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=d.call(t,b,"e+0$1"),t=d.call(t,y,"e-0$1"),r.alternate&&(t=d.call(t,h,"$1."),t=d.call(t,w,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===g.call(r.specifier)?g.call(t):p.call(t)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var x=String.fromCharCode,k=isNaN,O=Array.isArray;function A(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,i,o,c,u,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",u=1,s=0;s<r.length;s++)if(f(n=r[s]))c+=n;else{if(e=void 0!==n.precision,!(n=A(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,k(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!k(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(o)?String(n.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),c+=n.arg||"",u+=1}return c}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function $(r){return"string"==typeof r}function C(r){var e,t,n;if(!$(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=P(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var I,R=Object.prototype,B=R.toString,L=R.__defineGetter__,G=R.__defineSetter__,Z=R.__lookupGetter__,W=R.__lookupSetter__;I=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===B.call(r))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===B.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(r,e)||W.call(r,e)?(n=r.__proto__,r.__proto__=R,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(r,e,t.get),a&&G&&G.call(r,e,t.set),r};var M=I;function N(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(r){return"boolean"==typeof r}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return X&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;var H,J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";H=z()?function(r){var e,t,n,i,o;if(null==r)return q.call(r);t=r[K],o=K,e=null!=(i=r)&&D.call(i,o);try{r[K]=void 0}catch(e){return q.call(r)}return n=q.call(r),e?r[K]=t:delete r[K],n}:function(r){return q.call(r)};var Q=H,Y=Boolean,rr=Boolean.prototype.toString;var er=z();function tr(r){return"object"==typeof r&&(r instanceof Y||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Q(r)))}function nr(r){return U(r)||tr(r)}function ir(){return new Function("return this;")()}N(nr,"isPrimitive",U),N(nr,"isObject",tr);var or="object"==typeof self?self:null,ar="object"==typeof window?window:null,cr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ur="object"==typeof cr?cr:null,lr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!U(r))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ir()}if(lr)return lr;if(or)return or;if(ar)return ar;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),sr=fr.document&&fr.document.childNodes,pr=Int8Array;function gr(){return/^\s*function\s*([^(]*)/i}var dr,br=/^\s*function\s*([^(]*)/i;N(gr,"REGEXP",br),dr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Q(r)};var yr=dr;function hr(r){return null!==r&&"object"==typeof r}var wr=function(r){if("function"!=typeof r)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!yr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(hr);function vr(r){var e,t,n,i;if(("Object"===(t=Q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=br.exec(n.toString()))return e[1]}return hr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}N(hr,"isObjectLikeArray",wr);var mr="function"==typeof e||"object"==typeof pr||"function"==typeof sr?function(r){return vr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?vr(r).toLowerCase():e};var jr,_r,Er=Object.getPrototypeOf;_r=Object.getPrototypeOf,jr="function"===mr(_r)?Er:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Sr=jr;function xr(e){return null==e?null:(e=r(e),Sr(e))}function kr(r){if("object"!=typeof r||null===r)return!1;if(r instanceof ReferenceError)return!0;if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===Q(r))return!0;r=xr(r)}return!1}(r))for(;r;){if("referenceerror"===mr(r))return!0;r=xr(r)}return!1}export{kr as default};
//# sourceMappingURL=mod.js.map
