import Vue from 'vue'
import App from './App.vue'
import PluginsTest from "@/plugins/pluginsTest";
Vue.config.productionTip = false


Vue.use(PluginsTest)
new Vue({
  render:h=>h(App),
}).$mount('#app');

