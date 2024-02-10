<template>
  <div class="bg-gradient-to-r from-purple-500 to-pink-500">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 animate-fade-down animate-duration-1000">
      <h2 class="text-2xl font-bold xl:text-4xl xl:font-extrabold lg:text-4xl lg:font-extrabold md:text-4xl
      md:font-extrabold sm:text-4xl sm:font-extrabold tracking-tight text-gray-950 text-center">
        Рівні фізичного навантаження</h2>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

        <div v-for="product in products" :key="product.id" class="group relative">
          <router-link :to="`/` + product.to">
            <div v-if="!product.imageLoaded"
                 class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none">
              <svg class="animate-spin h-5 w-5 mx-auto mt-6 text-gray-400" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 014 12H0c0 6.627 5.373 12 12 12v-4c-3.86 0-7.272-2.102-9.158-5.209l3.158-1.5zm4.334-2.039l1.732 1l2-3.464l-1.732-1l-2 3.464zm6.072-3.179l-1.732 1l-2-3.464l1.732-1l2 3.464zM15.5 6h2v5h-2V6z"></path>
              </svg>
            </div>
            <div v-else
                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:brightness-110 group-hover:scale-105 lg:h-80 transition-transform duration-300">
              <img :src="product.imageSrc" alt="image" @load="handleImageLoad(product)"
                   class="h-full w-full object-cover object-center lg:h-full lg:w-full "/>
            </div>
          </router-link>
          <div class="mt-4 flex justify-between" v-if="product.imageLoaded">
            <div>
              <router-link :to="`/` + product.to">
              <h3 class="text-3xl font-extrabold text-center group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300" :class="product.color">
                {{ product.name }}
              </h3>
              </router-link>
              <p class="mt-2 text-md font-extrabold text-gray-950">{{product.pull_up}}</p>
              <p class="text-md font-extrabold text-gray-950">{{product.push_up}}</p>
              <p class="mt-2 text-md font-bold text-gray-200">{{ product.info }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const products = [
  {
    id: 1,
    name: 'Новачок',
    to: 'beginner_kits',
    imageSrc: '/images/levels/beginner_level.webp',
    info: 'Призначений для початкової підготовки та приведення в тонус, людини з практично нульовим рівнем будь-яким ' +
        'силових показників.',
    color:'text-green-500',
    pull_up:'Підтягування - 0',
    push_up:'Віджимання від підлоги - 0',
    imageLoaded: ref(false)
  },
  {
    id: 2,
    name: 'Учень',
    to: 'student_kits',
    imageSrc: '/images/levels/student_level.webp',
    info: 'Призначений для початкової підготовки та приведення в тонус, людини, з рівнем підготовки нижче за норму.',
    color:'text-blue-500',
    pull_up:'Підтягування - 5',
    push_up:'Віджимання від підлоги - 10',
    imageLoaded: ref(false)
  },
  {
    id: 3,
    name: 'Адепт',
    to: 'adept_kits',
    imageSrc: '/images/levels/adept_level.webp',
    info: 'Призначений для базової підготовки людини із середньо-загальним рівнем силових показників.',
    color:'text-yellow-400',
    pull_up:'Підтягування - 8-12',
    push_up:'Віджимання від підлоги - 20-30',
    imageLoaded: ref(false)
  },
  {
    id: 4,
    name: 'Експерт',
    to: 'expert_kits',
    imageSrc: '/images/levels/expert_level.webp',
    info: 'Даний рівень призначений для просунутої підготовки людини, з рівнем силових показників вище середнього.',
    color:'text-red-600',
    pull_up:'Підтягування - 14-20',
    push_up:'Віджимання від підлоги - 35-45',
    imageLoaded: ref(false)
  },
]

const handleImageLoad = (product) => {
  product.imageLoaded.value = true;
};
</script>
<style>

</style>