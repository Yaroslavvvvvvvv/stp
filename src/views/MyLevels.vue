<template>
  <h2 class="text-2xl font-bold xl:text-4xl xl:font-extrabold lg:text-4xl lg:font-extrabold md:text-4xl
      md:font-extrabold sm:text-4xl sm:font-extrabold tracking-tight text-gray-950 text-center bg-gradient-to-r from-purple-500 to-pink-500 pt-4">
    Рівні фізичного навантаження</h2>
  <carousel :itemsToShow="1" class="bg-gradient-to-r from-purple-500 to-pink-500">
    <slide v-for="slide in slides" :key="slide.id" class="">
      <div class="min-w-screen min-h-screen  flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div class=" w-full max-w-6xl rounded shadow-2xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <router-link :to="`/` + slide.to" class="">
            <div class="md:flex items-center -mx-10 animate-fade-down animate-duration-1000">
              <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                  <img :src="slide.imageSrc" class="w-full relative z-10" alt="">
                </div>
              </div>
              <div class="w-full md:w-1/2 px-10">
                <div class="mb-10">
                  <h1 class="font-extrabold uppercase text-3xl mb-5" :class="slide.color">{{ slide.name }}</h1>
                  <p class="mt-2 text-sm font-extrabold text-gray-950">{{ slide.pull_up }}</p>
                  <p class="text-sm font-extrabold text-gray-950">{{ slide.push_up }}</p>
                  <p class="mt-2 text-md font-bold text-gray-200">{{ slide.info }}</p>
                </div>
                <div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </slide>

    <template #addons>
      <navigation></navigation>
      <pagination></pagination>
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          name: 'Новачок',
          to: 'beginner_kits',
          imageSrc: '/images/men_pull_up.webp',
          info: 'Призначений для початкової підготовки та приведення в тонус, людини з нульовим рівнем силових показників.',
          color: 'text-green-500',
          pull_up: 'Підтягування - 0',
          push_up: 'Віджимання від підлоги - 0',
        },
        {
          id: 2,
          name: 'Учень',
          to: 'student_kits',
          imageSrc: '/images/men_pull_up.webp',
          info: 'Призначений для початкової підготовки та приведення в тонус, людини, з рівнем підготовки нижче за норму.',
          color: 'text-blue-500',
          pull_up: 'Підтягування - 5',
          push_up: 'Віджимання від підлоги - 10',
        },
        {
          id: 3,
          name: 'Адепт',
          to: 'adept_kits',
          imageSrc: '/images/boy_push_up.webp',
          info: 'Призначений для базової підготовки людини із середньо-загальним рівнем силових показників.',
          color: 'text-yellow-400',
          pull_up: 'Підтягування - 8-12',
          push_up: 'Віджимання від підлоги - 20-30',
        },
        {
          id: 4,
          name: 'Експерт',
          to: 'expert_kits',
          imageSrc: '/images/men_deeps.webp',
          info: 'Даний рівень призначений для просунутої підготовки людини, з рівнем силових показників вище середнього.',
          color: 'text-red-600',
          pull_up: 'Підтягування - 14-20',
          push_up: 'Віджимання від підлоги - 35-45',
        },
      ]
    };
  }
}
</script>