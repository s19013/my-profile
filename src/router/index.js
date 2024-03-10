import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import FQA from '@/views/FQA.vue'
import MyWorks from '@/views/MyWorks/MyWorks.vue'
import Article from '@/views/Article.vue'
import Skill from '@/views/Skill.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Skill",
    component: Skill
  },
  {
    path: "/Article",
    component: Article
  },
  {
    path: "/MyWorks",
    component: MyWorks
  },
  {
    path: "/FQA",
    name: "FQA",
    component: FQA
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