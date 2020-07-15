import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Zhuce from '@/components/Zhuce'
import Denglu from '@/components/Denglu'
import Shop from '@/pages/Shop'
import Index from '@/pages/Index'
import Fen from '@/pages/Fen'
import Gou from '@/pages/Gou'
import Ge from '@/pages/Ge'
import Jxuan from '@/components/Jxuan'
import Renqi from '@/components/Renqi'
import Renqiquan from '@/components/Renqiquan'
import Kanjia from '@/components/Kanjia'
import Zhuan from '@/components/Zhuan'
import List from '@/components/List'
import Sou from '@/components/Sou'
import Xiangqing from '@/components/Xiangqing'
import Shanxiang from '@/components/Shanxiang'


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
      name: "Shop",
      component: Shop,
      redirect: "/index",
      children: [
        {
          path: "/index",
          name: "Index",
          component: Index
        },
        {
          path: "/fen",
          name: "Fen",
          component: Fen
        },
        {
          path: "/gou",
          name: "Gou",
          component: Gou
        },
        {
          path: "/ge",
          name: "Ge",
          component: Ge
        }
      ]
    },
    {
      path: '/zhuce',
      name: 'Zhuce',
      component: Zhuce
    },
    {
      path: "/denglu",
      name: "Denglu",
      component: Denglu
    },
    {
      path: "/jxuan",
      name: "Jxuan",
      component: Jxuan
    },
    {
      path: "/renqi",
      name: "Renqi",
      component: Renqi
    },
    {
      path: "/renqiquan",
      name: "Renqiquan",
      component: Renqiquan
    },
    {
      path: "/kanjia",
      name: "Kanjia",
      component: Kanjia
    },
    {
      path: "/zhuan",
      name: "Zhuan",
      component: Zhuan
    },
    {
      path: "/list",
      name: "List",
      component: List
    }, {
      path: "/sou",
      name: "Sou",
      component: Sou
    }, {
      path: "/xiangqing",
      name: "Xiangqing",
      component: Xiangqing
    },
    {
      path: "/shanxiang",
      component: Shanxiang
    },
  ]
})
