import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import globalAxios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    'AUTH_USER' (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    'STORE_USER' (state, user) {
      state.user = user
    },
    'CLEAR_AUTH_DATA' (state) {
      state.idToken = null
      state.userId = null
      state.user = null
    }
  },
  actions: {
    setLogoutTimer ({commit}, expirationTime) {
      setTimeout(() => {
        commit('CLEAR_AUTH_DATA')
        router.replace('/')
      }, expirationTime * 1000)
    },
    signup ({commit, dispatch}, payload) {
      axios.post(`'accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API_KEY}`, {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(res => {
          console.log(res)
          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('expirationDate', expirationDate)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('email', res.data.email)
          commit('AUTH_USER', {
            token: res.data.idToken,
            userId: res.data.localId,
          });
          dispatch('storeUser', payload)
          dispatch('setLogoutTimer', res.data.expiresIn)
          router.push('/dashboard')

        })
        .catch(err => console.log(err))
    },
    login ({commit, dispatch}, payload) {
      axios.post(`'accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_API_KEY}`, {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(res => {
          console.log(res)
          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('expirationDate', expirationDate)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('email', res.data.email)
          commit('AUTH_USER', {
            token: res.data.idToken,
            userId: res.data.localId,
          });
          dispatch('setLogoutTimer', res.data.expiresIn)
          router.replace('/dashboard')
        })
        .catch(err => console.log(err))
    },
    tryAutoLogin({commit}) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()
      if (now >= expirationDate) {
        return
      }
      const userId = localStorage.getItem('userId')
      commit('AUTH_USER', {
        token: token,
        userId: userId
      })
    },
    logout ({commit}) {
      commit('CLEAR_AUTH_DATA')
      localStorage.removeItem('token')
      localStorage.removeItem('expirationDate')
      localStorage.removeItem('userId')
      localStorage.removeItem('email')
      router.replace('/')
    },
    storeUser ({commit, state}, payload) {
      if(!state.idToken) {
        return
      }
      globalAxios.post('/users.json' + '?auth=' + state.idToken, payload)
        .then(res => {
          console.log(res)
          console.log(commit)
        })
        .catch(error => console.log(error))
    },
    fetchUser ({commit, state}) {
      if(!state.idToken) {
        return
      }
      const email = localStorage.getItem('email')
      globalAxios.get('/users.json' + '?auth=' + state.idToken)
        .then(res => {
          console.log(res)
          console.log(commit)
          const data = res.data
          const users = []
          for (let key in data) {
            const user = data[key]
            user.id = key
            user.email = email
            users.push(user)
           }
          commit('STORE_USER', users[0])
        })
        .catch(err => console.log(err))
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuthenticated (state) {
      return state.idToken !== null
    }
  }
})
