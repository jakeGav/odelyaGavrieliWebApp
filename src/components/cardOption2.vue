<template>
    <router-link :to="{ path: '/' + urlString }" >
        <v-img
        :src="require('../assets/'+urlString+'.jpg')"
        lazy-src="../assets/logo2.png"
        width="500"
        height="500"
        >
            <v-btn
            block
            color="rgba(153, 0, 76, .6)"
            
            absolute
            bottom
            class="v-btn--example"
            >
            <span class="my-span">{{textOnImg}}</span>
            </v-btn>
        </v-img>
    </router-link>
</template>

<script>
export default {
    props:{
      urlString:String,
      textOnImg:String,
    },

}
</script>

<style>
.my-span {
  color: gold;
  font-weight: bold;
}
.v-btn--example {
    bottom: 0;
    position: absolute;
  }
</style>