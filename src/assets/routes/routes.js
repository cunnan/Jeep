import index from '@/components/index/index'

export default {
    routes: [
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