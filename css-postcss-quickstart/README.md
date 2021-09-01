```bash
# 执行 postcss 命令
npx postcss -o result.css src/lesson01.css

# 提示报警信息，没有使用任何插件
You did not set any plugins, parser, or stringifier. Right now, PostCSS does nothing. Pick plugins for your case on https://www.postcss.parts/ and use them in postcss.config.js.

# 安装一个插件再测试下
yarn add autoprefixer -D -d

npx postcss --use autoprefixer -o result.css src/lesson01.css
```
