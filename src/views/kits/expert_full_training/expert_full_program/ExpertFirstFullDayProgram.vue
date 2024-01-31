<script setup>
const exercises = [
  {
    image: "/images/girl_push_up.webp",
    description: "Гиря або гантеля 10-24 кг, 1 взяття на груди з підлоги та жим над головою. Далі міняємо руку. 15 хвилин роботи."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "3-8 підтягування + 5-16 кг + 5-12 віджимань на брусах + 5-24 кг. 5-8 кіл, намагаються нон стоп або з малим " +
        "відпочинком. Вагу можна знижувати у процесі."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Віджимання у стійці біля стіни тотал 10-30 + тотал 40-80 вертикальних віджимань від стіни чи жиму над " +
        "головою ваги чи гуми."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Повторення пунктів 2 і 3."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Віджимання на брусах 10-20 повторів + 15-25 віджимань від підлоги + 15-30 жимів свенгу гирі лежачи на " +
        "підлозі по 16 кг. 3 підходи."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Підтягування з гумою тотал 50-80."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Присідання 20-30 повторів + мертва тяга із двома гантелями 10-24 кг або гума на 15 повторів. Відпочинок" +
        " 30 секунд та відразу ж австралійські підтягування в одній динаміці. 3-4 кола."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/expert_first_full_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-red-600 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-violet-400">День 1</h2>
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