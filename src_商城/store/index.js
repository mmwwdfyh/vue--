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
        nums:0,  //总数量
        orderList:[],  //存储订单商品列表
        orderInfo:[],
    },
    // 同步数据的方法集合
    mutations: {
       
        setLoading(state, payload) {
            state.Loading = payload
        }, //添加购物车的操作
        addCart(state,payload){
            state.cartList = payload;
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
        },
        setOrderList(state){
            state.orderList = state.cartList.filter(item=>{
                return item.checked == true;
            })
        },
        setOrder(state,payload){
            state.orderInfo = payload;
        },
        clear(state){
            state.cartList = [];
            state.nums = 0;
            state.orderInfo = [];
        }
    },
    getters:{
        totalAmounts(state){
            let amount = 0;
            state.orderList.forEach(item=>{
                amount += item.price*item.nums;
            })
            return amount;
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
