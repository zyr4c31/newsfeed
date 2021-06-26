<template>
<div>
    <p>{{ }}</p>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'NewsfeedPosts',
  setup(props) {
    const posts = ref(props);
    console.log('in child', posts);
    return {
      posts,
    };
  },
});
</script>
