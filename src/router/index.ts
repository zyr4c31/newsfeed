import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/home.vue';
import Newsfeed from '../views/newsfeed.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/newsfeed',
    name: 'Newsfeed',
    component: Newsfeed,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
