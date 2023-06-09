import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import { CONST_ROUTES } from '@/constants'
import { DefaultLayout, ParentLayout } from '@/layout'
import { constRoutes } from '@/router'

import store from '.'

const routeComponents = import.meta.glob(`../views/**/index.{jsx,tsx,vue}`)
const loadComponent = (component: string) => {
  return ['jsx', 'tsx', 'vue']
    .map(v => routeComponents[`../views/${component}/index.${v}`])
    .find(v => !!v)
}

/**
 * 过滤菜单树
 */
async function filterMenuTree(menus: Menu[]) {
  const res = [] as any[]

  for (const menu of menus) {
    const temp = { ...menu }

    if (menu.component === 'DefaultLayout') {
      temp.component = DefaultLayout
    } else if (menu.component === 'ParentLayout') {
      temp.component = ParentLayout
    } else {
      const component = loadComponent(menu.component)!
      const module: any = await component()

      temp.name = menu.name || module.default.name
      temp.component = component
    }

    if (temp.children) {
      temp.children = await filterMenuTree(temp.children)
    }

    res.push(temp)
  }

  return res
}

export const usePermissionStore = defineStore('permission', () => {
  const state = reactive({
    routes: [] as RouteRecordRaw[],
    matched: [] as string[]
  })

  async function generate(menus: Menu[]) {
    const accessedRoutes: RouteRecordRaw[] = await filterMenuTree(menus)

    accessedRoutes.push({
      path: '/:pathMatch(.*)*',
      redirect: {
        path: CONST_ROUTES.ERROR,
        query: { status: 404 }
      }
    })

    state.routes = constRoutes.concat(accessedRoutes)

    return accessedRoutes
  }

  return {
    ...toRefs(state),
    generate
  }
})

export function usePermissionStoreHook() {
  return usePermissionStore(store)
}
