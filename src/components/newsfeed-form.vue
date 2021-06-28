<template>
  <form @submit.prevent="">
    <div>
      <label>Title: </label>
      <input v-model="titleInput">
    </div>

    <div>
        <label>Content: </label>
        <textarea v-model="contentInput"></textarea>
    </div>
    <button @click="createPost(titleInput, contentInput)">Create Post</button>
  </form>
</template>

<script lang="ts">
import IPost from '@/interfaces/ipost';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'App',
  props: {
    posts: {
      required: true,
      type: Array as PropType<IPost[]>,
    },
  },
  setup(props) {
    const post = ref(props);

    function createPost(titleInput: string, contentInput: string): void {
      const emptyPost: IPost = {
        id: post.value.posts.length,
        title: titleInput,
        content: contentInput,
      };
      post.value.posts.push(emptyPost);
    }
    return {
      post, createPost,
    };
  },
});
</script>
