// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isReferenceError=r()}(this,(function(){"use strict";var e=Object,r=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function i(e){return"number"==typeof e}function o(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+o(i):o(i)+e,n&&(e="-"+e)),e}var c=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function l(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):c.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var s=Math.abs,p=String.prototype.toLowerCase,g=String.prototype.toUpperCase,d=String.prototype.replace,b=/e\+(\d)$/,y=/e-(\d)$/,h=/^(\d+)$/,v=/^(\d+)e/,w=/\.0$/,m=/\.0*e/,j=/(\..*[^0])0*e/;function _(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=d.call(t,j,"$1e"),t=d.call(t,m,"e"),t=d.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=d.call(t,b,"e+0$1"),t=d.call(t,y,"e-0$1"),e.alternate&&(t=d.call(t,h,"$1."),t=d.call(t,v,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===g.call(e.specifier)?g.call(t):p.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var x=String.fromCharCode,k=isNaN,O=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,i,o,c,u,s,p;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",u=1,s=0;s<e.length;s++)if(f(n=e[s]))c+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,k(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=l(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!k(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(o)?String(n.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),c+=n.arg||"",u+=1}return c}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function P(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function $(e){return"string"==typeof e}function C(e){var r,t,n;if(!$(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=P(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var I,R=Object.prototype,B=R.toString,L=R.__defineGetter__,G=R.__defineSetter__,Z=R.__lookupGetter__,W=R.__lookupSetter__;I=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===B.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===B.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(e,r)||W.call(e,r)?(n=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(e,r,t.get),a&&G&&G.call(e,r,t.set),e};var M=I;function N(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return X&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;var H,J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";H=z()?function(e){var r,t,n,i,o;if(null==e)return q.call(e);t=e[K],o=K,r=null!=(i=e)&&D.call(i,o);try{e[K]=void 0}catch(r){return q.call(e)}return n=q.call(e),r?e[K]=t:delete e[K],n}:function(e){return q.call(e)};var Q=H,Y=Boolean,ee=Boolean.prototype.toString;var re=z();function te(e){return"object"==typeof e&&(e instanceof Y||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Q(e)))}function ne(e){return U(e)||te(e)}function ie(){return new Function("return this;")()}N(ne,"isPrimitive",U),N(ne,"isObject",te);var oe="object"==typeof self?self:null,ae="object"==typeof window?window:null,ce="object"==typeof global?global:null,ue="object"==typeof globalThis?globalThis:null;var le=function(e){if(arguments.length){if(!U(e))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ie()}if(ue)return ue;if(oe)return oe;if(ae)return ae;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=le.document&&le.document.childNodes,se=Int8Array;function pe(){return/^\s*function\s*([^(]*)/i}var ge,de=/^\s*function\s*([^(]*)/i;N(pe,"REGEXP",de),ge=Array.isArray?Array.isArray:function(e){return"[object Array]"===Q(e)};var be=ge;function ye(e){return null!==e&&"object"==typeof e}var he=function(e){if("function"!=typeof e)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!be(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ye);function ve(e){var r,t,n,i;if(("Object"===(t=Q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=de.exec(n.toString()))return r[1]}return ye(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}N(ye,"isObjectLikeArray",he);var we="function"==typeof r||"object"==typeof se||"function"==typeof fe?function(e){return ve(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ve(e).toLowerCase():r};var me,je,_e=Object.getPrototypeOf;je=Object.getPrototypeOf,me="function"===we(je)?_e:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===Q(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Ee=me;function Se(r){return null==r?null:(r=e(r),Ee(r))}return function(e){if("object"!=typeof e||null===e)return!1;if(e instanceof ReferenceError)return!0;if(function(e){if("object"!=typeof e||null===e)return!1;if(e instanceof Error)return!0;for(;e;){if("[object Error]"===Q(e))return!0;e=Se(e)}return!1}(e))for(;e;){if("referenceerror"===we(e))return!0;e=Se(e)}return!1}}));
//# sourceMappingURL=index.js.map
