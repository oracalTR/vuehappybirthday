const { defineConfig } = require('@vue/cli-service')
// let assetsDir = "assets";
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '',
  })