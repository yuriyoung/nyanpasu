import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import './components'
// import { createI18n } from './i18n/index'
import { createRouter } from './router/index'

Vue.prototype.appName = process.env.VUE_APP_NAME
Vue.config.performance = process.env.NODE_ENV === 'development'
Vue.config.productionTip = false

const router = createRouter()

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
