<template>
  <header class="header">
    <a href="/" class="header__logo">
      <logo/>
    </a>
    
    <button class="header__nav-trigger">
      <icon-menu/>
    </button>

    <nav class="header__nav">
      <!-- .is-visible -->
      <a class="header__nav-link" href="/">Episodes</a>
      <a class="header__nav-link" href="/quiz">Quiz</a>
    </nav>
  </header>
</template>

<script>
import Logo from "@/assets/logo.svg";
import IconMenu from "@/assets/icon-menu.svg";

export default {
  name: "TheHeader",
  components: {
    Logo,
    IconMenu
  }
};
</script>
