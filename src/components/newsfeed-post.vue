<template>
  <div class="post">
    <ul>
      <li v-for="post in post" :key="post.id">
        <h2>{{ post.title }}</h2>
        <h3>{{ post.content}}</h3>
        <button>Read</button>
        <button>Update</button>
        <button>Delete</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import newsfeedFormVue from './newsfeed-form.vue';
import Posts from './posts';

export default defineComponent({
  name: 'Newsposts',
  setup() {
    const post = ref<Posts[]>([
      { title: 'This is a title', content: 'This is content', id: 1 },
      { title: 'This is another title', content: 'lorem', id: 2 },
      { title: 'This is a title', content: 'lorem', id: 3 },
    ]);
    return { post };
  },
});
</script>
