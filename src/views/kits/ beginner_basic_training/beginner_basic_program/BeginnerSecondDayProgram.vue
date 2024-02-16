<script setup>
const exercises = [
  {
    image: "/images/boy_pull_up.webp",
    description: "Підтягування стоячи ногами на землі. Тотал 8-40."
  },
  {
    image: "/images/australian_pull_up.webp",
    description: "Австралійські підтягування тотал 8-30."
  },
  {
    image: "/images/gym_pull_up.webp",
    description: "Підтягування стоячи ногами землі тотал 10-40."
  },
  {
    image: "/images/gym_push_up.webp",
    description: "Віджимання від підлоги. Тотал 6-20."
  },
  {
    image: "/images/light_push_up.webp",
    description: "Віджимання від підлоги з колін. Тотал 10-30."
  },
  {
    image: "/images/another_push_up.webp",
    description: "Віджимання від високих підставок. Тотал 10-30."
  },
  {
    image: "/images/squat.webp",
    description: "Присідання. Кожні 30 секунд 2-5 повторів. Тотал 30-50."
  },
  {
    image: "/images/jump_rope.webp",
    description: "Кардіо навантаження 10 хвилин."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/beginner_first_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-emerald-600">День 2</h2>
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