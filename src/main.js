// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//引入全局样式
import '@/assets/scss/common.scss'

import Vue from 'vue'
import App from './App'
import router from './router'

//引入jQuery
import $ from 'jquery' 

Vue.config.productionTip = false

//引入全局组件 
import nav from '@/components/sub/nav'
Vue.component('j-nav',nav)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
