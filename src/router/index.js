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
//   {
//     path: "/cordings",
//     name: "Cordings",
//     component: () => import(/* webpackChunkName: "cordings" */ '../views/Cordings.vue')
//   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router