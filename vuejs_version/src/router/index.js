import Vue from 'vue'
import VueRouter from 'vue-router'
import ListeCar from '../components/ListeCar.vue';
import Detail from '../components/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ListeCar',
    component: ListeCar
  },
  {
    path: '/detail/:voiture',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
