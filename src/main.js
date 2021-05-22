import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Portfolio from './components/Portfolio'
import Kratodo from './components/Kratodo'
import Feriapp from './components/Feriapp'
import Index from './components/Index'
import Api from './components/Api'
import { BootstrapVue } from 'bootstrap-vue';
import Meta from 'vue-meta';
import hljs from 'highlight.js'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'
import 'highlight.js/styles/dracula.css';


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(Meta)
Vue.use(hljs.vuePlugin)

const routes = [
  {path:'/feriapp', component: Feriapp},
  {path:'/kratodo', component: Kratodo},
  {path:'/portfolio', component: Portfolio},
  {path:'/api', component: Api},
  {path:'', component: Index}
]

const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')