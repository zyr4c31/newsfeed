<template>
  <h1>Newsfeed</h1>
<div>
  <Newsfeed-Form :posts="posts" />
</div>
<div>
  <NewsfeedPosts :posts="posts" />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NewsfeedForm from '@/components/newsfeed-form.vue';
import NewsfeedPosts from '@/components/newsfeed-posts.vue';
import usePost from '@/composables/use-post';

export default defineComponent({
  name: 'App',
  components: { NewsfeedForm, NewsfeedPosts },
  setup() {
    const { posts } = usePost();
    return { posts };
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
