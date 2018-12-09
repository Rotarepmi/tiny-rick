<template>
  <ul class="episodes__list">
    <li v-for="episode in episodes" :key="episode.id">
      <base-episode-item :episode="episode"/>
    </li>
  </ul>
</template>

<script>
import BaseEpisodeItem from "./BaseEpisodeItem";

export default {
  props: {
    episodes: {
      type: Array,
      required: true
    }
  },
  components: {
    BaseEpisodeItem
  }
};
</script>

