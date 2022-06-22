import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layout/MyHome.vue'),
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('@/views/Message/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
