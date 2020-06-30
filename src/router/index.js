import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Zhuce from '@/components/Zhuce'
import Denglu from '@/components/Denglu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/zhuce',
      name:'Zhuce',
      component:Zhuce
    },
    {
      path:"/denglu",
      name:"Denglu",
      component:Denglu
    }
  ]
})
