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
第一步 安装脚手架工具
	 npm install -g vue-cli
第二步 初始化vue-webpack项目
	 vue init webpack Jeep
第三步 引入jQuery
		1 安装jquery
		 	npm install jquery --save-dev
		2 在webpack.dev.conf.js中配置
			plugins: [
				new webpack.ProvidePlugin({
					jQuery: 'jquery',
					$: 'jquery'
				})
			]
	 	3 在入口文件main.js 中引入jquery
			 import $ from 'jquery' ;
		4 在组件中测试是否引入成功
			<script>
				$(function () {  
					alert(123);  
				}); 
			</script>
第四步 在index.js文件中修改ip和端口
第五步 配置scss
	第一步 在组件中使用sass
		npm install sass-loader node-sass --save-dev 
		在style中添加 lang="scss" 即可使用scss代码
	第二步 配置全局sass
		第一步 安装
			npm install sass-resources-loader --save-dev 
		第二步 配置
			1 在 build 文件夹下找到 util.js,配置如下代码段
				 scss: generateLoaders('sass').concat(
					{
						loader: 'sass-resources-loader',
						options: {
						resources: [
							path.resolve(__dirname, '../src/assets/global.scss'),
							path.resolve(__dirname, '../src/assets/global1.scss')
						]
						}
					}
				 ),