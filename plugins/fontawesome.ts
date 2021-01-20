import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {  
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faExclamationCircle,
);

Vue.component('font-awesome', FontAwesomeIcon);
