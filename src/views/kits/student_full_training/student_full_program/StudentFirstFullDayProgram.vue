<script setup>
const exercises = [
  {
    image: "/images/men_deeps.webp",
    description: "Віджимання на брусах 2 + підтягування з гумою 2. Кожен новий підхід +2/2."
  },
  {
    image: "/images/australian_pull_up.webp",
    description: "Австралійські підтягування 8-12 повторів + віджимання від підлоги 8-12 повторів. 6-10/6-10 - 4-8/4-8 - 3-6/3-6 - 2-4/2-4."
  },
  {
    image: "/images/steam_press.webp",
    description: "Насос + скручування на прес. Кожен підхід + 2 повтори, починаємо з 5 повторів. Відпочинок 15 секунд. " +
        "Кожний новий підхід відпочинок + 5 секунд. До максимуму, темп виконання середній."
  },
  {
    image: "/images/wall_push_up.webp",
    description: "Вертикальні віджимання в динаміці 3 підходи. Відпочинок не більше хвилини."
  }
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/student_first_full_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-500 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-sky-500">День 1</h2>
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