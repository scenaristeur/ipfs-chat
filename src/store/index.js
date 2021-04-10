import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notifications: []
  },
  mutations: {
    setNotifications(state, n) {
      console.log(n)
      state.notifications = n
    }
  },
  actions: {
  },
  modules: {
  }
})
