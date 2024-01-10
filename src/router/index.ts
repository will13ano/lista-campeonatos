import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { 
    alias: '/',
    name: 'campeonatos',
    path: '/campeonatos',
    component: () => import('@/components/CampeonatoList.vue')
  },
  {
    name: 'detalhes-campeonato',
    path: '/campeonatos/:campeonatoId',
    component: () => import('@/components/DetalhesCampeonato.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router
