<script setup>
const exercises = [
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування 4-10 повторів, 2-3 секунди опускання, потім вибуховий рух. Відпочинок 1 хвилина і вже на " +
        "3-8 повторів. І ще раз до 3-7/3-7/2-7."
  },
  {
    image: "/images/australian_pull_up.webp",
    description: "Австралійські підтягування в такому самому стилі, на 12-15 повторів, потім 10-12, потім 8-10/6-10/5-10."
  },
  {
    image: "/images/girl_rubber.webp",
    description: "Жим ваги або гуми з навантаженням вище за середнє над головою в такому ж стилі 12-15 повторів. 4 підходи."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування 2-5 повторів у такому ж стилі. Відпочинок 30 секунд. На максимум."
  },
  {
    image: "/images/men_deeps.webp",
    description: "Віджимання на брусах по 4-10 повторів у такому ж стилі. На максимум."
  },
  {
    image: "/images/boy_push_up.webp",
    description: "Віджимання від підлоги в такому самому стилі на максимум."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування стоячи ногами на землі у такому ж стилі. На максимум."
  },
  {
    image: "/images/girl_squat.webp",
    description: "Присідання повільні в динаміці максимум. 2 підходи. Відпочинок 1 хвилина."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/adept_fifth_full_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-yellow-400 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-orange-800">День 1</h2>
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