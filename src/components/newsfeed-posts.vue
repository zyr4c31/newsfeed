<template>
<div v-for="post in posts" :key="post.title">
    <ul>
      <li>{{ post.title }}</li>
      <li>{{ post.content }}</li>
      <button>Read</button>
      <button>Update</button>
      <button @click="deletePost">Delete</button>
    </ul>
</div>
</template>

<script lang="ts">
import IPost from '@/interfaces/ipost';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'NewsfeedPosts',
  props: {
    posts: {
      required: true,
      type: Array as PropType<IPost[]>,
    },
  },
});
</script>
