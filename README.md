# nuxt-keep-alive

> 封装`nuxt.js`的`<keep-alive>`

## 安装

```
$ npm install n-keep-alive
```

### 使用

在`/plugins/plugins.js`中引入

`Vue.use(NKeepAlive,option)` 传入插件，和配置`option`

```js
import NKeepAlive from 'n-keep-alive'
// keep-alive插件
export default ({ app }) => {
  Vue.use(NKeepAlive, {
    App: app, // 实例
    storeModulesName: 'NKeepAlive', // 库名
    includes: [
      {
        name: 'HomeParentList',
        path: '/keep-alive/parent-list'
      }
    ]
  })
}
window.vm = new Vue()
```

在`/store/index.js`中引入

引入仓库，指定`key`，这里`key`为`NKeepAlive`

```js
import Vue from 'vue'
import Vuex from 'vuex'
import NKeepAlive from 'n-keep-alive'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    modules: {
      NKeepAlive: NKeepAlive.store
    },
    strict: process.env.NODE_ENV !== 'production'
  })

export default store
```

### 特点

1. 前进更新数据，保存当前页面

2. 返回读取记录，清除当前页面

### 配置

**option**

| 参数             | 描述                       | 类型   | 是否必传 | 默认 |
| ---------------- | -------------------------- | ------ | -------- | ---- |
| App              | 实例对象                   | Object | true     | --   |
| storeModulesName | `store`中，引入仓库的`key` | String | true     | --   |
| includes         | 需要配置<keep-alive>的页面 | Array  | false    | []   |

- `includes`子配置项

| 参数 | 描述                      | 类型   | 是否必传 | 默认 |
| ---- | ------------------------- | ------ | -------- | ---- |
| path | 页面路径                  | String | true     | --   |
| name | `页面/组件`暴露出的`name` | String | true     | --   |

### 注意

由于`nuxt.js`中，<keep-alive>机制，本身就存在一定问题，建议通过`data`来记录`页面高度`

推荐配合`cube-ui`的`cube-scroll`组件
