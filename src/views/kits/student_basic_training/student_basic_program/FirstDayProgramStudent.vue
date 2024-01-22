<script setup>
const exercises = [
  {
    image: "/images/girl_push_up.webp",
    description: "3-6 підтягування стоячи ногами на землі + 2-4 австралійських + 1 звичайне (кожне коло змінюємо всі " +
        "хвати з верхнього на нижній та навпаки)."
  },
  {
    image: "/images/girl_squat.webp",
    description: "2 віджимання на брусах + 4 віджимання від підлоги + 4 віджимання від підлоги з колін."
  },
  {
    image: "/images/girl_deadlift.webp",
    description: "5 випадів назад на кожну ногу + 5 присідань."
  },
  {
    image: "/images/girl_deadlift.webp",
    description: "40 хвилин кругової довільної роботи у своєму темпі в минулих пунктах, далі легка кардіо заминка не більше 30 хвилин."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/student_fourth_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-500 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-cyan-800">День 1</h2>
      </div>
      <div class="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6 ">
        <div v-for="(exercise, index) in exercises" :key="index" class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
          <div class="h-auto overflow-hidden">
            <div class="h-44 overflow-hidden relative">
              <img :src="exercise.image" alt="" class="">
            </div>
          </div>
          <div class="bg-white py-4 px-3">
            <h3 class="text-sm font-extrabold"><span class="text-sm font-extrabold text-sky-800">{{ index + 1 }}. </span><br>
              {{ exercise.description }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>