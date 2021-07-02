<template>
  <div v-for="post in posts" :key="post.title">
    <div>
      <h3>{{ post.title }}</h3>
    </div>
    <div>
      <p>{{ post.content }}</p>
 </div>
    <button @click="readPost(post.title)">Read</button>
    <button @click="deletePost(post)">Delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import IPost from '@/interfaces/post';
import usePost from '@/composables/use-post';

export default defineComponent({
  name: 'NewsfeedPosts',
  props: {
    posts: {
      required: true,
      type: Array as PropType<IPost[]>,
    },
  },
  setup() {
    const { readPost, findPostIndex, deletePost } = usePost();
    return { readPost, deletePost, findPostIndex };
  },
});
</script>
