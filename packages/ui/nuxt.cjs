// CommonJS proxy to bypass jiti transforms from nuxt 2 and using native ESM
module.exports = function (...args) {
  return import('./dist/nuxt.mjs').then(m => m.default.call(this, ...args))
}

// eslint-disable-next-line
module.exports.meta = require('./package.json')
