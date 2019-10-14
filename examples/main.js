import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'

// 导入组件库
import Nkalive from '../packages/index'
// 注册组件库
Vue.use(Nkalive,{
  App: {store}, storeModulesName: 'NKeepAlive',
})


Vue.config.productionTip = false

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#app')
