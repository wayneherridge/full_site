import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import EQHome from '../views/eq-portal/EQHome.vue';
import AddLesson from '../views/eq-portal/lessons/AddLesson.vue';
import EditLesson from '../views/eq-portal/lessons/EditLesson.vue';
import AddActivity from '../views/eq-portal/activities/AddActivity.vue';
import EditActivity from '../views/eq-portal/activities/EditActivity.vue';

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
    path: '/add_activity',
    name: 'AddActivity',
    component: AddActivity,
  },
  {
    path: '/edit_activity/:id',
    name: 'EditActivity',
    component: EditActivity,
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
