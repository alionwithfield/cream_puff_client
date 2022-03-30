import Vue from 'vue';
import Router from 'vue-router';
import CoinList from '../components/CoinList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'CoinList',
      component: CoinList,
    },
  ],
});
