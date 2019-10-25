import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NKeepAlive from '../packages/index';

Vue.config.productionTip = false

Vue.use(NKeepAlive,
  {
    App: {store,router}, // 实例
    storeModulesName: 'NKeepAlive', // 库名
    includes: [
      // {
      //   name: 'AnnualReviewType',
      //   path: '/annual-review/type',
      // },
    ],
  })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
