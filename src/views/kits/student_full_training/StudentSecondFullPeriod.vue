<script setup>

</script>

<template>
  <div class="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20 animate-fade-down animate-duration-1000">
    <router-link to="/student_kits">
      <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-500 text-lg font-bold text-white">
        Повернутись назад
        <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      </button>
    </router-link>
    <div>
      <h2 class="text-center text-3xl font-bold text-sky-600">Період 2 (14-16 днів)</h2>
    </div>
    <div class="border-l-2 mt-10">
      <!-- Card 1 -->
      <router-link to="/student_day_first_full_program">
        <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-sky-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <!-- Dot Follwing the Left Vertical Line -->
          <div class="w-5 h-5 bg-sky-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
          <!-- Line that connecting the box with the vertical line -->
          <div class="w-10 h-1 bg-sky-300 absolute -left-10 z-0"></div>
          <!-- Content that showing in the box -->
          <div class="flex-auto">
            <h1 class="text-xl font-bold">День 1</h1>
          </div>
        </div>
      </router-link>
      <!-- Card 2 -->
      <router-link to="/student_day_second_full_program">
        <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-sky-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <!-- Dot Follwing the Left Vertical Line -->
          <div class="w-5 h-5 bg-sky-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
          <!-- Line that connecting the box with the vertical line -->
          <div class="w-10 h-1 bg-sky-300 absolute -left-10 z-0"></div>
          <!-- Content that showing in the box -->
          <div class="flex-auto">
            <h1 class="text-xl font-bold">День 2</h1>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>