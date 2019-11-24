import Vue from 'vue'
import router from './router'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFileUpload, faFileDownload, faInfoCircle, faSearch, faFilter, faHome, faToolbox
} from '@fortawesome/free-solid-svg-icons';
import { faCopy, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faFileUpload, faFileDownload, faInfoCircle, faSearch, faFilter, faHome, faToolbox,
  faCopy, faArrowAltCircleRight, faGithub, faTwitter
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
