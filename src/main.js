import Vue from 'vue';
import App from './App.vue';
// app.js
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

// app.js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
