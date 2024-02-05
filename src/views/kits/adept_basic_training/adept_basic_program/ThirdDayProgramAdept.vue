<script setup>
const exercises = [
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування 5-10 повторів, 3 секунди опускання, потім вибуховий рух. Відпочинок 1 хвилина і вже на " +
        "4-8 повторів. І ще раз до 4-6/4-6/4-6."
  },
  {
    image: "/images/australian_pull_up.webp",
    description: "Австралійські підтягування в такому самому стилі, на 10-15 повторів, потім 8-12, потім 6-10, 6-10, 6-10."
  },
  {
    image: "/images/wall_push_up.webp",
    description: "Вертикальні віджимання від стіни в такому стилі фіксовано по 12-16, 4 підходи."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування 3-5 повторів у такому ж стилі. Відпочинок 30 секунд до відмови."
  },
  {
    image: "/images/men_deeps.webp",
    description: "Віджимання на брусах по 4-10 повторів у такому ж стилі. До відмови."
  },
  {
    image: "/images/boy_push_up.webp",
    description: "Віджимання від підлоги в такому ж стилі на максимум."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування стоячи ногами на землі в такому ж стилі на максимум."
  },
  {
    image: "/images/girl_squat.webp",
    description: "Присідання повільні в динаміці на максимум. 3 підходи. Відпочинок 1 хвилина."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/adept_fourth_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-yellow-400 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-amber-700">День 3</h2>
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