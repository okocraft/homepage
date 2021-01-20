import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {  
  faExclamationCircle,
  faBook,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faDiscord,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faExclamationCircle,
  faBook,
  faGithub,
  faDiscord,
  faTwitter,
);

Vue.component('font-awesome', FontAwesomeIcon);
