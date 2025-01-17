import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Podaci from '../pages/Podaci.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/podaci',
    name: 'Podaci',
    component: Podaci,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
