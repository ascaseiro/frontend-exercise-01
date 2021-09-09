import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faAngleDown,
	faPenSquare,
	faSearch,
	faTimes,
	faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faPenSquare, faSearch, faTimes, faUserCircle, faAngleDown);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
