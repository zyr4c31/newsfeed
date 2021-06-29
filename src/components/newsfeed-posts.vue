<template>
  <div v-for="post in posts" :key="post.title">
    <ul>
      <div>
        <h3 v-show="!post.isCurrentEdit">{{ post.title }}</h3>
        <input v-show="post.isCurrentEdit" v-model.lazy="post.title" />
      </div>
      <div>
        <p v-show="!post.isCurrentEdit">{{ post.content }}</p>
        <textarea v-show="post.isCurrentEdit" v-model.lazy="post.content"></textarea>
      </div>
      <button @click="singlePost(posts, post.title)">Read</button>
      <button @click="UseDeletePost(posts, post.title)">Delete</button>
      <button @click="useLogFunction(posts, post.title)">log</button>
    </ul>
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
  components: {},
  props: {
    posts: {
      required: true,
      type: Array as PropType<iPost[]>,
    },
  },
  emits: ['UseStorePost'],
  setup(props, { emit }) {
    const singlePost = (posts: iPost[], title: string) => UseFindPost(posts, title);
    const updatePost = (posts: iPost[], title: string) => {
      emit('UseStorePost', [posts, title]);
    };

    return {
      props,
      singlePost,
      UseDeletePost,
      updatePost,
      useLogFunction,
      UseFindPost,
    };
  },
});
</script>
