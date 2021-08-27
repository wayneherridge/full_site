import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import EQHome from '../views/eq-portal/EQHome.vue';
import AddLesson from '../views/eq-portal/lessons/AddLesson.vue';
import EditLesson from '../views/eq-portal/lessons/EditLesson.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    // eq-portal
    path: '/eqhome',
    name: 'EQHome',
    component: EQHome,
  },
  {
    path: '/add_lesson',
    name: 'AddLesson',
    component: AddLesson,
  },
  {
    path: '/edit_lesson/:id',
    name: 'EditLesson',
    component: EditLesson,
    props: true,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
