<script setup>

defineProps({
  cocktail: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="root">
    <router-link :to="{ path: '/cocktail/' + cocktail.idDrink}">
      <div :style='`background-image: url(${cocktail.strDrinkThumb})`' class="picture"></div>    
      <div class="name">{{ cocktail.strDrink }}</div>
    </router-link>
  </div>
</template>

<style lang='scss' scoped>
@import '../assets/styles/main';

.root {
  width: calc((100% - 76px)/3);
  padding-right: 38px;
  padding-bottom: 20px;

  &:nth-child(3n + 3) {
    padding-right: 0;
  }
}

.picture {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 100%;
}

.name {
  padding-top: 15px;
  letter-spacing: 0.1em;
}

</style>