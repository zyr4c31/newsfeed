<template>
    <div>
        <h3 v-show="isNotEditing">{{ post.title }}</h3>
        <input v-show="!isNotEditing" v-model.lazy.trim="post.title">
    </div>
    <div>
      <p v-show="isNotEditing">{{ post.content }}</p>
      <textarea v-show="!isNotEditing" v-model.lazy.trim="post.content"></textarea>
    </div>
    <div>
      <button v-show="isNotEditing" @click="goBack">Back</button>
      <button @click="updatePost(post, index)">Update</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import usePost from '@/composables/use-post';

export default defineComponent({
  name: 'Post',
  props: {
    index: {
      required: true,
      type: Number,
    },
  },
  setup(props) {
    const {
      posts, isNotEditing, goBack, updatePost,
    } = usePost();
    const post = (posts.value[props.index]);
    return {
      post, isNotEditing, goBack, updatePost,
    };
  },
});
</script>
