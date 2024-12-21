import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../pages/CasaView.vue'),
    props: route => ({ uri: route.query.uri })
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: '/wallet',
    component: () => import('pages/WalletPage.vue'),
  },
];

export default routes;
