import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BingoBoard from '../components/BingoBoard.vue'
import BingoGame from '../components/BingoGame.vue'
import CalledNumbersBoard from '../components/CalledNumbersBoard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/BingoBoard',
    name: 'bingoBoard',
    component: BingoBoard
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
