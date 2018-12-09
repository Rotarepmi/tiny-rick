<template>
  <div class="base-item">
    <header class="base-item__header">
      <img v-if="image" :src="image" class="base-item__img">
      <div class="base-item__header-content">
        <h3 class="base-item__title">{{ name }}</h3>
        <span class="base-item__subtitle">{{ subtitle }}</span>
      </div>
    </header>

    <p v-if="content" class="base-item__content">{{ content }}}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    image: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    content: {
      type: String,
      default: ""
    }
  }
};
</script>
