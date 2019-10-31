import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PrivacyPolicy from './views/PrivacyPolicy.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPolicy,
    },
  ],
});
