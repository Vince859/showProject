import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from './axios'
//原生axios
import axios1 from './signAxios'
import SignCanvas from 'sign-canvas'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(SignCanvas)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$axios1 = axios1

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
