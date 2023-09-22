<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isReferenceError

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a [ReferenceError][mdn-reference-error] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
isReferenceError = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-reference-error@v0.1.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var isReferenceError = require( 'path/to/vendor/umd/assert-is-reference-error/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-reference-error@v0.1.0-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.isReferenceError;
})();
</script>
```

#### isReferenceError( value )

Tests if a `value` is a [`ReferenceError`][mdn-reference-error] object.

```javascript
var bool = isReferenceError( new ReferenceError( 'beep' ) );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   This function should **not** be considered robust. While the function should **always** return `true` if provided a [`ReferenceError`][mdn-reference-error] (or a descendant) object, false positives may occur due to the fact that the [`ReferenceError`][mdn-reference-error] constructor inherits from [`Error`][mdn-error] and has no internal class of its own. Hence, [`ReferenceError`][mdn-reference-error] impersonation is possible.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-reference-error@v0.1.0-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var bool = isReferenceError( new ReferenceError( 'reference error' ) );
// returns true

bool = isReferenceError( new Error( 'error' ) );
// returns false

bool = isReferenceError( new EvalError( 'eval error' ) );
// returns false

bool = isReferenceError( new RangeError( 'range error' ) );
// returns false

bool = isReferenceError( new SyntaxError( 'syntax error' ) );
// returns false

bool = isReferenceError( new TypeError( 'type error' ) );
// returns false

bool = isReferenceError( new URIError( 'URI error' ) );
// returns false

bool = isReferenceError( {} );
// returns false

bool = isReferenceError( null );
// returns false

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-error`][@stdlib/assert/is-error]</span><span class="delimiter">: </span><span class="description">test if a value is an Error object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-reference-error.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-reference-error

[test-image]: https://github.com/stdlib-js/assert-is-reference-error/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/assert-is-reference-error/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-reference-error/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-reference-error?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-reference-error.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-reference-error/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-reference-error/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-reference-error/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-reference-error/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-reference-error/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-reference-error/main/LICENSE

[mdn-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

[mdn-reference-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError

<!-- <related-links> -->

[@stdlib/assert/is-error]: https://github.com/stdlib-js/assert-is-error/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
