import Route from '@/constants/route-names';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: Route.Home,
    component: () => import('../views/home.vue'),
  },
  {
    path: '/newsfeed/',
    name: Route.Newsfeed,
    component: () => import('../views/newsfeed.vue'),
  },
  {
    path: '/newsfeed/post/:index',
    name: Route.Post,
    component: () => import('../views/post.vue'),
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: Route.NotFound,
    component: () => import('../views/not-found.vue'),
  },
];

export default routes;
