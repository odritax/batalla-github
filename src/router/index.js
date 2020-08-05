import Vue from 'vue';
import VueRouter from 'vue-router';

import Usuario from '../components/Usuario';  // asumiendo que hicimos este componente

Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
    routes: [
        {
            path: '/', 
            component: Usuario
        },
    ]
})