import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import tooltipDirective from './directives/tooltip.directive'
import messagePlugin from './utils/message.plugin'
import Loader from './components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('date', dateFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: 'AIzaSyDamCPiWkVPwGs7YmZqlEOeQTvkiDNxXEA',
  authDomain: 'vue-yo.firebaseapp.com',
  databaseURL: 'https://vue-yo.firebaseio.com',
  projectId: 'vue-yo',
  storageBucket: 'vue-yo.appspot.com',
  messagingSenderId: '947402646257',
  appId: '1:947402646257:web:3fe8713b2d151f0bb13f50'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
