<template>
  <router-link :to="{path: '/episode/'+episode.id, params: {id: episode.id}}" exact>
    <div class="episode-item">
      <h3 class="episode-item__num">Episode {{ seasonEpisode.episode }}</h3>
      <h2 class="episode-item__name">{{ episode.name }}</h2>
      <span class="episode-item__season-badge">Season {{ seasonEpisode.season }}</span>

      <!-- optional info -->
      <div class="episode-info" v-if="extra">
        <span class="episode-info__label">Air date</span>
        <span class="episode-info__value">{{ episode.air_date }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BaseEpisodeItem",
  props: {
    extra: {
      type: Boolean
    },
    episode: {
      type: Object,
      required: true
    }
  },
  computed: {
    seasonEpisode() {
      const splited = this.episode.episode.slice(1).split(/E|e/);
      return { season: Number(splited[0]), episode: Number(splited[1]) };
    },
    episodeId() {
      return `/${this.episode.id}`;
    }
  }
};
</script>

