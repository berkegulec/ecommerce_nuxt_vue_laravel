import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../Pages/DasboardView.vue';
import Login from '../Pages/Auth/Login.vue';
import { userToken } from '../utils/userStorage_helper';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      requiresAuth: true
    },
  ],
  linkActiveClass: 'active'
})

router.beforeEach(async (to, from) => {
  let isAuthenticated = userToken.hasToken();
  if (
    // make sure the user is authenticated
    !isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    (to.path !== '/login' || to.path === '/')
  ) {
    // redirect the user to the login page
    return { path: '/login' }
  }

  if (isAuthenticated) {
    console.log(to.path);
    if (to.path === '/' || to.path === '/login') return { name: 'Dashboard' }
  }
})

export default router
