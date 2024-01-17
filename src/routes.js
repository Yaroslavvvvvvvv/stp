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
        path: '/beginner_warm',
        name: 'beginner warm',
        component: () => import('./views/kits/ beginner_basic_training/BeginnerWarm.vue')
    },
    {
        path: '/beginner_warm_program',
        name: 'beginner warm program',
        component: () => import('./views/kits/ beginner_basic_training/beginner_basic_program/BeginnerWarmProgram.vue')
    },
    {
        path: '/second_beginner_warm_program',
        name: 'second beginner warm program',
        component: () => import('./views/kits/ beginner_basic_training/beginner_basic_program/SecondBeginnerWarmProgram.vue')
    },
    {
        path: '/beginner_first_period',
        name: 'beginner first period',
        component: () => import('./views/kits/ beginner_basic_training/BeginnerFirstPeriod.vue')
    },
    {
        path: '/beginner_first_day_program',
        name: 'beginner first day program',
        component: () => import('./views/kits/ beginner_basic_training/beginner_basic_program/BeginnerFirstDayProgram.vue')
    },
    {
        path: '/beginner_second_day_program',
        name: 'beginner second day program',
        component: () => import('./views/kits/ beginner_basic_training/beginner_basic_program/BeginnerSecondDayProgram.vue')
    },
    {
        path: '/beginner_second_period',
        name: 'beginner second period',
        component: () => import('./views/kits/ beginner_basic_training/BeginnerSecondPeriod.vue')
    },
    {
        path: '/beginner_day_first_program',
        name: 'beginner day first program',
        component: () => import('./views/kits/ beginner_basic_training/beginner_basic_program/BeginnerDayFirstProgram.vue')
    },
    {
        path: '/beginner_day_second_program',
        name: 'beginner day second program',
        component: () => import('./views/kits/ beginner_basic_training/beginner_basic_program/BeginnerDaySecondProgram.vue')
    },
    {
        path: '/beginner_first_full_period',
        name: 'beginner first full period',
        component: () => import('./views/kits/begginer_full_training/BeginnerFirstFullPeriod.vue'),
    },
    {
        path: '/beginner_first_day_full_program',
        name: 'beginner first day full program',
        component: () => import('./views/kits/begginer_full_training/beginner_full_program/BeginnerFirstDayFullProgram.vue'),
    },
    {
        path: '/beginner_second_day_full_program',
        name: 'beginner second day full program',
        component: () => import('./views/kits/begginer_full_training/beginner_full_program/BeginnerSecondDayFullProgram.vue'),
    },
    {
        path: '/beginner_second_full_period',
        name: 'beginner second full period',
        component: () => import('./views/kits/begginer_full_training/BeginnerSecondFullPeriod.vue'),
    },
    {
        path: '/beginner_day_first_full_program',
        name: 'beginner day first full program',
        component: () => import('./views/kits/begginer_full_training/beginner_full_program/BeginnerDayFirstFullProgram.vue'),
    },
    {
        path: '/beginner_day_second_full_program',
        name: 'beginner day second full program',
        component: () => import('./views/kits/begginer_full_training/beginner_full_program/BeginnerDaySecondFullProgram.vue'),
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