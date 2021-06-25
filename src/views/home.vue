<template>
  <Header :header="header" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/header.vue';

export default defineComponent({
  header: 'Home',
  components: { Header },
  setup() {
    return {
      header: 'Zyr Acel Reyes' as string,
    };
  },
});
</script>
