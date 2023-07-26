import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES_PATHS } from '@/constants/router';
import HomePage from '@/pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: ROUTES_PATHS.HOME,
      component: HomePage
    },
    {
      path: ROUTES_PATHS.COCKTAIL,
      name: ROUTES_PATHS.COCKTAIL,
      component: () => import("../pages/CocktailPage.vue")
    },
    {
      path: ROUTES_PATHS.COCKTAIL_RANDOM,
      name: ROUTES_PATHS.COCKTAIL_RANDOM,
      component: () => import("../pages/CocktailRandomPage.vue")
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'homePage' }
    }
  ]
})

export default router
