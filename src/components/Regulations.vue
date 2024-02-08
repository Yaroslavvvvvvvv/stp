<script setup>

</script>

<template>
  <div class="bg-gray-200">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 min-h-sceen animate-fade-down animate-duration-1000">
      <div class="flex flex-col items-center">
        <p class="text-gray-950 font-extrabold text-sm md:text-lg lg:text-xl xl:text-2xl mb-5">
          Виконання нормативів системи дозволить перевірити свої сили та відстежити прогрес
        </p>
        <ul class="list-disc">
          <li class="text-gray-600 text-sm md:text-lg lg:text-xl xl:text-2xl font-bold mb-2 ml-2">
            допустимо відпочивати у нейтральних позиціях не більше 3 секунд</li>
          <li class="text-gray-600 text-sm md:text-lg lg:text-xl xl:text-2xl font-bold mb-2 ml-2">
            присідання необхідно виконувати нижче 90 градусів і майже повністю виключаючи коліна</li>
          <li class="text-gray-600 text-sm md:text-lg lg:text-xl xl:text-2xl font-bold mb-2 ml-2">
            руки на віджиманнях необхідно розгинати повністю, тіло має бути пряме, а таз має рухатись синхронно з верхом тіла</li>
          <li class="text-gray-600 text-sm md:text-lg lg:text-xl xl:text-2xl font-bold mb-2 ml-2">
            лікті на підтягуваннях повинні бути розігнуті, плечі повинні бути вимкнені майже повністю,
            підборіддя має чітко заходити трохи вище за рівень верхньої грані турніка</li>
          <li class="text-gray-600 text-sm md:text-lg lg:text-xl xl:text-2xl font-bold mb-2 ml-2">
            розгойдування виключено, допускається природне механічне коливання
          </li>
        </ul>
      </div>
      <div class="grid divide-y divide-gray-600 max-w-xl mx-auto mt-8">
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span class="text-green-500 font-extrabold text-2xl">Новачок</span>
              <span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
            </summary>
            <p class="font-bold text-neutral-600 mt-3 group-open:animate-fadeIn">
              Надається автоматично кожному учаснику.
            </p>
          </details>
        </div>
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span class="text-blue-500 font-extrabold text-2xl">Учень</span>
              <span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
            </summary>
            <p class="font-bold text-neutral-600 mt-3 group-open:animate-fadeIn">
              8 підтягувань, 20 віджимань від підлоги, 30 присідань. Час виконання швидше, ніж за 2 хвилини.
            </p>
          </details>
        </div>
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span class="text-yellow-400 font-extrabold text-2xl">Адепт</span>
              <span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
            </summary>
            <p class="text-neutral-600 font-bold mt-3 group-open:animate-fadeIn">
              14 підтягувань, 35 віджимань від підлоги, 40 присідань. Допустимий відпочинок між вправами не більше 30
              секунд. Допустимо один раз відпочити під час будь-якого з пунктів. Час виконання швидше, ніж за 2.5 хвилини.
            </p>
          </details>
        </div>
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span class="text-red-600 font-extrabold text-2xl">Експерт</span>
              <span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
            </summary>
            <p class="text-neutral-600 font-bold mt-3 group-open:animate-fadeIn">
              20 підтягувань, 45 віджимань від підлоги, 50 присідань. Допустимий відпочинок між вправами не більше 30
              секунд. Допустимо один раз відпочити під час присідань. Час виконання швидше, ніж за 3 хвилини.
            </p>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>