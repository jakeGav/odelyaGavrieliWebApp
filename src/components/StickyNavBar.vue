<template>
      <v-app-bar
      dark
      prominent
      extended
      src="../assets/background.png"
      class="flex-container"
      sticky
      >
          <v-img src="../assets/logo-white.png" max-width="350px" class="helf" />
      </v-app-bar>
</template>
<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
}
.helf{
  align-self: center;
  justify-content: space-around;
}
</style>