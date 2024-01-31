<script setup>
const exercises = [
  {
    image: "/images/girl_push_up.webp",
    description: "Віджимання у стійці біля стіни тотал 20-60."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Підтягування 10-15 повторів + 20-25 мертвих тяг 16-32 кг або 10-24 кг у кожній руці. Кожен новий " +
        "підхід мінус 1  2 повтору."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Віджимання у стійці на руках у бандажі з гуми. Тотал 30-60."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Підтягування з гумою тотал 40-60."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Віджимання від підлоги тотал 80-120."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Махи гантелей або гуми легкої ваги на плечі на максимум. Відпочинок 60 секунд, 2-3 підходи."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "10 присідань + 5 присідань із низу до середини + 5 присідань із середини до верху. 3-5 підходів."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Тотал 20-50 вистрибування. Закрити швидко."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Опціонально. 20-50 джампінг джеків + 10-20 скручування на прес. 10 хвилин роботи."
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
        <h2 class="text-center text-3xl font-bold text-violet-400">День 3</h2>
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