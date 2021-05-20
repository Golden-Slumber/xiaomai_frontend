import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLogin: false,
  token: '',
  phoneNumber: '',
  username: '',
  currentShow: '',
  currentShowName: '',
  currentShowVenue: '',
  currentPrice: 0,
  currentAmount: 0,
  currentSession: '',
  currentTicket: '',
  currentImage: ''
}

const mutations = {
  login (state) {
    state.isLogin = true
  },
  logout (state) {
    state.isLogin = false
    state.token = ''
    state.phoneNumber = ''
    state.username = ''
    state.currentShow = ''
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
  },
  setCurrentShowName (state, payload) {
    state.currentShowName = payload
  },
  setCurrentShowVenue (state, payload) {
    state.currentShowVenue = payload
  },
  setCurrentPrice (state, payload) {
    state.currentPrice = payload
  },
  setCurrentAmount (state, payload) {
    state.currentAmount = payload
  },
  setCurrentSession (state, payload) {
    state.currentSession = payload
  },
  setCurrentTicket (state, payload) {
    state.currentTicket = payload
  },
  setCurrentImage (state, payload) {
    state.currentImage = payload
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
  },
  setCurrentShowName ({commit}, payload) {
    commit('setCurrentShowName', payload)
  },
  setCurrentShowVenue ({commit}, payload) {
    commit('setCurrentShowVenue', payload)
  },
  setCurrentPrice ({commit}, payload) {
    commit('setCurrentPrice', payload)
  },
  setCurrentAmount ({commit}, payload) {
    commit('setCurrentAmount', payload)
  },
  setCurrentSession ({commit}, payload) {
    commit('setCurrentSession', payload)
  },
  setCurrentTicket ({commit}, payload) {
    commit('setCurrentTicket', payload)
  },
  setCurrentImage ({commit}, payload) {
    commit('setCurrentImage', payload)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
