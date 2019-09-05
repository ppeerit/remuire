const MODULE = require('module');

module.exports = function (_module) {
  const __require__ = MODULE.createRequireFromPath(_module.filename)
  const mocks = new Map()

  const _require = MODULE.prototype.require;
  MODULE.prototype.require = function (id = '') {
    const newRequire = MODULE.createRequireFromPath(this.filename)
    const targetPath = newRequire.resolve(id)
    if (mocks.has(targetPath)) {
      return mocks.get(targetPath)
    }
    return _require.call(this, id)
  }

  return {
    mock(source, dist) {
      const sourcePath = __require__.resolve(source)
      const distTarget = __require__(dist)
      if (!mocks.has(sourcePath)) {
        mocks.set(sourcePath, distTarget)
      }
      return distTarget
    },
    recover() {
      mocks.clear()
    }
  }
}
