<script setup>
const exercises = [
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування по 2-4 повтори кожні 30 секунд. Тотал 20-28 повторів."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування 1-3 повтори кожні 25 секунд. Тотал 15-21 повтор."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування 2 повтори кожні 15 секунд. Тотал 10-16 повторів."
  },
  {
    image: "/images/boy_push_up.webp",
    description: "Віджимання на брусах тотал 15-20 повторів + віджимання від підлоги тотал 20-30 повторів."
  },
  {
    image: "/images/men_deeps.webp",
    description: "Віджимання на брусах тотал 13-18 повторів."
  },
  {
    image: "/images/boy_push_up.webp",
    description: "Віджимання від підлоги тотал 13-18 повторів."
  },
  {
    image: "/images/men_deeps.webp",
    description: "Віджимання на брусах тотал 10-14 повторів."
  },
  {
    image: "/images/boy_push_up.webp",
    description: "Віджимання від підлоги тотал 10-14 повторів."
  },
  {
    image: "/images/second_run_man.webp",
    description: "Кардіо навантаження 15 хвилин."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/student_first_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-500 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-cyan-500">День 2</h2>
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