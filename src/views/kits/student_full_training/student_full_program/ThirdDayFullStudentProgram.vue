<script setup>
const exercises = [
  {
    image: "/images/boy_push_up.webp",
    description: "Віджимання від підлоги 8-20 повторів. Відпочинок 10-20 секунд. Віджимання від підлоги 3-8 повторів. " +
        "Відпочинок 10-15 секунд. Віджимання від підлоги 2-6 повторів."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування 3-10 повторів. Відпочинок 10-30 секунд. Підтягування 1-3 повтори. Відпочинок 20-40 секунд. " +
        "Тотал 4-8 підтягування по 1 повтору."
  },
  {
    image: "/images/repeat.webp",
    description: "Повторення минулих пунктів ще на 3 кола. Відпочинок довгий."
  },
  {
    image: "/images/girl_twisting.webp",
    description: "Скручування на прес 10-20 повторів + 15 махів на плечі з малою вагою або гумою + 20 підйомів на ікри з цими ж " +
        "5 кг у кожній руці. 3 підходи. Відпочинок 1.5 хвилини."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування в одній динаміці."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Віджимання від підлоги в одній динаміці."
  }
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/student_third_full_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-500 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-sky-700">День 3</h2>
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