import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/Home",
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
        },
        {
          path:'',
          redirect:'/MyWorks/Original'
        },
    ]
  },
  {
    path: "/FQA",
    name: "FQA",
    component: () => import('../views/FQA.vue')
  },
  // {
  //   path: "/Hobby",
  //   name: "Hobby",
  //   component: () => import('../views/Hobby.vue')
  // },
  {
    path: '/:catchAll(.*)',
    redirect:'/Home'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router