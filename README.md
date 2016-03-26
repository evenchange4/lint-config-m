# lint-config-m

> Lint config with eslint and stylelint.

[![Travis][build-badge]][build] [![npm package][npm-badge]][npm] [![Coverage Status][coveralls-badge]][coveralls]

[build-badge]: https://img.shields.io/travis/evenchange4/react-lifecycle-hoc/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/react-lifecycle-hoc

[npm-badge]: https://img.shields.io/npm/v/react-lifecycle-hoc.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-lifecycle-hoc

[coveralls-badge]: https://img.shields.io/coveralls/evenchange4/react-lifecycle-hoc/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/evenchange4/react-lifecycle-hoc

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
