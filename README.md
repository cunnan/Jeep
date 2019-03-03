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

样式编写体会
div :not(:empty){display:flex;} 选择器的应用很方便
尽量在a标签上设置padding
弹性布局中的flex也尽量设置在a标签中，个人习惯


关于this

this指向的是其所在运行环境的对象
对象中的构造函数会在对象实例化时在对象内部自动创建一个自己的实例对象，这个实例对象就是this

问题

pull下来jeep后，安装包，会有提示操作平台不匹配的警告，暂时不理会，漏洞提醒暂且不要解决，否则
会出现引用的包的版本冲突问题，版本冲突可以通过修改package.json文件的依赖版本，很难解决，添加软链
接可能会解决

vue中的model数据最好是一维的 v-for不会出现can not read property of undefined的问题

生命周期
updated 距离属性变化时会触发