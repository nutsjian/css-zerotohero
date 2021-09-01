#### css-postcss-webpack
该项目主要用来熟悉 postcss-loader 的配置。需要注意的是它的插件，和其它 css-loader、style-loader 等的配合。

##### 处理css 中的 @import
```bash
{
  loader: "css-loader",
  options: {
    importLoaders: 1
  }
}
```

##### postcss-preset-env
自带 autoprefixer 等其它预设插件

##### postcss-flexbugs-fixes
需要安装 4.2.1 版本，不然会报错，提示需要 PostCSS 8 以上

##### postcss-normalize
需要安装 8.0.1 版本，不然会报错，提示需要 PostCSS 8 以上
```css
@import "normalize"; /* also, @import "normalize.css" */
@import "normalize/opinionated"; /* also, @import "normalize.css/opinionated.css", @import "normalize.css/*" */
@import "sanitize"; /* also, @import "sanitize.css" */
@import "sanitize/forms"; /* also, @import "sanitize.css/forms.css" */
@import "sanitize/typography"; /* also, @import "sanitize.css/typography.css" */
@import "sanitize/page"; /* also, @import "sanitize.css/page.css" */
@import "sanitize/*"; /* also, @import "sanitize.css/*" (sanitize + all additions) */
```
https://github.com/csstools/postcss-normalize

##### browserslist 配置
