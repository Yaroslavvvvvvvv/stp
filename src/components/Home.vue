<template>
  <div class="bg-gray-200 max-w-full animate-fade-down animate-duration-1000">
    <div class=" py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-4">
            <div class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img class="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0" src="/public/images/mybg.webp" alt="">
              <div class="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl" aria-hidden="true">
                <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
              </div>
            </div>
          </div>
          <div>
            <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 class="mt-2 text-2xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">Basic Strength Program</h1>
              <div class="max-w-xl">
                <p class="mt-6 font-bold text-lg text-gray-600">- дозволяє стабільно прогресувати без перевантаження ЦНС та шкоди здоров'ю, залишаючись на піку особистої продуктивності</p>
                <p class="mt-8 font-bold text-lg text-gray-600">- тренування не повторюються, забезпечуючи найвищий рівень залученості, кожне нове заняття це своєрідний челендж</p>
                <p class="mt-8 font-bold text-lg text-gray-600">- розрахована на тренування в будь-яких умовах та локаціях</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <svg @click="scrollDown"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
           stroke="currentColor" class="w-20 h-20 text-gray-950 animate-bounce bg-purple-800 rounded-full">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
      </svg>
    </div>
    <router-link to="/levels" class="">
      <div class="box_animate flex hover:scale-125 transition-transform duration-300" ref="scrollTarget">
        <div class="box animate rotate">
          <div class="front animate movefront flex animate-fade-down" :style="{ background: frontColor }">
            <img src="/public/vite.svg" alt="" class="p-6">
          </div>
          <div class="back animate moveback flex" :style="{ background: backColor }">
            <img src="/public/vite.svg" alt="" class="p-6">
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.box {
  position: relative;
  width: 500px;
  height: 500px;
  margin: 80px auto ;
  transform-style: preserve-3d ;
  animation-name: test ;
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-delay: 0s;
}
.front {
  position: absolute;
  width: 35%;
  height: 45%;
  background: green;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 20px;
  border: 5px solid black;
}
.movefront{

  animation-name: testZ ;
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-delay: 0s;
}
.front::before  {
  position: absolute;
  color:white;
  top: 20px;
  left: 120px;

}
.back {
  position: absolute;
  width: 35%;
  height: 45%;
  background: blue;
  margin: auto ;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 20px;
  border: 5px solid black;
}
.moveback {
  animation-name: testZ1 ;
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-delay: 0s;
  /*animation-direction: reverse ; */
}
.back::before{
  position: absolute;
  color: white;
  top: 20px;
  left: 120px;
  transform: rotateY(180deg);

}

@keyframes test {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
@keyframes testZ {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
@keyframes testZ1 {
  0% {
    transform: rotateZ(360deg) translateZ(-50px);
  }
  100% {
    transform: rotateZ(0deg) translateZ(-50px);
  }
}

</style>

<script>
export default {
  data() {
    return {
      frontColor: 'green',
      backColor: 'blue',
    };
  },
  mounted() {
    // Запускаем таймер для изменения цветов каждые 10 секунд
    setInterval(this.changeColors, 15000);
  },
  methods: {
    scrollDown() {
      // Получаем координаты элемента, до которого будем скроллить
      const targetPosition = this.$refs.scrollTarget.getBoundingClientRect().top;

      // Прокручиваем к этому элементу
      window.scrollTo({
        top: window.pageYOffset + targetPosition, // Учитываем текущую прокрутку
        behavior: 'smooth'
      });
    },
    changeColors() {
      // Изменяем цвета зеленого и синего на желтый и красный, и наоборот
      this.frontColor = this.frontColor === 'green' ? 'yellow' : 'green';
      this.backColor = this.backColor === 'blue' ? 'red' : 'blue';
    },
  },
};
</script>