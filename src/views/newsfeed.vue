<template>
  <h1>Newsfeed</h1>
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
  <div v-for="post in posts" :key="post.title">
    <ul>
      <div>
      <h3 v-show="!post.isCurrentEdit">{{ post.title }}</h3>
      <input v-show="post.isCurrentEdit" v-model.lazy="post.title">
      </div>
      <div>
      <p v-show="!post.isCurrentEdit">{{ post.content }}</p>
      <textarea v-show="post.isCurrentEdit" v-model.lazy="post.content"></textarea>
      </div>
      <button @click="updatePost(post.title)">Read/Update</button>
      <button @click="UseDeletePost(posts, post.title)">
        Delete</button>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ListOfPosts from '@/data/list-of-posts';
import UseGetPostIndex from '@/composables/use-get-post-index';
import UseDeletePost from '@/composables/use-delete-post';
import UseCreatePost from '@/composables/use-create-post';

export default defineComponent({
  name: 'App',
  setup() {
    const posts = ref(ListOfPosts);
    const titleInput = '';
    const contentInput = '';

    function updatePost(title: string) {
      (posts.value[UseGetPostIndex(posts.value,
        title)].isCurrentEdit) = !posts.value[UseGetPostIndex(posts.value,
        title)].isCurrentEdit;
    }
    return {
      posts,
      titleInput,
      contentInput,
      UseGetPostIndex,
      UseCreatePost,
      updatePost,
      UseDeletePost,
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
  margin-top: 60px;
}
</style>
