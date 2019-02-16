import { test } from './../utility/function';
import obj from './../utility/function';
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