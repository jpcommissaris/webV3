// configure bootstrap CSS import 
const withCSS = require('@zeit/next-css')

/*module.exports = withCSS({
  cssLoaderOptions: {
    cssModules: true
  }
}), */ 
module.exports = {

  module: {
      rules: [
          //loader for css
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
          },
       
      ]
  }
}