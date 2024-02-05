<script setup>
const exercises = [
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування + 10-24 кг + віджимання на брусах + 10-24 кг. 10-20 хвилин роботи. Мета зібрати високий збірний " +
        "тотал. Вагу можна змінювати у процесі."
  },
  {
    image: "/images/girl_squat.webp",
    description: "2 присідання + 1 вистрибування на максимум і одразу ж 30 джампінг джеків."
  },
  {
    image: "/images/repeat.webp",
    description: "Повтор пунктів 1 та 2. Але перший пункт виконуватиме з вагою + 5-16 кг, а другий скорочуємо кількість серій до двох."
  },
  {
    image: "/images/boy_biceps.webp",
    description: "Підйом на біцепс 10-16 кг тотал 8-15 повторів на кожну руку, якщо втомився міняй руку. Роби максимально." +
        " Далі 2 віджимання не випрямляючи лікті і не опускаючись нижче 90 градусів та 1 амплітудне віджимання з " +
        "торканням грудьми та верхньою частиною ніг підлоги в одній динаміці. Два кола."
  },
  {
    image: "/images/weight.webp",
    description: "Опціонально. Жим ваги 10-24 кг на 10 повторів над головою. Змінюємо руки. Допустимо швунги, але " +
        "намагатися робити їх по мінімуму. 10 хвилин роботи."
  },
  {
    image: "/images/man_swing.webp",
    description: "Махи на плечі максимум. 3 підходи. Мінімальна або середня вага, гума."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/expert_third_full_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-red-600 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-violet-600">День 2</h2>
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