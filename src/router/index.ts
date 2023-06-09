import { createRouter, createWebHashHistory } from 'vue-router'

import constRoutes from './constRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constRoutes
})

export { constRoutes }

export default router
