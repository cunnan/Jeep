# jeep

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

问题解决

解决
pm ERR! Failed at the chromedriver@2.45.0 install script.
npm install --ignore-scripts

解决
Module build failed: Error: ENOENT: no such file or directory, scandir 'C:\Users\web\Desktop\Jeep-1\node_modules\node-sass\vendor'
npm rebuild node-sass

解决
sass全局引入重复编译问题

变量和混合.scss、样式.scss分别在不同的文件中引入

index.html文件设置

<!-- 缓存设置 缓存时间单位：s-->
<meta http-equiv="Cache-Control" content="max-age=3600">
<!-- 强制浏览器启用Chromium内核 -->
<meta name="renderer" content="webkit">
<!-- 浏览器兼容 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<!-- 兼容样式引入 -->
<!--[if lt IE 9]>      
    <script src=""></script>
<![endif]-->

解决
vscode 用git 拉取代码，提示：在签出前，请清理存储库工作树

git reset --hard