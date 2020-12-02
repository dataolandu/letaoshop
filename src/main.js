import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

//mock的开关，当需要mock数据时开启
const mock = false;
//这里要用require来导入而不能用import，因为import是预编译导入，用了它之后mock就会一直拦截你的请求然后返回
if(mock){
  require('./mock/api');
}

Vue.prototype.$http = axios;

//easy mock的基础地址
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5fab8d92c2c980774c4b251d/letao';

//mockjs的基础地址
// axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
axios.interceptors.response.use(function(response){
  let res = response.data;
  return res.data;
})




//生产环境提示，默认为false
Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
