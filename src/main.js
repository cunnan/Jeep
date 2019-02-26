//引入全局样式
import '@/assets/scss/common.scss'

//
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

//引入Vuex
import Vuex from 'vuex'
import vuex from '@/assets/vuex/vuex'
Vue.use(Vuex)
var store=new Vuex.Store(vuex)//创建store实例

//引入axios库
import axios from 'axios'
axios.defaults.withCredentials=true;//配置跨域访问保存session
Vue.prototype.axios=axios; //将axios库配置Vue实例对象

//引入字符串对象转换模块
import qs from 'qs'
Vue.prototype.qs=qs

//引入jQuery
import $ from 'jquery' 
Vue.prototype.$=$

//引入全局组件 
import nav from '@/components/sub/nav'
Vue.component('j-nav',nav)

//过滤器
Vue.filter('time',function(val){
  var date=new Date(val)
  var y=date.getFullYear()
  var m=date.getMonth()+1
  var d=date.getDate()
  m<10&&(m='0'+m)
  d<10&&(d='0'+d)
  return `${y}-${m}-${d}`;
})


//
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
