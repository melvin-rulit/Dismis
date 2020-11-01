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
Vue.component('v-featuressection', require('./components/FeaturesSection.vue').default);
Vue.component('v-latestproducts', require('./components/LatestProducts.vue').default);
Vue.component('v-herosection', require('./components/HeroSection.vue').default);
Vue.component('v-productsection', require('./components/ProductFilterSection.vue').default);
Vue.component('v-form', require('./components/BannerSection.vue').default);
Vue.component('v-footer', require('./components/Footer.vue').default);






const app = new Vue({
    el: '#app',
    data: {
       
      },
});
