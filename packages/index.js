// 导入颜色选择器组件
import nkalive from './nkalive'
import store from './store/base/index';

// 存储组件列表
const components = [
  nkalive
]

// 开发者定义的仓库名
let storeModulesName = 'NKeepAlive'

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue,option) {
  storeModulesName = option.storeModulesName
  option.App.store.commit(storeModulesName, {
    componentName: 'Tesxxxt',
    open: true,
  })
  Vue.prototype.$storeModulesName = storeModulesName

  
  // console.log(option.App, 'option');
  // console.log(Vue.component);
  // option.App.store.commit(option.storeMutation, {
  //   componentName: 'Tesxxxt',
  //   open: true,
  // })
  // 判断是否可以安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  nkalive,
  // 插件独有仓库
  store,
}