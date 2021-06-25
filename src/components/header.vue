<template>
    <h1>{{ header }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  header: 'header',
  props: ['header'],
});
</script>
