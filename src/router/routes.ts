import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[]= [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/newsfeed',
    name: 'Newsfeed',
    component: () => import('../views/newsfeed.vue'),
  },
];

export default routes;
