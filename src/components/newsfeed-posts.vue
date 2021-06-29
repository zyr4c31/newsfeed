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
    <button @click="storePost(posts, post.title)">Read</button>
    <button @click="UseDeletePost(posts, post.title)">Delete</button>
    <button @click="useLogFunction(posts, post.title)">log</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import iPost from '@/interfaces/i-post';
import UseDeletePost from '@/composables/use-delete-post';
import useLogFunction from '@/composables/use-log-function';
import UseFindPost from '@/composables/use-find-post';

export default defineComponent({
  name: 'NewsfeedPosts',
  props: {
    posts: {
      required: true,
      type: Array as PropType<iPost[]>,
    },
  },
  emits: ['UseStorePost'],
  setup(props, { emit }) {
    let post: iPost | undefined;
    function storePost(posts: iPost[], title: string) {
      post = UseFindPost(posts, title);
    }

    const updatePost = (posts: iPost[], title: string) => {
      emit('UseStorePost', [posts, title]);
    };
    return {
      props,
      post,
      storePost,
      UseDeletePost,
      updatePost,
      useLogFunction,
      UseFindPost,
    };
  },
});
</script>
