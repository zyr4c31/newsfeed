<template>
  <h1>{{ $route.name }}</h1>
<div>
  <Newsfeed-Form :posts="posts" />
</div>
<div>
  <NewsfeedPosts :posts="posts" />
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ListOfPosts from '@/data/list-of-posts';
import NewsfeedForm from '@/components/newsfeed-form.vue';
import NewsfeedPosts from '@/components/newsfeed-posts.vue';

import UseGetPostIndex from '@/composables/use-get-post-index';
import UseDeletePost from '@/composables/use-delete-post';
import UseCreatePost from '@/composables/use-create-post';
import UseFindPost from '@/composables/use-find-post';

export default defineComponent({
  name: 'App',
  components: { NewsfeedForm, NewsfeedPosts },
  setup() {
    const posts = ref(ListOfPosts);

    function updatePost(title: string) {
      (posts.value[UseGetPostIndex(posts.value,
        title)].isCurrentEdit) = !posts.value[UseGetPostIndex(posts.value,
        title)].isCurrentEdit;
    }
    return {
      posts,
      UseGetPostIndex,
      UseCreatePost,
      updatePost,
      UseDeletePost,
      UseFindPost,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
