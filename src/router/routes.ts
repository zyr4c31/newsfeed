import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue'),
  },
  {
    path: '/newsfeed',
    name: 'Newsfeed',
    alias: '/newsfeed/newsfeed',
    component: () => import('../views/newsfeed.vue'),
  },
];

export default routes;
