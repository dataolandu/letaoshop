import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminHome from '@/router/adminHome/index'
import Home from '../views/home/home.vue'
import Detail from '../views/home/detail.vue'
import Index from '../views/home/index.vue'
import Product from '../views/home/product.vue'
import Cart from '../views/cart/cart.vue'
import Order from '../views/order/order.vue'
import OrderConfirm from '../views/order/orderConfirm.vue'
import OrderList from '../views/order/orderList.vue'
import OrderPay from '../views/order/orderPay.vue'
import AliPay from '../views/alipay/alipay.vue'
import Login from '../views/login/login.vue'

Vue.use(VueRouter)

const routes = [
  //首页、详情页等
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: Home,
    children:[
      {
        path: '/index',
        name: 'index',
        component: Index,
      },
      {
        path: '/product/:id',
        name: 'product',
        component: Product,
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: Detail,
      },
    ]
  },
  //购物车
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  //订单确认、订单列表、支付等
  {
    path: '/order',
    name: 'order',
    component: Order,
    children:[
      {
        path: 'confirm',
        name: 'order-confirm',
        component: OrderConfirm,
      },
      {
        path: 'list',
        name: 'order-list',
        component: OrderList,
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: OrderPay,
      },
      {
        path: 'alipay',
        name: 'ali-pay',
        component: AliPay,
      },
    ]
  },
  //登录页
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  //后台管理

  ...AdminHome

]

const router = new VueRouter({
  routes
})

export default router
