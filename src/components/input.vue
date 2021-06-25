<template>
  <form @submit.prevent>
    <div>
      <label for="">Title: </label>
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
    return {
      props,
    };
  },
});
</script>
