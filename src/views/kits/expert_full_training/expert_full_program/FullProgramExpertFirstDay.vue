<script setup>
const exercises = [
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування + 5-24 кг в одній динаміці."
  },
  {
    image: "/images/men_deeps.webp",
    description: "Віджимання на брусах + 5-24 кг в одній динаміці."
  },
  {
    image: "/images/repeat.webp",
    description: "Повторення ще двічі пунктів 1 і 2."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування в одній динаміці. Швидке виконання."
  },
  {
    image: "/images/men_deeps.webp",
    description: "Віджимання на брусах в одній динаміці. Швидке виконання."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування з фіксацією нагорі в 2 секунди. Тотал 20-40."
  },
  {
    image: "/images/men_deeps.webp",
    description: "Віджимання на брусах з фіксацією в 90 градусних кутах. Тотал 40-60."
  },
  {
    image: "/images/girl_lunges.webp",
    description: "Тотал 40-120 вистрибування чи випади чи присідання чи присідання з гантелями."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/expert_fifth_full_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-red-600 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-violet-800">День 1</h2>
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