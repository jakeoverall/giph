// @ts-ignore
import Vue from 'vue'
import App from './App.vue'
import './loader'
import store from './store.js'
Vue.config.productionTip = false

// @ts-ignore
new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
