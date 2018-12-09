<template>
  <div class="base-item">
    <header class="base-item__header">
      <slot name="image"/>
      <div class="base-item__header-content">
        <h3 class="base-item__title">{{ name }}</h3>
        <span class="base-item__subtitle">{{ subtitle }}</span>
      </div>
    </header>

    <slot name="content"/>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
};
</script>
