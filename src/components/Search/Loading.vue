<template>
  <div class="loading" v-if="loading">
    <div class="pulse pulse1"></div>
    <div class="pulse pulse2"></div>
    <div class="pulse pulse3"></div>
  </div>
</template>

<script>
export default {
  props: {
    loading: { type: Boolean },
  },
};
</script>

<style>
.loading {
  background-color: rgba(255, 248, 248, 0.534);
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pulse {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #136440;
  border-radius: 100%;
  margin: 0.3rem;
  animation: pulseDelay 750ms cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
.pulse1 {
  animation-delay: 120ms;
}
.pulse2 {
  animation-delay: 240ms;
}
.pulse3 {
  animation-delay: 360ms;
}
@keyframes pulseDelay {
  0%,
  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;
    opacity: 1;
  }
  45% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    -webkit-opacity: 0.7;
    opacity: 0.7;
  }
}
</style>
