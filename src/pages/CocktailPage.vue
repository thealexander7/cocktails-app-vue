<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import axios from 'axios';

import { COCKTAIL_BY_ID } from '@/constants'
import AppLayout from '@/components/AppLayout.vue';

const route = useRoute();

const cocktailInfo = ref(null);
const cocktailId = computed(() => route.path.split('/').pop())

const ingredients = computed(() => {
  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    if(!cocktailInfo.value[`strIngredient${i}`]) break

    const ingredient = {}
    ingredient.name = cocktailInfo.value[`strIngredient${i}`]
    ingredient.measure = cocktailInfo.value[`strMeasure${i}`]

    ingredients.push(ingredient);
  }
  return ingredients
})

async function getCocktail() {
  const data = await axios.get(`${COCKTAIL_BY_ID}${cocktailId.value}`)
  cocktailInfo.value = data?.data?.drinks[0]
}

getCocktail();
</script>
<template>
  <div v-if="cocktailInfo" class="wrap">
    <AppLayout :imgUrl='cocktailInfo.strDrinkThumb'>
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktailInfo.strDrink }}</div>
          <div class="line"></div>
          <div class="list">
            <div v-for='(item, key) in ingredients' :key='key' class="list-item">
              {{ item.name }}
              <template v-if="item.measure">
                |
                {{ item.measure }}
              </template>
            </div>
          </div>
          <div class="instructions">
            {{ cocktailInfo.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>

</template>

<style lang='scss' scoped>
@import '../assets/styles/main';

</style>