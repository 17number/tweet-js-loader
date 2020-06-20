import Vue from 'vue'
import router from './router'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFileUpload,
  faFileDownload,
  faInfoCircle,
  faSearch,
  faFilter,
  faHome,
  faToolbox,
  faVideo,
  faLink,
  faHashtag,
  faBlog,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCopy,
  faArrowAltCircleRight,
  faImage,
} from "@fortawesome/free-regular-svg-icons";
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faFileUpload,
  faFileDownload,
  faInfoCircle,
  faSearch,
  faFilter,
  faHome,
  faToolbox,
  faImage,
  faVideo,
  faLink,
  faHashtag,
  faBlog,
  faCopy,
  faArrowAltCircleRight,
  faGithub,
  faTwitter,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
