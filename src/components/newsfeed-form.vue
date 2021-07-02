<template>
      <form @submit.prevent>
    <div>
      <input placeholder="Enter title here" v-model.lazy.trim="titleInput" />
    </div>
    <div>
      <textarea placeholder="Enter content here" v-model.lazy.trim="contentInput"></textarea>
    </div>
    <div>
      <button @click="createPost(titleInput, contentInput)">Create Post</button>
      <button @click="clearFields()">Clear fields</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import IPost from '@/interfaces/post';
import usePost from '@/composables/use-post';

export default defineComponent({
  name: 'NewsfeedForm',
  props: {
    posts: {
      required: true,
      type: Array as PropType<IPost[]>,
    },
  },
  setup() {
    const {
      titleInput, contentInput, createPost, clearFields,
    } = usePost();
    return {
      titleInput, contentInput, clearFields, createPost,
    };
  },
});
</script>
