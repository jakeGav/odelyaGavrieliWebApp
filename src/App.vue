<template>
  <v-app>
    <v-main>
      <NavigationBar/>
      <div class="margTop">
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue"
import StickyNavBar from "./components/StickyNavBar.vue"
export default {
  name: 'App',
  components:{
    NavigationBar,
    StickyNavBar
  },
  data: () => ({
    //
  }),
};
</script>
<style scoped>
.margTop{
  margin-top: 190px;
}
</style>
