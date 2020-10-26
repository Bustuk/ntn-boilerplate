import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faYoutube, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faYoutube, faInstagram, faFacebookF);
Vue.component('font-awesome-icon', FontAwesomeIcon);