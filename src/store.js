import Vue from 'vue'
import Vuex from 'vuex'
import { giphyModule } from './modules/GiphyModule'


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
  modules: {
    giphyModule
  }
})
