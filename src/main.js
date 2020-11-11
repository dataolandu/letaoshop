import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$http = axios;

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
axios.interceptors.response.use(function(response){
  let res = response.data;
  console.log(res);
})




//生产环境提示，默认为false
Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
