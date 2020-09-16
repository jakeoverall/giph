import Vue from 'vue'
import Vuex from 'vuex'
import { giphyService } from './services/GiphyService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gimage: {}
  },
  mutations: {
    setActiveGimage(state, gimage) {
      state.gimage = gimage
    }
  },
  actions: {
    async getRandomGif({ commit }, query) {
      commit('setActiveGimage', {})
      let gimage = await giphyService.getRandomGif(query)
      commit('setActiveGimage', gimage)
    }
  },
  modules: {
  }
})
