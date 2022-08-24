const MODULE = require('module');

const mocks = new Map()

const _require = MODULE.prototype.require
// require
MODULE.prototype.require = function (id = '') {
  const newRequire = MODULE.createRequireFromPath(this.filename)
  const targetPath = newRequire.resolve(id)
  if (mocks.has(targetPath)) {
    return _require.call(this, mocks.get(targetPath))
  }
  return _require.call(this, id)
}
// export
module.exports = function (_module) {
  const __require__ = MODULE.createRequireFromPath(_module.filename)
  return {
    mock(source, dist) {
      const sourcePath = __require__.resolve(source)
      const distPath = __require__.resolve(dist)
      if (!mocks.has(sourcePath)) {
        mocks.set(sourcePath, distPath)
      }
      return distPath
    }
  }
}
