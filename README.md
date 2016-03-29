# lint-config-m

> Lint config with eslint and stylelint.

[![Travis][build-badge]][build] [![Coverage Status][coveralls-badge]][coveralls] [![npm package][npm-badge]][npm] [![npm downloads][npm-downloads]][npm] [![license][license-badge]][license]

[build-badge]: https://img.shields.io/travis/evenchange4/lint-config-m/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/lint-config-m

[npm-badge]: https://img.shields.io/npm/v/lint-config-m.svg?style=flat-square
[npm]: https://www.npmjs.org/package/lint-config-m

[coveralls-badge]: https://img.shields.io/coveralls/evenchange4/lint-config-m/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/evenchange4/lint-config-m

[npm-downloads]: https://img.shields.io/npm/dt/lint-config-m.svg?style=flat-square

[license-badge]: https://img.shields.io/npm/l/lint-config-m.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/


## Installation

```console
$ npm install eslint stylelint lint-config-m --save-dev
```

## Usage

- eslint

```json
"eslintConfig": {
  "extends": [
    "./node_modules/lint-config-m/eslint"
  ]
}
```

## peerDependencies

* eslint
* babel-eslint
* eslint-config-airbnb
* eslint-plugin-ava
* eslint-plugin-react

* stylelint
* stylelint-config-suitcss

## Test

```
$ npm run test:watch
```

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests (`$ npm test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)
