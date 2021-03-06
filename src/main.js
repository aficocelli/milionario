import Vue from 'vue'
import App from './App.vue'
import Domanda from './components/Domanda.vue'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'





import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('domanda', Domanda)

new Vue({
  render: h => h(App),
}).$mount('#app')
