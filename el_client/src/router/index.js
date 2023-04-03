import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView,
    children:[
      {
        path:'/personCenter',
        name:'personCenter',
        meta: {
          title:'个人中心'
        },
        component:() => import('../views/sys/personCenter.vue')
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
        path:'/parttimeModel',
        name:'parttimeModel',
        meta: {
          title:'兼职合同模板'
        },
        component:() => import('../views/sys/parttimeModel.vue')
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
        path:'/floder',
        name:'floder',
        meta: {
          title:'文件夹'
        },
        component:() => import('../views/sys/floder.vue')
      },
      {
        path:'/sign',
        name:'sign',
        meta: {
          title:'签名管理'
        },
        component:() => import('../views/sys/sign.vue')
      },
      {
        path:'/receipt',
        name:'receipt',
        meta: {
          title:'创建收据'
        },
        component:() => import('../views/sys/receipt.vue')
      },
      {
        path:'/receiptComfire',
        name:'receiptComfire',
        meta: {
          title:'确认收据'
        },
        component:() => import('../views/sys/receiptComfire.vue')
      },
      {
        path:'/displayReceipt',
        name:'displayReceipt',
        meta: {
          title:'展示收据'
        },
        component:() => import('../views/sys/displayReceipt.vue')
      },
      {
        path:'/iou',
        name:'iou',
        meta: {
          title:'创建借条'
        },
        component:() => import('../views/sys/iou.vue')
      },
      {
        path:'/iouComfire',
        name:'iouComfire',
        meta: {
          title:'确认借条'
        },
        component:() => import('../views/sys/iouComfire.vue')
      },
      {
        path:'/displayIou',
        name:'displayIou',
        meta: {
          title:'展示借条'
        },
        component:() => import('../views/sys/displayIou.vue')
      },
      {
        path:'/tenancy',
        name:'tenancy',
        meta: {
          title:'创建租房合同'
        },
        component:() => import('../views/sys/tenancy.vue')
      },
      {
        path:'/tenancyComfire',
        name:'tenancyComfire',
        meta: {
          title:'确认租房合同'
        },
        component:() => import('../views/sys/tenancyComfire.vue')
      },
      {
        path:'/displayTenancy',
        name:'displayTenancy',
        meta: {
          title:'展示租房合同'
        },
        component:() => import('../views/sys/displayTenancy.vue')
      },
      {
        path:'/parttime',
        name:'parttime',
        meta: {
          title:'创建兼职合同'
        },
        component:() => import('../views/sys/parttime.vue')
      },
      {
        path:'/parttimeComfire',
        name:'parttimeComfire',
        meta: {
          title:'确认兼职合同'
        },
        component:() => import('../views/sys/parttimeComfire.vue')
      },
      {
        path:'/displayParttime',
        name:'displayParttime',
        meta: {
          title:'展示兼职合同'
        },
        component:() => import('../views/sys/displayParttime.vue')
      },
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
