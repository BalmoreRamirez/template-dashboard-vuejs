import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Contact from "@/views/Contact.vue";

Vue.use(VueRouter)

const routes = [
  { path: '/contact', component: Contact },

];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
