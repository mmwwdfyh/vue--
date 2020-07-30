import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Fen from '@/pages/Fen'
import Ge from '@/pages/Ge'
import Gou from '@/pages/Gou'
import Index from '@/pages/Index'
import Shop from '@/pages/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: "/shop"
    },
    {
      path: "/shop",
      component: Shop,
      redirect: "/index",
      children: [
        {
          path: "/index",
          component: Index
        },
        {
          path: "/fen",
          component: Fen
        },
        {
          path: "/ge",
          component: Ge
        },
        {
          path: "/gou",
          component: Gou
        },
      ]
    }

  ]
})
