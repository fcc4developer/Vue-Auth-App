import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'

import router from './router'
import store from './store'

import dotenv from 'dotenv'
dotenv.config()

axios.defaults.baseURL = `'${process.env.VUE_APP_FIREBASE_DATABASE_URL}'` || 'api-url-not-set'
axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use(Vuelidate)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
