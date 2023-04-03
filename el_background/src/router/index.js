import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children:[
      {
        path:'/data',
        name:'data',
        meta: {
          title:'数据分析'
        },
        component:() => import('../views/sys/data.vue')
      },
      {
        path:'/user',
        name:'user',
        meta: {
          title:'用户管理'
        },
        component:() => import('../views/sys/user.vue')
      },
      {
        path:'/receiptModel',
        name:'receiptModel',
        meta: {
          title:'收据模板'
        },
        component:() => import('../views/sys/receiptModel.vue')
      },
      {
        path:'/iouModel',
        name:'iouModel',
        meta: {
          title:'借条模板'
        },
        component:() => import('../views/sys/iouModel.vue')
      },
      {
        path:'/tenancyModel',
        name:'tenancyModel',
        meta: {
          title:'租房合同模板'
        },
        component:() => import('../views/sys/tenancyModel.vue')
      },
      {
        path:'/parttimeModel',
        name:'parttimeModel',
        meta: {
          title:'兼职合同模板'
        },
        component:() => import('../views/sys/parttimeModel.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
/* router.beforeEach((to,from,next) => {
  let token = localStorage.getItem('token')
  if (token === null) {
    next({path : '/login'})
  } else {
    next()
  }
}) */

export default router
