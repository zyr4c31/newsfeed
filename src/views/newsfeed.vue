<template>
  <h1>Newsfeed</h1>
  <NewsfeedForm />
  <NewsfeedPosts :posts="posts" />
  <h1></h1>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NewsfeedForm from '@/components/newsfeed-form.vue';
import NewsfeedPosts from '@/components/newsfeed-posts.vue';

import ListOfPosts from '@/data/list-of-posts';

export default defineComponent({
  name: 'Newsfeed',
  components: { NewsfeedForm, NewsfeedPosts },
  setup() {
    const posts = ref(ListOfPosts);
    return {
      posts,
    };
  },
});
</script>
