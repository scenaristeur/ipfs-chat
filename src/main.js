import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'  // Install BootstrapVue

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootswatch/dist/sketchy/bootstrap.min.css";


import VueIpfs from './plugins/vue-ipfs';

// Load our IPFS plugin.
Vue.use(VueIpfs);

import { Network } from "vue-vis-network";
Vue.component('network', Network);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
