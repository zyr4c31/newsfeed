<template>
  <div>
    <h3>{{ }}</h3>
  </div>
  <div>
    <p>{{  }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NewsfeedPost',
  props: ['title'],
});
</script>
