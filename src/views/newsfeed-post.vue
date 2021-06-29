<template>
  <div>
    <ul>
      <div>
        <h3>{{ post.title }}</h3>
      </div>
      <div>
        <p>{{ post.content }}</p>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NewsfeedPost',
  props: ['post'],
});
</script>
