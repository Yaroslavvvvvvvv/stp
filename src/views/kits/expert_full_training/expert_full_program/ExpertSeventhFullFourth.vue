<script setup>
const exercises = [
  {
    image: "/images/rak.webp",
    description: "EMOM. 2-5 віджимання в стійці + 2-5 підйому в передній вис з гумою. 15-30 хвилин."
  },
  {
    image: "/images/girl_squat.webp",
    description: "EMOM. 10 присідань + 10 махів на плечі із великим опором. 15-20 хвилин."
  },
  {
    image: "/images/man_swing.webp",
    description: "Махи на плечі з малим опором на максимум."
  },
  {
    image: "/images/girl_rubber.webp",
    description: "Підйом гуми чи ваги над головою на максимум."
  },
  {
    image: "/images/boy_push_up.webp",
    description: "Віджимання від підлоги статика до втоми в 90 градусів, далі дуже повільно дотискаємо нагору і відразу негативне" +
        " віджимання дуже повільне. 2-3 підходи."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування з гумою у динаміці. 2 підходи."
  },
  {
    image: "/images/australian_pull_up.webp",
    description: "Австралійські підтягування у динаміці. 2 підходи."
  },
  {
    image: "/images/boy_push_up.webp",
    description: "Віджимання від підлоги тотал 30-50 повторів, кожен 5 раз тримаємо себе на прямих руках 5 секунд."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/expert_seventh_full_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-red-600 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-violet-950">День 4 </h2>
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