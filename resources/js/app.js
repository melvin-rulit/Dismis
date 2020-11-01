import Vue from 'vue'
// import App from 'App.vue'
import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'
// import "/public/css/tailwind.css"

window.Vue = require('vue');

// Используем плагины 
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Глобальное подключение компонентов
Vue.component('v-header', require('./components/Header.vue').default);
Vue.component('v-footer', require('./components/Footer.vue').default);
// Vue.component('v-herosection', require('./components/HeroSection.vue').default);






const app = new Vue({
    el: '#app',
    data: {
       
      },
});
