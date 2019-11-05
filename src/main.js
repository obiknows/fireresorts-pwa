import Vue from 'vue'

import Antd from 'ant-design-vue'
import Grid from 'vue-js-grid'
import App from './App.vue'
import router from './router'
import store from './store'

import 'ant-design-vue/dist/antd.less'

import '@/misc/register-service-worker'
import '@/misc/handle-network-status'
import '@/firebase/init'
import '@/firebase/authentication'
import '@/misc/handle-apple-install-prompt'
import 'pwacompat'

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// console.log(`
// 🍱 This app was bootstrapped with bento-starter 🍱

// 👉 https://bento-starter.netlify.com/

// `)
