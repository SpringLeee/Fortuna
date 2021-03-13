import Vue from 'vue'
import App from './App'
import router from './router'

import Antd from 'ant-design-vue' 
import 'ant-design-vue/dist/antd.css';

Vue.config.isProduct = process.env.NODE_ENV === 'production'; 

Vue.config.productionTip = false


Vue.use(Antd);  


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
