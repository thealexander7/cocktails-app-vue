<script setup>
import { computed, ref } from 'vue';
import axios from 'axios';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';

import { COCKTAIL_RANDOM, INGREDIENT_PICTURE } from '@/constants';
import AppLayout from '@/components/AppLayout.vue';

const cocktailInfo = ref(null);

const ingredients = computed(() => {
  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    if(!cocktailInfo.value[`strIngredient${i}`]) break

    const ingredient = cocktailInfo.value[`strIngredient${i}`]

    ingredients.push(ingredient);
  }
  return ingredients
})

async function getCocktail() {
  const data = await axios.get(`${COCKTAIL_RANDOM}`);
  cocktailInfo.value = data?.data?.drinks[0];
}

getCocktail();
</script>
<template>
  <div
    v-if="cocktailInfo"
    class="wrap"
  >
    <AppLayout
      :imgUrl="cocktailInfo.strDrinkThumb"
    >
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktailInfo.strDrink }}</div>
          <div class="line"></div>
          <div class="slider">
            <swiper
              :slides-per-view="3"
              :space-between="50"
              class="swiper"
            >
              <swiper-slide v-for='(ingredient, key) in ingredients' :key='key'>
                <img :src='`${INGREDIENT_PICTURE}${ingredient}-Small.png`'>
                <div class="name">
                  {{ ingredient }}
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="instructions">
            {{ cocktailInfo.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main';

.slider {
  margin: 50px 0;
}

.swiper {
  max-width: 586px;
}

.name {
  margin-top: 20px;
}
</style>
