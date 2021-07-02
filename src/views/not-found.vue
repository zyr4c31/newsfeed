<template>
  <h1>404</h1>
  <h3></h3>
  <p>Redirecting in {{ redirectTime }} seconds.</p>
</template>

<script lang="ts">
import usePost from '@/composables/use-post';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'NotFound',
  setup() {
    const { redirectTime, countdown, goBack } = usePost();
    onMounted(() => {
      setInterval(countdown, 1000);
      setTimeout(goBack, 5000);
    });
    return { redirectTime };
  },
});
</script>
