<script setup>
const exercises = [
  {
    image: "/images/weight.webp",
    description: "Гиря або інша вага 10-16 кг або гума, 1 взяття на груди з підлоги і жим над головою. Далі міняємо " +
        "руку. 15 хвилин роботи."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "4-6 підтягування + 8-12 віджимань на брусах. 4 кола, намагатися нон стоп."
  },
  {
    image: "/images/man_swing.webp",
    description: "Жим двох гантелі або гирей по 8-16 кг або пружної гуми над головою в динаміці + тотал 40 вертикальних " +
        "віджимань або 80-100 махів на плечі з малим навантаженням."
  },
  {
    image: "/images/repeat.webp",
    description: "Повторення пунктів 2 і 3."
  },
  {
    image: "/images/men_deeps.webp",
    description: "Віджимання на брусах 8-12 повторів + 15-20 віджимань від підлоги + 15 жимів свенгу гирі лежачи на " +
        "підлозі 8-16 кг. 1-3 підходи."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування з гумою тотал 30-80."
  },
  {
    image: "/images/girl_lunges.webp",
    description: "Присідання чи випади на кожну ногу 15-20 повторів + мертва тяга із двома снарядами або гумою 10-24 кг на 20 " +
        "повторів. Відпочинок 30 секунд та відразу ж австралійські підтягування в одній динаміці. 3 кола."
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
        <h2 class="text-center text-3xl font-bold text-orange-700">День 2</h2>
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