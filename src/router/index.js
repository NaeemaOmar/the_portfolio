import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/home2',
  //   name: 'home2',
  //   component: () => import( '../views/HomeVer2.vue')
  // },
  // {
  //   path: '/home3',
  //   name: 'home3',
  //   component: () => import( '../views/HomeVer3.vue')
  // },
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/HomeVer4.vue')
  },
  // {
  //   path: '/home5',
  //   name: 'home5',
  //   component: () => import( '../views/HomeVer5.vue')
  // },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/ContactView.vue')
  },
  {
    path: '/contactnew',
    name: 'contactnew',
    component: () => import( '../views/ContactViewNew.vue')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import( '../views/TestimonialsView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import( '../views/ProjectsView.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import( '../views/ResumeView.vue')
  },
  {
    path: '/eduExp',
    name: 'eduExp',
    component: () => import( '../views/EducationExperience.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
