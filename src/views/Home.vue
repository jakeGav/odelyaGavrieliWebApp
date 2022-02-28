<template>
  <div>
    <h1>This is an home page</h1>
    <br />
    <div class="flexible2">
      <card2 urlString="cake" textOnImg="עוגות" />
      <card2 urlString="caps" textOnImg="קינוחי כוסות" />
      <card2 urlString="food" textOnImg="מגשי אירוח" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import card from "../components/card";
import card2 from "../components/cardOption2";

export default {
  name: "Home",

  components: {
    HelloWorld,
    card,
    card2,
  },
};
</script>
<style>
.flexible {
  justify-content: center;
}
.flexible2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
}
</style>
