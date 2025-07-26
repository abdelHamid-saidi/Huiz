import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import QuizView from '../views/QuizView.vue'
import Result from '../components/Result.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: QuizView
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 