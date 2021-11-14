import { createRouter, createWebHistory } from 'vue-router'
import CardsList from '../views/CardsList.vue'
import AddCard from '../views/AddCard.vue'
import CardDetails from '../views/CardDetails.vue'

const routes = [
  {
    path: '/',
    alias: '/cards',
    name: 'cards',
    component: CardsList
  },
  {
    path: '/cards/:card_number',
    name: 'card-details',
    component: CardDetails
  },
  {
    path: "/cards/new",
    name: "add-card",
    component: AddCard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
