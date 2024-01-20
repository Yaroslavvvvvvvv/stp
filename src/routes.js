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
    //Beginner
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
    //Student
    {
        path: '/student_kits',
        name: 'student kits',
        component: () => import('./views/kits/StudentKits.vue')
    },
    {
        path: '/student_warm',
        name: 'student warm',
        component: () => import('./views/kits/student_basic_training/StudentWarm.vue')
    },
    {
        path: '/student_warm_program',
        name: 'student warm program',
        component: () => import('./views/kits/student_basic_training/student_basic_program/StudentWarmProgram.vue')
    },
    {
        path: '/second_student_warm_program',
        name: 'second student warm program',
        component: () => import('./views/kits/student_basic_training/student_basic_program/SecondStudentWarmProgram.vue')
    },
    {
        path: '/third_student_warm_program',
        name: 'third student warm program',
        component: () => import('./views/kits/student_basic_training/student_basic_program/ThirdStudentWarmProgram.vue')
    },
    {
        path: '/student_first_period',
        name: 'student first period',
        component: () => import('./views/kits/student_basic_training/StudentFirstPeriod.vue')
    },
    {
        path: '/student_first_day_program',
        name: 'student first day program',
        component: () => import('./views/kits/student_basic_training/student_basic_program/StudentFirstDayProgram.vue')
    },
    {
        path: '/student_second_day_program',
        name: 'student second day program',
        component: () => import('./views/kits/student_basic_training/student_basic_program/StudentSecondDayProgram.vue')
    },
    {
        path: '/student_second_period',
        name: 'student second period',
        component: () => import('./views/kits/student_basic_training/StudentSecondPeriod.vue')
    },
    {
        path: '/student_day_first_program',
        name: 'student day first program',
        component: () => import('./views/kits/student_basic_training/student_basic_program/StudentDayFirstProgram.vue')
    },
    {
        path: '/student_day_second_program',
        name: 'student day second program',
        component: () => import('./views/kits/student_basic_training/student_basic_program/StudentDaySecondProgram.vue')
    },
    {
        path: '/student_third_period',
        name: 'student third period',
        component: () => import('./views/kits/student_basic_training/StudentThirdPeriod.vue')
    },
    {
        path: '/student_fourth_period',
        name: 'student fourth period',
        component: () => import('./views/kits/student_basic_training/StudentFourthPeriod.vue')
    },

    //Adept
    {
        path: '/adept_kits',
        name: 'adept kits',
        component: () => import('./views/kits/AdeptKits.vue')
    },
    //Expert
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