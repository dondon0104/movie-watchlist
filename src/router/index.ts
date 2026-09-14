import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import HomeTab from '../views/tabs/HomeTab.vue'
import LibraryTabs from '../views/tabs/LibraryTabs.vue'
import ProfileTab from '../views/tabs/ProfileTab.vue'
import MovieDetailsPage from '../views/MovieDetailsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      { path: 'home', component: HomeTab },
      { path: 'discover', component: LibraryTabs, props: { mode: 'discover' } },
      { path: 'watchlist', component: LibraryTabs, props: { mode: 'watchlist' } },
      { path: 'favorites', component: LibraryTabs, props: { mode: 'favorites' } },
      { path: 'profile', component: ProfileTab },
    ]
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetailsPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
