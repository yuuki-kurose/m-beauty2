import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '/src/page/HomePage.vue'
import Login from "/src/page/Login-m.vue"
import PostCreate from "/src/page/PostCreate-m.vue"
import PostList from "/src/page/PostList.vue"
import Registration from "/src/page/Registration-m.vue"


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
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
    path: '/PostList.vue',
    name: 'PostList',
    component: PostList
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
