import Vue from "vue";
import Router from "vue-router";
import SimpleLayout from '@/App.vue';

Vue.use(Router);
export default new Router({
    mode: 'history', base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Auth.vue'),
            meta: { layout: SimpleLayout }
        },
        {
            path: '/',
            name: 'DashboardLayout',
            component: () => import('@/views/DashBoard.vue'),
            children: [
                {
                    path: '',
                    name: 'dashboard',
                    component: () => import('@/components/sidebar/dashboard/card-dashboard.vue')
                },
                {
                    path: 'typography',
                    name: 'typography',
                    component: () => import('@/components/sidebar/dashboard/card-dashboard.vue')
                },
                {
                    path: 'data-table',
                    name: 'data-table',
                    component: () => import('@/components/sidebar/home/DataTable.vue')
                }
            ]
        }
    ]
});
