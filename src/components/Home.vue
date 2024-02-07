<template>
  <div class="bg_images my_bg max-w-full">
    <div>
      <p class="text-white text-xl text-center"></p>
    </div>
  <router-link to="/levels" class="">
    <div class="box_animate flex hover:scale-125 transition-transform duration-300">
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
.bg_images{
  background-image: url("/public/images/mybg.webp");
  min-width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
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
  width: 30%;
  height: 50%;
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
  width: 30%;
  height: 50%;
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
    changeColors() {
      // Изменяем цвета зеленого и синего на желтый и красный, и наоборот
      this.frontColor = this.frontColor === 'green' ? 'yellow' : 'green';
      this.backColor = this.backColor === 'blue' ? 'red' : 'blue';
    },
  },
};
</script>