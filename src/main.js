import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import store from "@/store";
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  store,
  //全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
