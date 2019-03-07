import Index from '@/components/index/Index'
import IndexInfo from '@/components/sub/IndexInfo'
import DetailInfo from '@/components/sub/DetailInfo'


export default {
    routes: [
      {path: '/',redirect: '/Index'},
      {path: '/Index',component: Index,
      children:[
        {path:'/',component:IndexInfo},
        {path:'/DetailInfo',component:DetailInfo}
      ]}
    ]
}