<template>
  <form @submit.prevent="">
    <label>Title: </label>
    <input type="title" required v-model="title" />
    <br />
    <label>Content: </label>
    <textarea type="content" required v-model="content" />
    <br />
    <button>Create post</button>
    <NewsfeedPosts />
  </form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import NewsfeedPosts from './newsfeed-post.vue';

export default defineComponent({
  name: 'NewsfeedPosts',
  setup() {
    return {
      title: 'Insert a title' as string,
      content: 'Insert content' as string,
    };
  },
});
</script>

<style scoped>
input {
  width: 25%;
}

textarea {
  width: 100%;
}
</style>
