import Vue from 'vue'
import router from './router'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFileUpload, faGithub);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
