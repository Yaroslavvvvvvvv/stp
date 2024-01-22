<script setup>

</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/beginner_warm">
      <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white">
        Повернутись назад
        <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-emerald-400">Вступні тренування. День 1</h2>
      </div>
      <div class="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6 ">
        <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
          <div class="h-auto overflow-hidden">
            <div class="h-44 overflow-hidden relative">
              <img src="../../../../../public/images/girl_push_up.webp" alt="" class="">
            </div>
          </div>
          <div class="bg-white py-4 px-3">
            <h3 class="text-sm font-extrabold">1-2 присідання + 1-2 підтягування стоячи ногами на землі + 1-2
              віджимання від підлоги з колін + 2 скручування на прес на підлозі. 15 хвилин роботи у комфортному
              темпі.</h3>
          </div>
        </div>
        <div
            class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
          <div class="h-auto overflow-hidden">
            <div class="h-44 overflow-hidden relative">
              <img src="../../../../../public/images/second_run_man.webp" alt="" class="">
            </div>
          </div>
          <div class="bg-white py-4 px-3">
            <h3 class="text-sm font-extrabold">Кардіо навантаження 15 хвилин.</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>