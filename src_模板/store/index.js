import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    // 存储全局状态的
    state:{

    },
    // 同步数据的方法集合
    mutations:{

    },
    plugins: [createPersistedState()]
})