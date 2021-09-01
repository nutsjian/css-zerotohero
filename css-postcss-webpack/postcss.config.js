const postcssNormalize = require('postcss-normalize');

module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require("postcss-preset-env"),
    postcssNormalize()
  ],
  browserslist: [
    "> 1%",
    "last 2 versions"
  ]
}
