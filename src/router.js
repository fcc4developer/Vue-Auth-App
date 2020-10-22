import Vue from 'vue'
import VueRouter from 'vue-router'

import WelcomePage from './components/welcome/welcome.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
import SignupPage from './components/auth/signup.vue'
import SigninPage from './components/auth/signin.vue'
import ProfilePage from './components/profile/profile.vue'

Vue.use(VueRouter)

const ifAuthenticated = (to, from, next) => {
  const publicPages = ['/signin', '/signup']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('token')
  console.log(loggedIn)
  if (authRequired && !loggedIn) {
    return next('/signin')
  }
  if (!authRequired && loggedIn) {
    next('/dashboard')
    return;
  }
  next();
}

const routes = [
  {
    path: '/',
    component: WelcomePage
  },
  {
    path: '/signup',
    component: SignupPage,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/signin',
    component: SigninPage,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/dashboard',
    component: DashboardPage,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/profile',
    component: ProfilePage,
    beforeEnter: ifAuthenticated
  },
  {
    path: '*',
    redirect: '/'
  }
]
export default new VueRouter({mode: 'history', routes})
