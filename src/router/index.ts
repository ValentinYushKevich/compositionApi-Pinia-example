import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/coin/:coinId',
    name: 'coin',
    component: () => import(/* webpackChunkName: "coin" */ '../views/CoinView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
