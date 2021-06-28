<template>
<div v-for="post in posts" :key="post.id">
    <ul>
      <li>{{ post.title }}</li>
      <li>{{ post.content }}</li>
      <button @click="findPost(post.title)">Delete {{ post.title }}</button>
    </ul>
</div>
</template>

<script lang="ts">
import IPost from '@/interfaces/ipost';
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'NewsfeedPosts',
  props: {
    posts: {
      required: true,
      type: Array as PropType<IPost[]>,
    },
  },
  setup(props) {
    const post = ref(props);

    function findPost(title: string) {
      let findPost: IPost = {
        id: 0,
        title: ''
        content: ''
      }
      return post.value.posts.findIndex
    }
    return {
      post, findPost,    };
  },
});
</script>
