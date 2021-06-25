<template>
  <Header :header="header" />
  <form @submit.prevent="">
    <Input :formType="formType" :titleText="titleText" />
    <TextArea :columns="columns" :rows="rows" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/header.vue';
import Input from '@/components/input.vue';
import TextArea from '@/components/text-area.vue';

export default defineComponent({
  name: 'Newsfeed',
  components: { Header, Input, TextArea },
  setup() {
    return {
      header: 'Newsfeed' as string,
      formType: 'text' as string,
      titleText: 'Enter title' as string,
      contentText: 'Enter content' as string,
      columns: 30 as number,
      rows: 5 as number,
      posts: [
        { title: 'Sample title', content: 'Sample content' },
      ],
    };
  },
});
</script>
