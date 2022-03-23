import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index.js';
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'Accueil',
    meta: { requiresAuth: false },
    component: HomeView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    meta: { requiresAuth: false },
    component: () => import(/* webpackChunkName: "about" */ '../views/Page404NotFounded.vue')
  },
  {
    path: '/test-comments',
    name: 'TestComments',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TestCommentsView.vue'),
  },
  {
    path: '/test-createguide',
    name: 'TestCreateGuide',
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TestCreateGuideView.vue'),
  },
  {
    path: '/home#japon',
    hash: '#japon',
    name: 'LeJapon',
    meta: { requiresAuth: false },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/LeJaponView.vue')
    component: HomeView
  },
  {
    path: '/register',
    name: 'Inscription',
    meta: { requiresAuth: false },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterLayout.vue')
  },
  {
    path: '/pointsinteret',
    name: 'PointsInteret',
    meta: { requiresAuth: false },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PointsInteretView.vue')
  },
  {
    path: '/pointsinteret/:idpoi',
    name: 'SinglePOI',
    meta: { requiresAuth: false },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SinglePoi.vue')
  },
  {
    path: '/blogs',
    name: 'BlogsVoyageurs',
    meta: { requiresAuth: false },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogsView.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    meta: { requiresAuth: false },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FaqView.vue')
  },
  {
    path: '/',
    hash: '#contact',
    name: 'Contact',
    meta: { requiresAuth: false },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
    component: HomeView
  },
  {
    path: '/login',
    name: 'SeConnecter',
    meta: { requiresAuth: false },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/backoffice/poi/add',
    name: 'PoiAdd',
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreatePoiView.vue'),
  },
  {
    path: '/backoffice',
    name: 'BackOffice',
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BackOffice.vue'),
  },
  {
    path: '/listeguidesdevoyages',
    name: 'ListeGuidesDeVoyages',
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ListeGuidesDeVoyages.vue'),
  },
  {
    path: '/listeguidesdevoyages/:id',
    name: 'GuideDeVoyageDetail',
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SingleGuide.vue'),
  },

  {
    path: '/listeguidesdevoyages/:id/poi',
    name: 'GuideDeVoyagePOIList',
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BackPointsInteret.vue'),
  },
  {
    path: '/createguide',
    name: 'CreateGuide',
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateGuide.vue'),
  },
  {
    path: '/team',
    name: 'Team',
    meta: { requiresAuth: false },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TeamView.vue')
  }

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  window.scrollTo(0, 0);
  console.log("to ", to);
      console.log("from ", from);
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !store.state.token) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: '/login',
      // save the location we were at to come back later
      //! doesn't work as expected
      query: { redirect: to.fullPath },
    }
  }
})
export default router