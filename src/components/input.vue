<template>
  <form @submit.prevent>
    <div>
      <input />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Input',
  setup(props) {
    console.log(props);
  },
});
</script>
