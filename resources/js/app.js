import Vue from 'vue'
import router from "./router"
import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'
// import "/public/css/tailwind.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.Vue = require('vue');

// Используем плагины 
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Глобальное подключение компонентов
Vue.component('v-header', require('./components/Header.vue').default);
Vue.component('b-corusel', require('./components/B-corusel.vue').default);
Vue.component('v-featuressection', require('./components/FeaturesSection.vue').default);
Vue.component('v-latestproducts', require('./components/LatestProducts.vue').default);
Vue.component('v-herosection', require('./components/HeroSection.vue').default);
Vue.component('v-productsection', require('./components/ProductFilterSection.vue').default);
Vue.component('v-form', require('./components/BannerSection.vue').default);
Vue.component('v-footer', require('./components/Footer.vue').default);

const app = new Vue({
  router,

}).$mount('#app')
