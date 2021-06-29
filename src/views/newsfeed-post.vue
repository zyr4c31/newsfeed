<template>
  <div>
    <h1>{{ $route.name }}</h1>
  </div>
  <div>
    <h3>{{ post.title }}</h3>
  </div>
  <div>
    <p>{{ post.content }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NewsfeedPost',
  props: ['post'],
});
</script>
