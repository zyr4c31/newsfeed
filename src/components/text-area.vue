<template>
  <div>
    <label>Content: </label>
    <textarea :cols="columns" :rows="rows"></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextArea',
  props: {
    columns: Number,
    rows: Number,
  },
});
</script>
