<template>
  <form @submit.prevent="">
    <div>
      <label for="">Title: </label>
      <input type="text">
    </div>

    <div>
        <label for="">Content: </label>
        <textarea></textarea>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NewsfeedForm',
});
</script>
