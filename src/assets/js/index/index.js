import { test } from '@/assets/utility/function';
import obj from '@/assets/utility/function';
export default {
    created(){
      this.test();
      this.test2()
    },
    methods:{
        test,
        test2:obj.test
    }
}