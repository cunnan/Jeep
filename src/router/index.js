import Vue from 'vue'
import Router from 'vue-router'

// HelloWorld欢迎页
import HelloWorld from '@/components/HelloWorld'

//index首页
import index from '@/components/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
