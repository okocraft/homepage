import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {  
  faExclamationCircle,
  faBars,
  faBook,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faDiscord,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faExclamationCircle,
  faBars,
  faBook,
  faGithub,
  faDiscord,
  faTwitter,
);

Vue.component('font-awesome', FontAwesomeIcon);
