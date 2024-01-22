<script setup>
const exercises = [
  {
    image: "/images/girl_push_up.webp",
    description: "\n" +
        "Махи на плечі чи жим над головою з гумою чи вагою тотал 150-500. Мінімальне подрібнення. Після кожної зупинки " +
        "або 5-20 підтягувань стоячи ногами на землі або 2-6 звичайних або 8-20 присідань або 10-30 скручувань на прес " +
        "або 5-12 австралійських підтягувань або по 5-10 випадів на кожну ногу або підйом на біцепс з гумою або з вагою 10-20 повторів. " +
        "Робимо без зупинки в рівному не швидкому темпі з відпочинком до 60 секунд."
  },
  {
    image: "/images/girl_squat.webp",
    description: "(Опціонально) Підйом над головою на майже прямих руках гуми, закріпленої внизу або ваги. 8-20 повторів " +
        "+ розтягування убік від себе у динаміці. 2-4 підходи. Після кожного підходу підтягування з гумою чи вертикальна, горизонтальна тяга з гумою на максимум."
  }
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
        <h2 class="text-center text-3xl font-bold text-sky-800">День 3</h2>
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