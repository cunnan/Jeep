import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//引入test组件
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path:'/',
      redirect:'/test'
    },
    {
      path:'/test',
      name:'Test',
      component:Test
    }
  ]
})
