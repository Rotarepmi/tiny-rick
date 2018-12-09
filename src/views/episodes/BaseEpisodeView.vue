<template>
  <div>
    <h1>Episode</h1>

    <router-link to="/" class="go-back-link">
      <arrow-icon/>Search results
    </router-link>

    <div class="episode__content">
      <div class="episode__left-col">
        <base-episode-item v-if="episode" :episode="episode" extra/>

        <h2>Characters</h2>

        <div class="characters-list">
          <base-item
            v-for="character in (isShowingMore ? characters : characters.slice(0, 5))"
            :key="character.id"
            :image="character.image"
            :name="character.name"
            :subtitle="`${character.species} from ${character.origin.name}`"
            :content="character.content"
          />
          <div class="link-container">
            <button class="primary-link is-big" @click.prevent="showMore()">
              <span v-if="isShowingMore">Show less</span>
              <span v-else>Show more</span>
            </button>
          </div>
        </div>
      </div>

      <div class="episode__right-col">
        <h2>Comments</h2>
        <base-comments-wrapper :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from "@/assets/icon-arrow-left.svg";
import axios from "axios";
import BaseEpisodeItem from "@/components/episodes/BaseEpisodeItem";
import BaseItem from "@/components/BaseItem";
import BaseCommentsWrapper from "@/components/comments/BaseCommentsWrapper";
import { fetchEpisode } from "@/api/episodesApi";
import { fetchComments } from "@/api/commentsApi";

export default {
  name: "BaseEpisodeView",
  components: {
    ArrowIcon,
    BaseEpisodeItem,
    BaseCommentsWrapper,
    BaseItem
  },
  data() {
    return {
      episode: null,
      characters: [],
      comments: [],
      isShowingMore: false
    };
  },
  mounted() {
    this.loadEpisode();
  },
  methods: {
    async loadEpisode() {
      const response = await fetchEpisode(this.$route.params.id);
      this.episode = response.data;
      response.data.characters.forEach(char => this.loadCharacter(char));
      this.loadComments();
    },
    async loadCharacter(charLink) {
      const response = await axios.get(charLink);
      this.characters.push(response.data);
    },
    async loadComments() {
      const response = await fetchComments(this.$route.params.id);
      this.comments = response.data.results;
    },
    showMore() {
      this.isShowingMore = !this.isShowingMore;
    }
  }
};
</script>