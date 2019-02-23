export default {
    state:{
      cartCount:sessionStorage.getItem('cartCount')||0//共享数据：购物车中商品数量
    },
    mutations:{
      //购物车中数据加1，点击商品详情[加入购物车]
      increment(state){
        state.cartCount++;
      },
      //显示购物车列表时
      updateCount(state,count){
        state.cartCount=count;
        sessionStorage.setItem('cartCount',count)
      }
    },
    getters:{
      optCartCount:function(state){
        return state.cartCount;
      }
    }
}