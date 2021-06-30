<template>
  <div v-for="post in posts" :key="post.title">
    <div>
      <h3 v-show="!post.isCurrentEdit">{{ post.title }}</h3>
      <input v-show="post.isCurrentEdit" v-model.lazy="post.title" />
    </div>
    <div>
      <p v-show="!post.isCurrentEdit">{{ post.content }}</p>
      <textarea v-show="post.isCurrentEdit" v-model.lazy="post.content"></textarea>
    </div>
    <button @click="updatePost(post.title)">Read/Update</button>
    <button @click="UseDeletePost(posts, post.title)">Delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import iPost from '@/interfaces/i-post';
import UseDeletePost from '@/composables/use-delete-post';
import UseFindPost from '@/composables/use-find-post';
import router from '@/router';

export default defineComponent({
  name: 'NewsfeedPosts',
  props: {
    posts: {
      required: true,
      type: Array as PropType<iPost[]>,
    },
  },
  emits: ['updatePost'],
  setup(props, { emit }) {
    const readPost = (postToRead: iPost) => {
      const post = ref(postToRead);
      router.push({ name: 'Post', params: { post: post.value.title } });
    };
    const updatePost = (title: string) => emit('updatePost', title);
    return {
      props,
      UseFindPost,
      readPost,
      updatePost,
      UseDeletePost,
    };
  },
});
</script>
