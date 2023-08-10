import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
    mode: 'history', base: process.env.BASE_URL, routes: [
        {
            path: '/', name: 'auth', component: () => import('@/views/Auth.vue')
            //path: '/', name: 'home', component: () => import('@/components/sidebar/dashboard/card-dashboard.vue')
        }, {
            path: '/data-table', name: 'data-table', component: () => import('@/components/sidebar/home/DataTable.vue')
        },{
            path: '/typography', name: 'typography', component: () => import('@/components/sidebar/dashboard/card-dashboard.vue')
        },
        {
            path: '/dashboard', name: 'dashboard', component: () => import('@/views/DashBoard.vue')
        }
    ]
});
