<script setup>
const exercises = [
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування 1-2 повтори. Відпочинок 5-10 секунд. Так до втоми."
  },
  {
    image: "/images/men_deeps.webp",
    description: "Теж саме бруси, але 2-4 повтори."
  },
  {
    image: "/images/repeat.webp",
    description: "Повтор минулих пунктів, але 1 і 2 повтори відповідно."
  },
  {
    image: "/images/boy_push_up.webp",
    description: "Віджимання від підлоги в динаміці."
  },
  {
    image: "/images/australian_pull_up.webp",
    description: "Підтягування стоячи ногами на землі / австралійські підтягування. 6 підходів. Чергуємо вправи. " +
        "Робимо у динаміці. Між 3 та 4 підходами віджимаємося від підлоги з колін у динаміці."
  },
  {
    image: "/images/wall_push_up.webp",
    description: "Вертикальні віджимання на максимум. 3 підходи."
  }
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/student_fourth_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-500 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-cyan-800">День 2</h2>
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