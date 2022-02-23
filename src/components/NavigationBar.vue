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
.container1 {
  flex-wrap: wrap;
}
.test{
  align-self: center;
}
.helf{
  align-self: center;
  justify-content: space-around;
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
}
</style>