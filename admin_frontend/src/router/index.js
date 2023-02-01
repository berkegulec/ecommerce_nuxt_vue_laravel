import { createRouter, createWebHistory } from 'vue-router'
import { userToken } from '../utils/userStorage_helper';
import { RouteGenerator } from '../utils/routing_tool';

import Login from '../Pages/Auth/Login.vue';
import NotFound from '../Pages/NotFound.vue';
import Dashboard from '../Pages/DasboardView.vue';

import ProductRoutes from './R_Product'
import UsersRoutes from './R_Users'

const generatedRoutes = [
  RouteGenerator('/login', Login),
  RouteGenerator('/dashboard', Dashboard, null, true),
  ...ProductRoutes,
  ...UsersRoutes,
  RouteGenerator('/:pathMatch(.*)*', NotFound),
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: generatedRoutes,
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
    if (to.path === '/' || to.path === '/login') return { name: 'Dashboard' }
  }
})

export default router
