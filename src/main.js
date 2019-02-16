// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery' ;

Vue.config.productionTip = false

//全局组件 
//引入TextA组件
// import TextA from './components/sub/text-a.vue'

// Vue.component('j-text-a',TextA)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
