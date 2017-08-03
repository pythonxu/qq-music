import 'babel-polyfill'
import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 移动端点击300毫秒延时解决
fastclick.attach(document.body)

// 把一些基础样式导入
import 'common/stylus/index.styl'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
