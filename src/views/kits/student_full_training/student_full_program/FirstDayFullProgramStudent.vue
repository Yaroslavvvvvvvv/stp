<script setup>
const exercises = [
  {
    image: "/images/girl_push_up.webp",
    description: "Вертикальна тяга гуми 30-60 секунд статодинамічної роботи. Відпочинок до 60 секунд. Тотал 5-20 " +
        "підтягувань із гумою. Завдання закрити тотал максимально швидко."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Вертикальна тяга гуми 20-45 секунд статодинамічної роботи. Відпочинок до 60 секунд. Тотал 15 " +
        "підтягувань із гумою. Завдання закрити тотал максимально швидко і сильно дробити тотал."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Горизонтальна тяга гуми 60 секунд статодинамічної роботи. Відпочинок до 60 секунд. Тотал 30 " +
        "австралійських підтягувань з нижнього хвату. Завдання закрити тотал максимально швидко."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Горизонтальна тяга гуми 45 секунд статодинамічної роботи. Відпочинок до 60 секунд. Тотал 25 " +
        "австралійських підтягувань з нижнього хвату. Завдання закрити тотал максимально швидко."
  },
  {
    image: "/images/girl_squat.webp",
    description: "\n" +
        "20 махів на плечі з гумою + 15 вертикальних віджимань + 20 розгинань на трицепс з гумою + 20 віджимань від " +
        "підлоги тотал. 2 підходи."
  },
  {
    image: "/images/girl_squat.webp",
    description: "3 підходи по 20 присідань."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/student_fourth_full_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-500 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-sky-800">День 1</h2>
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