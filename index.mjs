// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-type-of@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@esm/index.mjs";function s(s){if("object"!=typeof s||null===s)return!1;if(s instanceof ReferenceError)return!0;if(t(s))for(;s;){if("referenceerror"===r(s))return!0;s=e(s)}return!1}export{s as default};
//# sourceMappingURL=index.mjs.map
