
import { createRouter, createWebHistory } from 'vue-router';

import WorkPageVue from '../pages/WorkPage.vue';
import WorkDetailPage from '../pages/WorkDetailPage.vue'
import BlogPage from '../pages/BlogPage.vue'
import HomePageVue from '../pages/HomePage.vue';


const routes = [
    {
        path: '/', component: HomePageVue,
        // children: [
        //     { path: 'blog', component: BlogPage },
        //     { path: 'work', component: WorkPageVue },
        //     { path: 'work/detail', component: WorkDetailPage }
        // ]
    },

    {
        path: '/blog', component: BlogPage,

    },
    {
        path: '/work', component: WorkPageVue,

    },
    {
        path: '/detail', component: WorkDetailPage,

    },

]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
        return { top: 0, behavior: 'smooth' };
    },
    routes,
    linkActiveClass: 'active-route'
});



export default router