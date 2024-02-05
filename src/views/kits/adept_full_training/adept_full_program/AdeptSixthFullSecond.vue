<script setup>
const exercises = [
  {
    image: "/images/wall_push_up.webp",
    description: "Вертикальні віджимання 20 повторів + 15 махів на плечі з гумою або малою вагою + підтягування в динаміці, далі " +
        "відпочинок 30 секунд та по одному ідеальному підтягуванню зібрати ТОТАЛ такий самий, як і кількість повторів " +
        "підтягування в динаміці. 3 підходи."
  },
  {
    image: "/images/men_deeps.webp",
    description: "Віджимання на брусах з негативною фазою 2 секунди. Тотал 20."
  },
  {
    image: "/images/men_deeps.webp",
    description: "Віджимання на брусах з негативною фазою 2 секунди. Тотал 20."
  },
  {
    image: "/images/australian_pull_up.webp",
    description: "Австралійські підтягування 5 повторів з нижнього хвата і 5 з верхнього, далі 10 віджимань від підлоги " +
        "з паузою в серидині руху + австралійські підтягування 5 повторів з нижнього хвата і 5 з верхнього + жим малого навантаження над головою не вимикаючи лікті 15 повторів. 2-4 підходи."
  },
  {
    image: "/images/girl_squat.webp",
    description: "Присідання на максимум. Два підходи."
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
        <h2 class="text-center text-3xl font-bold text-orange-900">День 2</h2>
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