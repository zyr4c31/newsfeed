import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue'),
  },
  {
    path: '/newsfeed/',
    name: 'Newsfeed',
    component: () => import('../views/newsfeed.vue'),
  },
  {
    path: '/newsfeed/post/:index',
    name: 'Post',
    component: () => import('../views/post.vue'),
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/home.vue'),
  },
];

export default routes;
