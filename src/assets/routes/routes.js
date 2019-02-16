import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index/index'

export default {
    routes: [
      {// HelloWorld欢迎页
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {//index首页
        path: '/',
        redirect: '/index'
      },
      {//index首页
        path: '/index',
        name: 'index',
        component: index
      }
    ]
}