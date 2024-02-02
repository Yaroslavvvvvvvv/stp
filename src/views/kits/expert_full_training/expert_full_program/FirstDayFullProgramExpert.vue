<script setup>
const exercises = [
  {
    image: "/images/girl_push_up.webp",
    description: "Кросовери гумою на максимум або розведення лежачи на підлозі з помірною вагою + відпочинок 30 секунд " +
        "+ віджимання від підлоги на максимум. Відпочинок хвилина. 3-5 підходів."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Віджимання від підлоги на максимум + підтягування з гумою в одній динаміці. 3-5 підходів."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Вертикальна тяга гуми на максимум + присідання з підйомом на носок 10-30 повторів. 3-5 підходів."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Негативні віджимання від підлоги. Тотал 20-40. Опускаємось не менше 3 секунд. Позитивну фазу виключити."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Опціонально. Тотал 100 скручувань на прес."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/expert_fourth_full_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-red-600 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-violet-700">День 1</h2>
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