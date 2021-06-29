<template>
      <form @submit.prevent>
    <div>
      <label>Title: </label>
      <input v-model.lazy="titleInput" />
    </div>

    <div>
      <label>Content: </label>
      <textarea v-model.lazy="contentInput"></textarea>
    </div>
    <div>
      <button @click="UseCreatePost(posts, titleInput, contentInput)">Create Post</button>
    </div>
  </form>
</template>

<script lang="ts">
import iPost from '@/interfaces/i-post';
import { defineComponent, PropType } from 'vue';
import UseCreatePost from '@/composables/use-create-post';

export default defineComponent({
  name: 'NewsfeedForm',
  props: {
    posts: {
      required: true,
      type: Array as PropType<iPost[]>,
    },
  },
  setup() {
    const titleInput = '';
    const contentInput = '';

    return {
      titleInput, contentInput, UseCreatePost,
    };
  },
});
</script>
