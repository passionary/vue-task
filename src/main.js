import Vue from 'vue'
import App from './App.vue'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted(){
    window.test = this;
  }
}).$mount('#app')
