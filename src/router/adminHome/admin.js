/* 后台管理 -> 小盟书库 */
import Index from '@/views/adminHome/index'
export default [
  {
    path: '/adminLogin',
    name: 'adminLogin',
    meta: {
      title: '后台管理/登录'
    },
    component: () => import('@/views/adminHome/login')
  },
  {
    path: '/admin',
    name: 'admin',
    component: Index,
    meta: {
      title: '后台管理/主页'
    },
    children: [
      {
        path: 'adminHome',
        name: 'adminHome',
        component: () => import('@/views/adminHome/home'),
        meta: { title: '后台管理/主页'}
      },
      {
        path: 'userManagement',
        name: 'userManagement',
        component: () => import('@/views/adminHome/userManagement'),
        meta: { title: '后台管理/人员管理/用户管理'}
      },
      {
        path: 'adminManagement',
        name: 'adminManagement',
        component: () => import('@/views/adminHome/adminManagement'),
        meta: { title: '后台管理/人员管理/管理员列表'}
      },
      {
        path: 'categoriesManagement',
        name: 'categoriesManagement',
        component: () => import('@/views/adminHome/categoriesManagement'),
        meta: { title: '后台管理/商品管理/分类管理'}
      },
      {
        path: 'goodsManagement',
        name: 'goodsManagement',
        component: () => import('@/views/adminHome/goodsManagement'),
        meta: { title: '后台管理/商品管理/商品管理'}
      },
      {
        path: 'ordersManagement',
        name: 'ordersManagement',
        component: () => import('@/views/adminHome/ordersManagement'),
        meta: { title: '后台管理/订单管理/订单管理'}
      },
    ]
  }

]

