import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import(/* webpackChunkName: "home" */ '../views/explore/Explore.vue')
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import(/* webpackChunkName: "Activity" */ '../views/activity/activity.vue')
  },
  {
    path: '/myNft',
    name: 'myNft',
    component: () => import(/* webpackChunkName: "myNft" */ '../views/myNft.vue')
  },
  {
    path: '/myCollection',
    name: 'myCollection',
    component: () => import(/* webpackChunkName: "myNft" */ '../views/myCollection.vue')
  },
  {
    path: '/othersCollection/:addr',
    name: 'othersCollection',
    component: () => import(/* webpackChunkName: "myNft" */ '../views/othersCollection.vue')
  },
  {
    path: '/otherNft',
    name: 'otherNft',
    component: () => import(/* webpackChunkName: "myNft" */ '../views/otherNft.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import(/* webpackChunkName: "create" */ '../views/create/Create.vue')
  },
  {
    path: '/createCollection',
    name: 'createCollection',
    component: () => import(/* webpackChunkName: "create" */ '../views/create/createCollection.vue')
  },
  {
    path: '/buy',
    name: 'Buy',
    component: () => import(/* webpackChunkName: "buy" */ '../views/buy/Buy.vue')
  },
  {
    path: '/sell',
    name: 'Sell',
    component: () => import(/* webpackChunkName: "buy" */ '../views/sell/Sell.vue')
  },
  {
    path: '/connect',
    name: 'connect',
    component: () => import(/* webpackChunkName: "connect" */ '../views/connect.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "help" */ '../views/community/HelpCenter.vue')
  },
  {
    path: '/CreateCoolection',
    name: 'CreateCoolection',
    component: () => import(/* webpackChunkName: "help" */ '../views/create/CreateCoolection.vue')
  }
  ,
  {
    path: '/Createpath',
    name: 'Createpath',
    component: () => import(/* webpackChunkName: "help" */ '../views/create/Createpath.vue')
  },
  {
    path: '/coolelist',
    name: 'coolelist',
    component: () => import(/* webpackChunkName: "help" */ '../views/coolection/index.vue')
  },
  {
    path: '/applyfor',
    name: 'applyfor',
    component: () => import(/* webpackChunkName: "help" */ '../views/applyfor.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  }

})

export default router
