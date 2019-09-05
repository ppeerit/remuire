# remuire
remuire 是一款 Nodejs 运行时的 mock 工具，它扩展了模块的 require 方法


## 安装

```bash
$ npm install --save-dev remuire
```

> Node.js >= 10.12.0

## 使用

```js
// a.test.js
const remuire = require('remuire')(module)
// mock  src/a.js ===>>>>>> mock/a.js
remuire.mock('../src/a.js', './mock/a.js')

// 恢复所有模块
remuire.revover()

```

> 你需要在模块被引用之前进行 mock

## 说明
1. 由于 remuire 重写了 require 模块，请不要用于生产环境，推荐在单元测试环境使用
2. remuire 作用于全局环境

## 开源协议
[MIT LICENSE](LICENSE)