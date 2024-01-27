<script setup>
const exercises = [
  {
    image: "/images/girl_push_up.webp",
    description: "Підтягування 8 повторів."
  },
  {
    image: "/images/girl_squat.webp",
    description: "Австралійські підтягування 10 повторів."
  },
  {
    image: "/images/girl_deadlift.webp",
    description: "Підтягування стоячи ногами землі 12 повторів."
  },
  {
    image: "/images/girl_deadlift.webp",
    description: "Повторення минулих пунктів ще на 2-4 кола."
  },
  {
    image: "/images/girl_deadlift.webp",
    description: "Вертикальні віджимання 15 повторів."
  },
  {
    image: "/images/girl_deadlift.webp",
    description: "Віджимання від підлоги 20 повторів."
  },
  {
    image: "/images/girl_deadlift.webp",
    description: "Махи на плечі з малим навантаженням 25 повторів."
  },
  {
    image: "/images/girl_deadlift.webp",
    description: "Повторення минулих пунктів ще на 2-4 кола."
  },
  {
    image: "/images/girl_deadlift.webp",
    description: "Випади вперед 10 повторів на одну ногу і відразу на іншу."
  },
  {
    image: "/images/girl_deadlift.webp",
    description: "Випади назад 10 повторів на одну ногу і відразу на іншу."
  },
  {
    image: "/images/girl_deadlift.webp",
    description: "10 присідань."
  },
  {
    image: "/images/girl_deadlift.webp",
    description: "Повторення минулих пунктів ще на 1-3 кола."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/adept_sixth_full_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-yellow-400 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-orange-900">День 3</h2>
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