import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Portfolio from './components/Portfolio'
import Kratodo from './components/Kratodo'
import Feriapp from './components/Feriapp'
import { BootstrapVue } from 'bootstrap-vue';
import Meta from 'vue-meta';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(Meta)

const routes = [
  {path:'/feriapp', component: Feriapp},
  {path:'/kratodo', component: Kratodo},
  {path:'/portfolio', component: Portfolio},
]

const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')