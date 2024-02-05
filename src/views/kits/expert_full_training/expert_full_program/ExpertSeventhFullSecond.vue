<script setup>
const exercises = [
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування тотал 20-30 + віджимання на брусах тотал 30-50."
  },
  {
    image: "/images/men_deeps.webp",
    description: "Віджимання на брусах + 10-16 кг тотал 30-40 + підтягування + 10-16 кг тотал 15-20."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування + 16-32 кг тотал 10-15 + віджимання на брусах + 16-32кг тотал 20-30."
  },
  {
    image: "/images/men_deeps.webp",
    description: "Віджимання на брусах + 5-16 кг тотал 20-35 + підтягування + 5-16 кг тотал 15-22."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування тотал 15-25 + віджимання на брусах тотал 30-50."
  },
  {
    image: "/images/rak.webp",
    description: 'Віджимання у стійці біля стіни або з гумою або жим ваги або гуми або вертикальні віджимання в динаміці.' +
        ' 3-5 підходів. Відпочинок 2 хвилини.'
  },
  {
    image: "/images/man_swing.webp",
    description: "Махи на плечі з великим навантаженням на максимум. 3-4 підходи. Відпочинок 2 хвилини. Після кожного " +
        "підходу 20-40 присідань."
  },
  {
    image: "/images/australian_pull_up.webp",
    description: "Австралійські підтягування з нижнього хвату максимум. 2-4 підходи. Відпочинок 2 хвилини. Після кожного" +
        " підходу 10-20 випадів на кожну ногу."
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
        <h2 class="text-center text-3xl font-bold text-violet-950">День 2 </h2>
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