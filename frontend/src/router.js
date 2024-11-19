// router.js
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import CoffeeList from './components/CoffeeList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App,
  },
  {
    path: '/coffee-list',
    name: 'CoffeeList',
    component: CoffeeList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;