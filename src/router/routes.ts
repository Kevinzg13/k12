import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/WalletPage.vue'),
    props: route => ({ uri: route.query.uri })
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: '/casa',
    component: () => import('../pages/CasaView.vue'),
  },
];

export default routes;
