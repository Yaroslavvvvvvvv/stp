import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./components/Home.vue')
    },
    {
        path: '/levels',
        name: 'levels',
        component: () => import('./views/MyLevels.vue')
    },
    {
        path: '/beginner_kits',
        name: 'beginner kits',
        component: () => import('./views/kits/BeginnerKits.vue')
    },
    {
        path: '/student_kits',
        name: 'student kits',
        component: () => import('./views/kits/StudentKits.vue')
    },
    {
        path: '/adept_kits',
        name: 'adept kits',
        component: () => import('./views/kits/AdeptKits.vue')
    },
    {
        path: '/expert_kits',
        name: 'expert kits',
        component: () => import('./views/kits/ExpertKits.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;