<script setup>
const exercises = [
  {
    image: "/images/girl_push_up.webp",
    description: "10-15 секунд стільчик + 5-7 присідань + 2 хвилини велотренажер. 3-5 підходів."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Гантелі, вага нижча за середню або гума, махи на плечі 20 повторів + відразу ж жим над головою 10 " +
        "повторів. 3-5 підходів."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Повторення пункту 1."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Нахили з дотиком долоні підлоги 20-30 повторів + планка 20-30 секунд. 3 підходи."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Підйоми на литки без ваги в частковій амплітуді підконтрольно без рахунку на максимум. Відпочинок 1 " +
        "хвилина. 3 підходи."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/adept_fifth_full_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-yellow-400 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-orange-800">День 3</h2>
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