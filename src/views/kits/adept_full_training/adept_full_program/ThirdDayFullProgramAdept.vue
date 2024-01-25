<script setup>
const exercises = [
  {
    image: "/images/girl_push_up.webp",
    description: "Підйом на біцепс гантелей 2 повтори + 2 жиму над головою. Гантелі по 5 кг або гума середньої пружності." +
        " Робимо сидячи в одній динаміці 3 підходи."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Австралійські підтягування 10-25 повторів. 2 підходи."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Махи на плечі з гантелями чи гумою низького навантаження. 15 повторів, 3 підходи."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Підтягування з гумою 5-15 повторів. 5 підходів. Відпочинок до хвилини."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Розгинання на трицепс із гумою 10-20 повторів. Відпочинок 30 секунд. 10 віджимань дед стоп від підлоги. 2 підходи."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "25 скручувань на прес. 3 підходи."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "14-20 присідань. Відпочинок 30 секунд. Кожний підхід мінус 2 повтори."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/adept_fourth_full_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-yellow-400 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-orange-700">День 3</h2>
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