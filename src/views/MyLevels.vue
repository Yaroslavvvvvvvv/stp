
<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 text-center">Рівні фізичного навантаження</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <router-link :to="`/` + product.to">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </router-link>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
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
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Призначений для початкової підготовки та приведення в тонус, людини з практично нульовим рівнем будь-яким ' +
        'силових показників.',
  },
  {
    id: 2,
    name: 'Учень',
    to: 'student_kits',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Призначений для початкової підготовки та приведення в тонус, людини, з рівнем підготовки нижче за норму.'
  },
  {
    id: 3,
    name: 'Адепт',
    to: 'adept_kits',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Призначений для базової підготовки людини із середньо-загальним рівнем силових показників.',
  },
  {
    id: 4,
    name: 'Експерт',
    to: 'expert_kits',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Даний рівень призначений для просунутої підготовки людини, з рівнем силових показників вище середнього.',
  },
]
</script>