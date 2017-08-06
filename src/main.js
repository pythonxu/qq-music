import 'babel-polyfill'
import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store'

// 把一些基础样式导入
import 'common/stylus/index.styl'

// 移动端点击300毫秒延时解决
fastclick.attach(document.body)

Vue.use(VueLazyload,{
  loading: require('common/images/default.png')
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
