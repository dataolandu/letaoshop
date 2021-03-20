import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as request from './util/all_request'
import VueCookie from 'vue-cookie'
import VueLazyLoad from 'vue-lazyload'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/icons' // icon


//mock的开关，当需要mock数据时开启
const mock = false;
//这里要用require来导入而不能用import，因为import是预编译导入，用了它之后mock就会一直拦截你的请求然后返回
if(mock) {
  require('./mock/api');
}
//easy mock的基础地址:
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5fab8d92c2c980774c4b251d/letao';
//mockjs的基础地址:
// axios.defaults.baseURL = 'http://localhost:3000';


//将axios挂载到vue原型上
Vue.prototype.$http = request;

Vue.use(ElementUI);
Vue.use(VueCookie)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})

//生产环境提示，默认为false
Vue.config.productionTip = false;



new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
