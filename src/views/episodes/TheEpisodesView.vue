<template>
  <section>
    <div v-infinite-scroll="loadEpisodes" infinite-scroll-disabled="isBusy">
      <h1 class="episodes__title">Episodes</h1>

      <div class="episodes__search">
        <search-icon/>
        <input v-model="search" @input="searchEpisodes" type="text" placeholder="Search">
      </div>

      <the-episodes-list v-if="episodes.length" :episodes="episodes"/>
      <load-icon class="episodes__loader-icon" v-else-if="isBusy"/>
      <load-icon class="episodes__loader-icon" v-if="!isBusy"/>
    </div>
  </section>
</template>

<script>
import SearchIcon from "@/assets/icon-search.svg";
import LoadIcon from "@/assets/icon-loading.svg";
import BaseEpisodeItem from "@/components/episodes/BaseEpisodeItem";
import TheEpisodesList from "@/components/episodes/TheEpisodesList";
import { fetchEpisodes } from "@/api/episodesApi";
import debounce from "lodash.debounce";

export default {
  name: "TheEpisodesView",
  data() {
    return {
      episodes: [],
      currentPage: 0,
      name: "",
      info: {},
      search: ""
    };
  },
  components: {
    SearchIcon,
    LoadIcon,
    BaseEpisodeItem,
    TheEpisodesList
  },
  mounted() {},
  methods: {
    loadEpisodes: debounce(function() {
      this.currentPage += 1;

      fetchEpisodes(this.currentPage, this.search)
        .then(response => {
          this.episodes = !!this.search.length
            ? response.data.results
            : [...this.episodes, ...response.data.results];
          this.info = response.data.info;
        })
        .catch(err => {
          this.episodes = [];
          console.log(err);
        });
    }, 400),
    searchEpisodes() {
      this.episodes = [];
      this.currentPage = 0;
      this.loadEpisodes();
    }
  },
  computed: {
    isBusy() {
      return this.currentPage >= this.info.pages;
    }
  }
};
</script>

<style>
.episodes__loader-icon {
  display: block;
  width: 50px;
  height: 50px;
  margin: 0 auto 50px auto;
}
</style>

