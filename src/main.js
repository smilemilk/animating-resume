import Vue from 'vue'
import App from './App'
import Mobile from './Mobile'

var width = document.documentElement.clientWidth

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // template: '<App/>',
  // components: { App }  //vue1.0的写法
  render: h => h(width > 500 ? App : Mobile)
})


