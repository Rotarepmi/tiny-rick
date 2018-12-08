<template>
  <section>
    <div v-infinite-scroll="loadEpisodes" infinite-scroll-disabled="isBusy">
      <h1 class="episodes__title">Episodes</h1>

      <div class="episodes__search">
        <search-icon/>
        <input v-model="search" @input="searchEpisodes" type="text" placeholder="Search">
      </div>

      <ul class="episodes__list">
        <li v-for="episode in episodes" :key="episode.id">
          <base-episode-item :episode="episode"/>
        </li>
      </ul>

      <div class="episodes__loader" v-if="!isBusy">Loading more</div>
    </div>
  </section>
</template>

<script>
import SearchIcon from "@/assets/icon-search.svg";
import BaseEpisodeItem from "@/components/episodes/BaseEpisodeItem";
import fetchEpisodes from "@/api/fetchEpisodes";
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
    BaseEpisodeItem
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
