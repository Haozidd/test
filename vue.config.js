const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    hot:true,
    port:8080,
    //代理方式一
    // proxy:'http://localhost:10086',
    // client: {
    //   webSocketURL: 'ws://192.168.0.103:8080/ws',
    // }
    //代理方式二
    proxy:{
      '/proxy-1':{
        target:'http://localhost:10086',
        pathRewrite:{'^/proxy-1':''},
        ws:true,
        changeOrigin:true
      },
      '/proxy-2':{
        target:'http://localhost:10087',
        pathRewrite:{'^/proxy-2':''},
        ws:true,
        changeOrigin:true
      }
    }



  }
})
