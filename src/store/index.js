import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLogin: false,
  token: '',
  phoneNumber: '',
  username: '',
  currentShow: ''
}

const mutations = {
  login (state) {
    state.isLogin = true
  },
  logout (state) {
    state.isLogin = false
  },
  setToken (state, payload) {
    state.token = payload
  },
  setPhoneNumber (state, payload) {
    state.phoneNumber = payload
  },
  setUsername (state, payload) {
    state.username = payload
  },
  setCurrentShow (state, payload) {
    state.currentShow = payload
  }
}

const actions = {
  login ({commit}) {
    commit('login')
  },
  logout ({commit}) {
    commit('logout')
  },
  setToken ({commit}, payload) {
    commit('setToken', payload)
  },
  setPhoneNumber ({commit}, payload) {
    commit('setPhoneNumber', payload)
  },
  setUsername ({commit}, payload) {
    commit('setUsername', payload)
  },
  setCurrentShow ({commit}, payload) {
    commit('setCurrentShow', payload)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
