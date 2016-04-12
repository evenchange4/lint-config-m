# lint-config-m

> Lint config with eslint and stylelint.

[![Travis][build-badge]][build] [![Codecov Status][codecov-badge]][codecov] [![npm package][npm-badge]][npm] [![npm downloads][npm-downloads]][npm] [![license][license-badge]][license]
[![Dependency Status][dependency-badge]][dependency] [![devDependency Status][devDependency-badge]][devDependency] [![peerDependency Status][peerDependency-badge]][peerDependency]

[build-badge]: https://img.shields.io/travis/evenchange4/lint-config-m/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/lint-config-m

[npm-badge]: https://img.shields.io/npm/v/lint-config-m.svg?style=flat-square
[npm]: https://www.npmjs.org/package/lint-config-m

[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/lint-config-m.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/lint-config-m?branch=master

[npm-downloads]: https://img.shields.io/npm/dt/lint-config-m.svg?style=flat-square

[license-badge]: https://img.shields.io/npm/l/lint-config-m.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/

[dependency-badge]: https://david-dm.org/evenchange4/lint-config-m.svg?style=flat-square
[dependency]: https://david-dm.org/evenchange4/lint-config-m
[devDependency-badge]: https://david-dm.org/evenchange4/lint-config-m/dev-status.svg?style=flat-square
[devDependency]: https://david-dm.org/evenchange4/lint-config-m#info=devDependencies
[peerDependency-badge]: https://david-dm.org/evenchange4/lint-config-m/peer-status.svg?style=flat-square
[peerDependency]: https://david-dm.org/evenchange4/lint-config-m#info=peerDependencies

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
