<template>
  <div class="bg-white animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold xl:text-4xl xl:font-extrabold lg:text-4xl lg:font-extrabold md:text-4xl
      md:font-extrabold sm:text-4xl sm:font-extrabold tracking-tight text-sky-800 text-center">
        Рівні фізичного навантаження</h2>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

        <div v-for="product in products" :key="product.id" class="group relative">
          <router-link :to="`/` + product.to">
            <div
                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img :src="product.imageSrc" alt="image"
                   class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
            </div>
          </router-link>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-3xl font-bold text-sky-900 text-center">
                {{ product.name }}
              </h3>
              <p class="mt-2 text-sm font-extrabold text-gray-600">{{ product.info }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: 'Новачок',
    to: 'beginner_kits',
    imageSrc: '/images/levels/beginner_level.webp',
    info: 'Призначений для початкової підготовки та приведення в тонус, людини з практично нульовим рівнем будь-яким ' +
        'силових показників.',
  },
  {
    id: 2,
    name: 'Учень',
    to: 'student_kits',
    imageSrc: '/images/levels/student_level.jpg',
    info: 'Призначений для початкової підготовки та приведення в тонус, людини, з рівнем підготовки нижче за норму.'
  },
  {
    id: 3,
    name: 'Адепт',
    to: 'adept_kits',
    imageSrc: '/images/levels/adept_level.webp',
    info: 'Призначений для базової підготовки людини із середньо-загальним рівнем силових показників.',
  },
  {
    id: 4,
    name: 'Експерт',
    to: 'expert_kits',
    imageSrc: '/images/levels/expert_level.webp',
    info: 'Даний рівень призначений для просунутої підготовки людини, з рівнем силових показників вище середнього.',
  },
]
</script>