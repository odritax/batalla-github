import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from 'axios';
import router from './router';  // añadimos esta línea

Vue.config.productionTip = false

Vue.use(Vuex);

Vue.prototype.axios = axios; 
const store = new Vuex.Store({
  state: {
   player1: [],
   player2: [],
  },
  mutations:{
    Update1(state,gamer){
      state.player1=gamer;
    },
    Update2(state,gamer){
      state.player2=gamer;
    }
  }
})

new Vue({
  store,
  render: h => h(App),
  router,                     // y esta también
}).$mount('#app')
