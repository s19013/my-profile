import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/MyWorks",
    component: () => import('../views/MyWorks/MyWorks.vue'),
    children:[
        {
            path:'Original',
            component: () => import('../views/MyWorks/Original.vue')
        },
        {
            path:'Samples',
            component: () => import('../views/MyWorks/Samples.vue')
        }
    ]
  },
  {
    path: "/MyWorks",
    name: "MyWorks",
    component: () => import('../views/MyWorks/MyWorks.vue')
  },
  {
    path: "/MyWorks",
    name: "MyWorks",
    component: () => import('../views/MyWorks/MyWorks.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router