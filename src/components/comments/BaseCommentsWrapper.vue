<template>
  <section class="comments">
    <form @submit.prevent="onSubmit" class="comments__form">
      <textarea v-model="content" placeholder="Your comment here"></textarea>
      <div class="comments__bar">
        <input v-model="author" type="text" placeholder="Username">
        <button type="submit">
          <icon-add/>
        </button>
      </div>
    </form>

    <base-item
      v-for="comment in comments"
      :key="comment.id"
      :name="comment.author"
      :subtitle="computeData(comment.created)"
      :content="comment.content"
    />
  </section>
</template>

<script>
import distanceInWords from "date-fns/distance_in_words";
import IconAdd from "@/assets/icon-add.svg";
import { postComment } from "@/api/commentsApi";
import BaseItem from "@/components/BaseItem";

export default {
  components: {
    IconAdd,
    BaseItem
  },
  data() {
    return {
      content: "",
      author: ""
    };
  },
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  methods: {
    async onSubmit() {
      try {
        const response = await postComment(this.$route.params.id, {
          author: this.author,
          content: this.content
        });
        this.comments.unshift({
          author: this.author,
          content: this.content
        });
      } catch (err) {
        console.log(err);
      }
    },
    computeData(data) {
      return distanceInWords(new Date(), data);
    }
  }
};
</script>
