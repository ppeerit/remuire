# Remuire
Remuire is a Node.js Runtime mock utility that extends the require method of a module

## Installation

```bash
$ npm install --save-dev remuire
```
> Node.js >= 10.12.0

## Usage

```js
// a.test.js
const mock = require('remuire')(module)
mock('../src/a.js', './mock/a.js')

```

> You need to mock the module before it is referenced

## Explain
1. Due to remuire's rewrite of the require module, it is not recommended for use in a production environment and is recommended for use in a unit test environment
2. Remuire works in the global environment

## LICENSE
[MIT LICENSE](LICENSE)