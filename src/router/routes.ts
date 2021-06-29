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
    component: () => import('../views/newsfeed.vue'),
  },
  {
    path: '/newsfeed/:id',
    name: 'Newsfeed',
    component: () => import('../views/newsfeed.vue'),
  },
];

export default routes;
