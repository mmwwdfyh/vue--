import Vue from 'vue'
import Vuex from 'vuex'

// import VuexPersist from "vuex-persist";
import createPersistedState from 'vuex-persistedstate'
// import createPersistedState from "vuex-solidification"

Vue.use(Vuex)

// const vuexLocal = new VuexPersist({
//     storage:window.localStorage
// })


const store = new Vuex.Store({

    // 存储全局状态的
    state: {
        Loading: false,
        cartList:[], //购物车列表
        nums:0
    },
    // 同步数据的方法集合
    mutations: {
        //添加购物车的操作
        setLoading(state, payload) {
            state.Loading = payload
        },
        countCarts(state){
            console.log("text");
            let tmp = 0;
            //遍历购物车的数量
            console.log(state.cartList);
            state.cartList.forEach(item=>{
                tmp+= item.nums;
            })
            state.nums = tmp;
        }
    },

    //  plugins: [createPersistedState()]
    //  plugins: [vuexLocal.plugin]
    plugins: [createPersistedState()]
    // storage: window.sessionStorage,
    // reducer(val) {
    //     return {
    //         user: val.user
    //     }

    // }

})
export default store
