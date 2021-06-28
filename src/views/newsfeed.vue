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
      <button @click="createPost(titleInput, contentInput)">Create Post</button>
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
      <button @click="deletePost(post.title)">Delete {{ getIndex(post.title) }}</button>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import iPost from '@/interfaces/i-post';
import ListOfPosts from '@/data/list-of-posts';
import getIndex from '@/composables/getIndex';

export default defineComponent({
  name: 'App',
  setup() {
    const posts = ref(ListOfPosts);
    const titleInput = '';
    const contentInput = '';

    function createPost(newTitle: string, newContent: string) {
      if (getIndex(newTitle) === -1) {
        const emptyPost: iPost = {
          title: newTitle,
          content: newContent,
          isCurrentEdit: false,
        };
        posts.value.unshift(emptyPost);
      } else {
        alert('Please input a different title');
      }
    }

    function updatePost(title: string) {
      (posts.value[getIndex(title)].isCurrentEdit) = !posts.value[getIndex(title)].isCurrentEdit;
    }

    function deletePost(title: string) {
      posts.value.splice(getIndex(title), 1);
    }
    return {
      posts,
      titleInput,
      contentInput,
      getIndex,
      createPost,
      updatePost,
      deletePost,
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
