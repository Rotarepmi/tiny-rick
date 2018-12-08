<template>
  <div>
    <h1>Episode</h1>

    <a href="/" class="go-back-link">
      <arrow-icon/>Search results
    </a>

    <div class="episode__content">
      <div class="episode__left-col">
        <base-episode-item extra/>

        <h2>Characters</h2>

        <div class="characters-list">
          <!-- Character Items -->
          <div class="link-container">
            <button class="primary-link is-big">Show more</button>
          </div>
        </div>
      </div>

      <div class="episode__right-col">
        <h2>Comments</h2>
        <!-- Comments -->
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from "@/assets/icon-arrow-left.svg";
import BaseEpisodeItem from "@/components/episodes/BaseEpisodeItem";

export default {
  name: "BaseEpisodeView",
  components: {
    ArrowIcon,
    BaseEpisodeItem
  }
};
</script>