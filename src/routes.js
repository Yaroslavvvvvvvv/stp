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
        path: '/student_first_full_period',
        name: 'student first full period',
        component: () => import('./views/kits/student_full_training/StudentFirstFullPeriod.vue')
    },
    {
        path: '/student_first_full_day_program',
        name: 'student first full day program',
        component: () => import('./views/kits/student_full_training/student_full_program/StudentFirstFullDayProgram.vue')
    },
    {
        path: '/student_second_full_day_program',
        name: 'student second full day program',
        component: () => import('./views/kits/student_full_training/student_full_program/StudentSecondFullDayProgram.vue')
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
        path: '/student_second_full_period',
        name: 'student second full period',
        component: () => import('./views/kits/student_full_training/StudentSecondFullPeriod.vue')
    },
    {
        path: '/student_day_first_full_program',
        name: 'student day first full program',
        component: () => import('./views/kits/student_full_training/student_full_program/StudentDayFirstFullProgram.vue')
    },
    {
        path: '/student_day_second_full_program',
        name: 'student day second full program',
        component: () => import('./views/kits/student_full_training/student_full_program/StudentDaySecondFullProgram.vue')
    },
    {
        path: '/student_third_period',
        name: 'student third period',
        component: () => import('./views/kits/student_basic_training/StudentThirdPeriod.vue')
    },
    {
        path: '/first_day_student_program',
        name: 'first day student program',
        component: () => import('./views/kits/student_basic_training/student_basic_program/FirstDayStudentProgram.vue')
    },
    {
        path: '/second_day_student_program',
        name: 'second day student program',
        component: () => import('./views/kits/student_basic_training/student_basic_program/SecondDayStudentProgram.vue')
    },
    {
        path: '/third_day_student_program',
        name: 'third day student program',
        component: () => import('./views/kits/student_basic_training/student_basic_program/ThirdDayStudentProgram.vue')
    },
    {
        path: '/student_third_full_period',
        name: 'student third full period',
        component: () => import('./views/kits/student_full_training/StudentThirdFullPeriod.vue')
    },
    {
        path: '/first_day_full_student_program',
        name: 'first day full student program',
        component: () => import('./views/kits/student_full_training/student_full_program/FirstDayFullStudentProgram.vue')
    },
    {
        path: '/second_day_full_student_program',
        name: 'second day full student program',
        component: () => import('./views/kits/student_full_training/student_full_program/SecondDayFullStudentProgram.vue')
    },
    {
        path: '/third_day_full_student_program',
        name: 'third day full student program',
        component: () => import('./views/kits/student_full_training/student_full_program/ThirdDayFullStudentProgram.vue')
    },



    {
        path: '/student_fourth_period',
        name: 'student fourth period',
        component: () => import('./views/kits/student_basic_training/StudentFourthPeriod.vue')
    },
    {
        path: '/first_day_program_student',
        name: 'first day program student',
        component: () => import('./views/kits/student_basic_training/student_basic_program/FirstDayProgramStudent.vue')
    },
    {
        path: '/second_day_program_student',
        name: 'second day program student',
        component: () => import('./views/kits/student_basic_training/student_basic_program/SecondDayProgramStudent.vue')
    },
    {
        path: '/third_day_program_student',
        name: 'third day program student',
        component: () => import('./views/kits/student_basic_training/student_basic_program/ThirdDayProgramStudent.vue')
    },
    {
        path: '/student_fourth_full_period',
        name: 'student fourth full period',
        component: () => import('./views/kits/student_full_training/StudentFourthFullPeriod.vue')
    },
    {
        path: '/first_day_full_program_student',
        name: 'first day full program student',
        component: () => import('./views/kits/student_full_training/student_full_program/FirstDayFullProgramStudent.vue')
    },
    {
        path: '/second_day_full_program_student',
        name: 'second day full program student',
        component: () => import('./views/kits/student_full_training/student_full_program/SecondDayFullProgramStudent.vue')
    },
    {
        path: '/third_day_full_program_student',
        name: 'third day full program student',
        component: () => import('./views/kits/student_full_training/student_full_program/ThirdDayFullProgramStudent.vue')
    },


    //Adept
    {
        path: '/adept_kits',
        name: 'adept kits',
        component: () => import('./views/kits/AdeptKits.vue')
    },
    //Adept Warm
    {
        path: '/adept_warm',
        name: 'adept warm',
        component: () => import('./views/kits/adept_basic_training/AdeptWarm.vue')
    },
    {
        path: '/first_day_adept_warm_program',
        name: 'first day adept warm program',
        component: () => import('./views/kits/adept_basic_training/adept_basic_warm_program/FirstDayAdeptWarmProgram.vue')
    },
    {
        path: '/second_day_adept_warm_program',
        name: 'second day adept warm program',
        component: () => import('./views/kits/adept_basic_training/adept_basic_warm_program/SecondDayAdeptWarmProgram.vue')
    },
    //Adept First Period
    {
        path: '/adept_first_period',
        name: 'adept first period',
        component: () => import('./views/kits/adept_basic_training/AdeptFirstPeriod.vue')
    },
    {
        path: '/adept_first_day_program',
        name: 'adept first day program',
        component: () => import('./views/kits/adept_basic_training/adept_basic_program/AdeptFirstDayProgram.vue')
    },
    {
        path: '/adept_second_day_program',
        name: 'adept second day program',
        component: () => import('./views/kits/adept_basic_training/adept_basic_program/AdeptSecondDayProgram.vue')
    },
    {
        path: '/adept_third_day_program',
        name: 'adept third day program',
        component: () => import('./views/kits/adept_basic_training/adept_basic_program/AdeptThirdDayProgram.vue')
    },
    {
        path: '/adept_fourth_day_program',
        name: 'adept fourth day program',
        component: () => import('./views/kits/adept_basic_training/adept_basic_program/AdeptFourthDayProgram.vue')
    },
    {
        path: '/adept_first_full_period',
        name: 'adept first full period',
        component: () => import('./views/kits/adept_full_training/AdeptFirstFullPeriod.vue')
    },
    {
        path: '/adept_first_day_full_program',
        name: 'adept first day full program',
        component: () => import('./views/kits/adept_full_training/adept_full_program/AdeptFirstDayFullProgram.vue')
    },
    {
        path: '/adept_second_day_full_program',
        name: 'adept second day full program',
        component: () => import('./views/kits/adept_full_training/adept_full_program/AdeptSecondDayFullProgram.vue')
    },
    {
        path: '/adept_third_day_full_program',
        name: 'adept third day full program',
        component: () => import('./views/kits/adept_full_training/adept_full_program/AdeptThirdDayFullProgram.vue')
    },
    {
        path: '/adept_fourth_day_full_program',
        name: 'adept fourth day full program',
        component: () => import('./views/kits/adept_full_training/adept_full_program/AdeptFourthDayFullProgram.vue')
    },
    //Adept Second Period
    {
        path: '/adept_second_period',
        name: 'adept second period',
        component: () => import('./views/kits/adept_basic_training/AdeptSecondPeriod.vue')
    },
    {
        path: '/adept_day_first_program',
        name: 'adept day first program',
        component: () => import('./views/kits/adept_basic_training/adept_basic_program/AdeptDayFirstProgram.vue')
    },
    {
        path: '/adept_day_second_program',
        name: 'adept day second program',
        component: () => import('./views/kits/adept_basic_training/adept_basic_program/AdeptDaySecondProgram.vue')
    },
    {
        path: '/adept_day_third_program',
        name: 'adept day third program',
        component: () => import('./views/kits/adept_basic_training/adept_basic_program/AdeptDayThirdProgram.vue')
    },
    {
        path: '/adept_day_fourth_program',
        name: 'adept day fourth program',
        component: () => import('./views/kits/adept_basic_training/adept_basic_program/AdeptDayFourthProgram.vue')
    },
    {
        path: '/adept_second_full_period',
        name: 'adept second full period',
        component: () => import('./views/kits/adept_full_training/AdeptSecondFullPeriod.vue')
    },
    {
        path: '/adept_day_first_full_program',
        name: 'adept day first full program',
        component: () => import('./views/kits/adept_full_training/adept_full_program/AdeptDayFirstFullProgram.vue')
    },
    {
        path: '/adept_day_second_full_program',
        name: 'adept day second full program',
        component: () => import('./views/kits/adept_full_training/adept_full_program/AdeptDaySecondFullProgram.vue')
    },
    {
        path: '/adept_day_third_full_program',
        name: 'adept day third full program',
        component: () => import('./views/kits/adept_full_training/adept_full_program/AdeptDayThirdFullProgram.vue')
    },
    {
        path: '/adept_day_fourth_full_program',
        name: 'adept day fourth full program',
        component: () => import('./views/kits/adept_full_training/adept_full_program/AdeptDayFourthFullProgram.vue')
    },
    //Adept Third Period
    {
        path: '/adept_third_period',
        name: 'adept third period',
        component: () => import('./views/kits/adept_basic_training/AdeptThirdPeriod.vue')
    },
    {
        path: '/first_day_adept_program',
        name: 'first day adept program',
        component: () => import('./views/kits/adept_basic_training/adept_basic_program/FirstDayAdeptProgram.vue')
    },
    {
        path: '/second_day_adept_program',
        name: 'second day adept program',
        component: () => import('./views/kits/adept_basic_training/adept_basic_program/SecondDayAdeptProgram.vue')
    },
    {
        path: '/third_day_adept_program',
        name: 'third day adept program',
        component: () => import('./views/kits/adept_basic_training/adept_basic_program/ThirdDayAdeptProgram.vue')
    },
    {
        path: '/adept_third_full_period',
        name: 'adept third full period',
        component: () => import('./views/kits/adept_full_training/AdeptThirdFullPeriod.vue')
    },
    {
        path: '/first_day_adept_full_program',
        name: 'first day adept full program',
        component: () => import('./views/kits/adept_full_training/adept_full_program/FirstDayAdeptFullProgram.vue')
    },
    {
        path: '/second_day_adept_full_program',
        name: 'second day adept full program',
        component: () => import('./views/kits/adept_full_training/adept_full_program/SecondDayAdeptFullProgram.vue')
    },
    {
        path: '/third_day_adept_full_program',
        name: 'third day adept full program',
        component: () => import('./views/kits/adept_full_training/adept_full_program/ThirdDayAdeptFullProgram.vue')
    },
    //Adept Fourth Period
    {
        path: '/adept_fourth_period',
        name: 'adept fourth period',
        component: () => import('./views/kits/adept_basic_training/AdeptFourthPeriod.vue')
    },
    {
        path: '/first_day_program_adept',
        name: 'first day program adept',
        component: () => import('./views/kits/adept_basic_training/adept_basic_program/FirstDayProgramAdept.vue')
    },
    {
        path: '/second_day_program_adept',
        name: 'second day program adept',
        component: () => import('./views/kits/adept_basic_training/adept_basic_program/SecondDayProgramAdept.vue')
    },
    {
        path: '/third_day_program_adept',
        name: 'third day program adept',
        component: () => import('./views/kits/adept_basic_training/adept_basic_program/ThirdDayProgramAdept.vue')
    },
    {
        path: '/adept_fourth_full_period',
        name: 'adept fourth full period',
        component: () => import('./views/kits/adept_full_training/AdeptFourthFullPeriod.vue')
    },
    {
        path: '/first_day_full_program_adept',
        name: 'first day full program adept',
        component: () => import('./views/kits/adept_full_training/adept_full_program/FirstDayFullProgramAdept.vue')
    },
    {
        path: '/second_day_full_program_adept',
        name: 'second day full program adept',
        component: () => import('./views/kits/adept_full_training/adept_full_program/SecondDayFullProgramAdept.vue')
    },
    {
        path: '/third_day_full_program_adept',
        name: 'third day full program adept',
        component: () => import('./views/kits/adept_full_training/adept_full_program/ThirdDayFullProgramAdept.vue')
    },
    //Adept Fifth Period
    {
        path: '/adept_fifth_period',
        name: 'adept fourth period',
        component: () => import('./views/kits/adept_basic_training/AdeptFifthPeriod.vue')
    },
    {
        path: '/program_adept_first_day',
        name: 'program adept first day',
        component: () => import('./views/kits/adept_basic_training/adept_basic_program/ProgramAdeptFirstDay.vue')
    },
    {
        path: '/program_adept_second_day',
        name: 'program adept second day',
        component: () => import('./views/kits/adept_basic_training/adept_basic_program/ProgramAdeptSecondDay.vue')
    },
    {
        path: '/program_adept_third_day',
        name: 'program adept third day',
        component: () => import('./views/kits/adept_basic_training/adept_basic_program/ProgramAdeptThirdDay.vue')
    },
    {
        path: '/adept_fifth_full_period',
        name: 'adept fourth full period',
        component: () => import('./views/kits/adept_full_training/AdeptFifthFullPeriod.vue')
    },
    {
        path: '/full_program_adept_first_day',
        name: 'full program adept first day',
        component: () => import('./views/kits/adept_full_training/adept_full_program/FullProgramAdeptFirstDay.vue')
    },
    {
        path: '/full_program_adept_second_day',
        name: 'full program adept second day',
        component: () => import('./views/kits/adept_full_training/adept_full_program/FullProgramAdeptSecondDay.vue')
    },
    {
        path: '/full_program_adept_third_day',
        name: 'full program adept third day',
        component: () => import('./views/kits/adept_full_training/adept_full_program/FullProgramAdeptThirdDay.vue')
    },
    {
        path: '/full_program_adept_fourth_day',
        name: 'full program adept fourth day',
        component: () => import('./views/kits/adept_full_training/adept_full_program/FullProgramAdeptFourthDay.vue')
    },
    //Adept Sixth Period
    {
        path: '/adept_sixth_full_period',
        name: 'adept sixth full period',
        component: () => import('./views/kits/adept_full_training/AdeptSixthFullPeriod.vue')
    },
    {
        path: '/adept_sixth_full_first',
        name: 'adept sixth full first',
        component: () => import('./views/kits/adept_full_training/adept_full_program/AdeptSixthFullFirst.vue')
    },
    {
        path: '/adept_sixth_full_second',
        name: 'adept sixth full second',
        component: () => import('./views/kits/adept_full_training/adept_full_program/AdeptSixthFullSecond.vue')
    },
    {
        path: '/adept_sixth_full_third',
        name: 'adept sixth full third',
        component: () => import('./views/kits/adept_full_training/adept_full_program/AdeptSixthFullThird.vue')
    },
    //Expert
    {
        path: '/expert_kits',
        name: 'expert kits',
        component: () => import('./views/kits/ExpertKits.vue')
    },
    //Expert Warm
    {
        path: '/expert_warm',
        name: 'expert warm',
        component: () => import('./views/kits/expert_basic_training/ExpertWarm.vue')
    },
    {
        path: '/first_day_expert_warm_program',
        name: 'first day expert warm program',
        component: () => import('./views/kits/expert_basic_training/expert_basic_warm_training/FirstDayExpertWarmProgram.vue')
    },
    {
        path: '/second_day_expert_warm_program',
        name: 'second day expert warm program',
        component: () => import('./views/kits/expert_basic_training/expert_basic_warm_training/SecondDayExpertWarmProgram.vue')
    },
    {
        path: '/third_day_expert_warm_program',
        name: 'third day expert warm program',
        component: () => import('./views/kits/expert_basic_training/expert_basic_warm_training/ThirdDayExpertWarmProgram.vue')
    },
    {
        path: '/expert_full_warm',
        name: 'expert full warm',
        component: () => import('./views/kits/expert_full_training/ExpertFullWarm.vue')
    },
    {
        path: '/first_day_expert_full_warm_program',
        name: 'first day expert full warm program',
        component: () => import('./views/kits/expert_full_training/expert_full_warm_training/FirstDayExpertFullWarmProgram.vue')
    },
    {
        path: '/second_day_expert_full_warm_program',
        name: 'second day expert full warm program',
        component: () => import('./views/kits/expert_full_training/expert_full_warm_training/SecondDayExpertFullWarmProgram.vue')
    },
    {
        path: '/third_day_expert_full_warm_program',
        name: 'third day expert full warm program',
        component: () => import('./views/kits/expert_full_training/expert_full_warm_training/ThirdDayExpertFullWarmProgram.vue')
    },
    //Expert First Period
    {
        path: '/expert_first_period',
        name: 'expert first period',
        component: () => import('./views/kits/expert_basic_training/ExpertFirstPeriod.vue')
    },
    {
        path: '/expert_first_day_program',
        name: 'expert first day program',
        component: () => import('./views/kits/expert_basic_training/expert_basic_program/ExpertFirstDayProgram.vue')
    },
    {
        path: '/expert_second_day_program',
        name: 'expert second day program',
        component: () => import('./views/kits/expert_basic_training/expert_basic_program/ExpertSecondDayProgram.vue')
    },
    {
        path: '/expert_third_day_program',
        name: 'expert third day program',
        component: () => import('./views/kits/expert_basic_training/expert_basic_program/ExpertThirdDayProgram.vue')
    },
    {
        path: '/expert_fourth_day_program',
        name: 'expert fourth day program',
        component: () => import('./views/kits/expert_basic_training/expert_basic_program/ExpertFourthDayProgram.vue')
    },
    {
        path: '/expert_first_full_period',
        name: 'expert first full period',
        component: () => import('./views/kits/expert_full_training/ExpertFirstFullPeriod.vue')
    },
    {
        path: '/expert_first_full_day_program',
        name: 'expert first full day program',
        component: () => import('./views/kits/expert_full_training/expert_full_program/ExpertFirstFullDayProgram.vue')
    },
    {
        path: '/expert_second_full_day_program',
        name: 'expert second full day program',
        component: () => import('./views/kits/expert_full_training/expert_full_program/ExpertSecondFullDayProgram.vue')
    },
    {
        path: '/expert_third_full_day_program',
        name: 'expert third full day program',
        component: () => import('./views/kits/expert_full_training/expert_full_program/ExpertThirdFullDayProgram.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;