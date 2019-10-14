module.exports = {
  // devServer: {
  //   port: 8081, // 端口号
  //   host: "localhost",
  //   https: false, // https:{type:Boolean}
  //   open: true, //配置自动启动浏览器
  //   // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
  //   proxy: {
  //     "/api": {
  //       target: "<url>",
  //       ws: true,
  //       changeOrigin: true
  //     },
  //     "/foo": {
  //       target: "<other_url>"
  //     }
  //   } // 配置多个代理
  // },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
        .add('packages')
        .end()
      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })
  }
};