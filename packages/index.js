import nkalive from './nkalive'
import store from './store/base/index';
import { UPDATE_KEEP_ALIVE_INCLUDES } from './store/base/mutation-types';

// 存储组件列表
const components = [
  nkalive
]


// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue,option) {
  // 开发者定义的仓库名
  Vue.prototype.$storeModulesName = option.storeModulesName || 'NKeepAlive'
  
  let routerArr = []
  const includesArr = option.includes
  /**
   * @param {相对路径} path
   * @description 判断是否在配置中
   */
  function isIncludes(path) {
    return includesArr.some(item => item.path === path)
  }
  
  // 路由前置守卫
  option.App.router.beforeEach((to, from, next) => {
    // console.log('beforeEach');
    const lastRouterItem = routerArr[routerArr.length - 1] || {}
    if (to.fullPath === lastRouterItem.fullPath) { // 返回
      if (isIncludes(from.path)) {
        option.App.store.commit(
          UPDATE_KEEP_ALIVE_INCLUDES,
          {
            componentName: includesArr.find(item => item.path === from.path).name,
            open: false,
          },
        )
      }
    } else { // 前进
      routerArr.push(from)
      if (isIncludes(to.path)) {
        if (routerArr.some(item => item.fullPath === to.fullPath)) { // 存在参数和路由一样
        }
        // eslint-disable-next-line
        if (routerArr.some(item => (item.path === to.path) && (item.fullPath !== to.fullPath))) { // 存在路由一样，参数不一样的
          option.App.store.commit(
            UPDATE_KEEP_ALIVE_INCLUDES,
            {
              componentName: includesArr.find(item => item.path === to.path).name,
              open: false,
            },
          )
        }
      }
    }
    next()
  })
  // 路由后置守卫
  option.App.router.afterEach((to) => {
    // console.log('afterEach');
    const lastRouterItem = routerArr[routerArr.length - 1] || {}
    if (to.fullPath === lastRouterItem.fullPath) { // 返回
      // 删除最后一个记录
      routerArr = routerArr.splice(0,routerArr.length-1)
    } else { // 前进
      if (isIncludes(to.path)) {
        option.App.store.commit(
          UPDATE_KEEP_ALIVE_INCLUDES,
          {
            componentName: includesArr.find(item => item.path === to.path).name,
            open: true,
          },
        )
      }
    }
  })

  
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