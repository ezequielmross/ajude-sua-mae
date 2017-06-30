import Vue from 'vue'
import App from './App'

const EventBus = new Vue()
Vue.prototype.$emitAll = (name, ...args) => EventBus.$emit(name, ...args)
Vue.prototype.$onAll = (name, cb) => EventBus.$on(name, cb)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
