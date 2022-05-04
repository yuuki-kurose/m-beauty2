import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "/src/page/Login-m.vue"
import PostCreate from "/src/page/PostCreate-m.vue"
import Registration from "/src/page/Registration-m.vue"


Vue.use(VueRouter)

const routes = [

  {
    path: '/Login-m.vue',
    name: 'Login',
    component: Login
  },
  {
    path: '/PostCreate-m.vue',
    name: 'PostCreate',
    component: PostCreate
  },
  {
    path: '/Registration-m.vue',
    name: 'Registration',
    component: Registration
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
