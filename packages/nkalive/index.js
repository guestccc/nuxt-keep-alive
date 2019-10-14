// 导入组件
import nkalive from './nkalive.vue'

// 为组件提供 install 安装方法，供按需引入
nkalive.install = function (Vue) {
  Vue.component(nkalive.name, nkalive)
}

// 默认导出组件
export default nkalive