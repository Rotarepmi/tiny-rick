<template>
  <div>
    <the-header/>
    <main class="main">
      <the-episodes-view/>
      <!-- <base-episode-view/> -->
    </main>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
import TheEpisodesView from "./episodes/TheEpisodesView";
import BaseEpisodeView from "./episodes/BaseEpisodeView";

export default {
  components: {
    TheHeader,
    TheEpisodesView,
    BaseEpisodeView
  }
};
</script>