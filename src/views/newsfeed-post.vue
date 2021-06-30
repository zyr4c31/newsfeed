<template>
  <div>
    <h3>{{ $route.params.title }}</h3>
  </div>
  <div>
    <p>{{ $route }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NewsfeedPost',
  props: ['post'],
});
</script>
