import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Home from '@/views/Home'
import CheckLogin from '@/views/CheckLogin'
import RSVP from '@/views/RSVP'
import RSVPConfirmed from '@/views/RSVPConfirmed'
import { isNil } from 'lodash'
import store from '@/store'

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/check-login',
      name: 'check-login',
      component: CheckLogin,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/rsvp-confirmed',
      name: 'rsvp-confirmed',
      component: RSVPConfirmed,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/rsvp',
      name: 'rsvp',
      component: RSVP,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "client-chunk-login" */ '@/views/Register.vue'),
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "client-chunk-login" */ '@/views/Login.vue'),
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () =>
        import(/* webpackChunkName: "client-chunk-products" */ '@/views/Dashboard.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () =>
        import(/* webpackChunkName: "client-chunk-products" */ '@/views/Products.vue')
    },
    {
      path: '/event/:id',
      name: 'event-page',
      props: true,
      component: () =>
        import(/* webpackChunkName: "client-chunk-product-details" */ '@/views/Product.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      props: true,
      component: () =>
        import(/* webpackChunkName: "client-chunk-product-details" */ '@/views/Profile.vue')
    },
    { path: '*', redirect: '/' }
  ]
})

/**
 * Handle user redirections
 */
router.beforeEach((to, from, next) => {
  if (
    !(to.meta && to.meta.authNotRequired) &&
    isNil(store.state.authentication.user)
  ) {
    const path =
      store.state.authentication.user === null ? '/login' : '/check-login'
    return next(`${path}?redirectUrl=${to.path}`)
  }
  next()
})

export default router
