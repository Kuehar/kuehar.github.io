import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4abc285f = () => interopDefault(import('../pages/aboutme.vue' /* webpackChunkName: "pages/aboutme" */))
const _781a80e3 = () => interopDefault(import('../pages/contribute.vue' /* webpackChunkName: "pages/contribute" */))
const _71a296d4 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _5b5049c2 = () => interopDefault(import('../pages/why.vue' /* webpackChunkName: "pages/why" */))
const _22e1c14c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aboutme",
    component: _4abc285f,
    name: "aboutme"
  }, {
    path: "/contribute",
    component: _781a80e3,
    name: "contribute"
  }, {
    path: "/inspire",
    component: _71a296d4,
    name: "inspire"
  }, {
    path: "/why",
    component: _5b5049c2,
    name: "why"
  }, {
    path: "/",
    component: _22e1c14c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
