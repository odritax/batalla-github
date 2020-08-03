import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.prototype.axios = axios; 
const store = new Vuex.Store({})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
