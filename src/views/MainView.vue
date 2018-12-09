<template>
  <div>
    <the-header/>
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";

export default {
  components: {
    TheHeader
  }
};
</script>