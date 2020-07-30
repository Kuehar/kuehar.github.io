<template>
  <img class="VuetifyLogo" alt="Vuetify Logo" src="/v.png" />
</template>

<style>
.VuetifyLogo {
  width: 180px;
  transform: rotateY(360deg);
  animation: turn 3s ease-out forwards 0.5s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
