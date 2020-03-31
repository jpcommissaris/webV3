// configure bootstrap CSS import 
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssLoaderOptions: {
    cssModules: true
  }
})