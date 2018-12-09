import Vue from 'vue'
import Vuex from 'vuex'
import { fetchEpisodes } from "@/api/episodesApi";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    episodes: [],
    currentPage: 0,
    name: "",
    info: {},
    search: ""
  },
  mutations: {
    setEpisodes(state, payload) {
      state.episodes = payload;
    },
    setCurrentPage(state, payload) {
      state.currentPage = payload;
    },
    setInfo(state, payload) {
      state.info = payload;
    },
    setSearchValue(state, payload) {
      state.search = payload;
    }
  },
  actions: {
    async loadEpisodes({ commit, state }) {
      const { episodes, currentPage, search } = state;
      let newCurrentPage = currentPage + 1;

      commit('setCurrentPage', newCurrentPage);

      const response = await fetchEpisodes(newCurrentPage, search);
      const eps = search.length
        ? response.data.results
        : [...episodes, ...response.data.results];
      
      commit('setEpisodes', eps);
      commit('setInfo', response.data.info);
    },
    searchEpisodes({ commit }, params) {
      commit('setSearchValue', params);
      commit('setEpisodes', []);
      commit('setCurrentPage', 0);
      this.dispatch("loadEpisodes");
    }
  }
})