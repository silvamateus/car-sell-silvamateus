<template>
  <div id="home">
    <div class="carousel-wrapper">
      <transition name="carousel" mode="out-in">
        <div
          v-for="index of [currentIndex]"
          :key="`car-${index}`"
          class="carousel"
        >
          <img :src="currentCar" />
        </div>
      </transition>
      <div class="carousel-text">
        <h2>Início</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          necessitatibus enim numquam esse dolore! Animi iure cumque nostrum,
          soluta porro earum facere at eos inventore ducimus nesciunt tempore
          eius quod!
        </p>
        <div class="indication">
          <p
            v-for="(car, index) of cars"
            :key="`dot-${index}`"
            :class="{ 'indication-dot': true, dot: applyDot(index) }"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cars: [
        "/img/go0866gnj.jpg",
        "/img/bhjcfts4.jpg",
        "/img/chxi20a.jpg",
        "/img/fghc453d.jpg",
        "/img/hhio86jl.jpg",
      ],
      currentIndex: 0,
    };
  },
  computed: {
    // Return the car that will be shown
    currentCar() {
      return this.cars[this.currentIndex % this.cars.length];
    },
  },
  methods: {
    // Define Carousel Slide
    startCarousel() {
      setInterval(this.next, 10000);
    },
    // Add up +1 to index that will be applied to image
    next() {
      this.currentIndex++;
    },
    applyDot(index) {
      return this.cars.indexOf(this.currentCar) === index;
    },
  },
  // Start Carousel Slide
  mounted() {
    this.$nextTick(() => this.startCarousel());
  },
};
</script>

<style scoped>
#home {
  padding: 5rem 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
img {
  width: 100%;
  height: 85vh;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.432);
  object-fit: cover;
  z-index: -4;
}
/* Carousel */
.carousel-wrapper {
  width: 100vw;
  position: relative;
  z-index: -3;
}
.carousel {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.carousel-text {
  background-color: rgba(0, 0, 0, 0.432);
  height: 100%;
  width: 100%;
  color: var(--white);
  padding: 1rem;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.carousel-text h2 {
  padding-bottom: 1rem;
}
.carousel-text > p {
  line-height: 1.5;
  margin-top: -6rem;
}
.indication {
  display: flex;
  margin: 0 auto;
}
.indication-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #a0a0a0;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.274);
  margin-right: 1rem;
}
.dot {
  background-color: var(--white);
  transition: background-color 2s ease-in-out;
}
/* Carousel Animation */
@keyframes carousel-enter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes carousel-leave {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.carousel-enter-active {
  animation: carousel-enter 500ms ease;
}
.carousel-leave-active {
  animation: carousel-leave 500ms ease;
}
</style>
