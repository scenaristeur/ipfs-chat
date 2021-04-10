import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notifications: [],
    action: null,
  },
  mutations: {
    setNotifications(state, n) {
      state.notifications = n
    },
    setAction(state, a){
      console.log(a)
      state.action = a
    },
  },
  actions: {
  },
  modules: {
  }
})
