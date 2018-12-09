import Vue from 'vue'
import Router from 'vue-router'
import TheEpisodesView from '@/views/episodes/TheEpisodesView';
import BaseEpisodeView from '@/views/episodes/BaseEpisodeView';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: TheEpisodesView },
    { path: '/episode/:id', component: BaseEpisodeView }
  ],
  mode: 'history'
});