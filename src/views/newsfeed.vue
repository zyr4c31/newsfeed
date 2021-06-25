<template>
  <Header :header="header" />
  <form @submit.prevent="">
    <Input :formType="formType" :title="posts" v-model="posts" />
    <TextArea :columns="columns" :rows="rows" :content="posts" />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from '@/components/header.vue';
import Input from '@/components/input.vue';
import TextArea from '@/components/text-area.vue';

export default defineComponent({
  name: 'Newsfeed',
  components: { Header, Input, TextArea },
  setup() {
    const posts = ref([
      { title: 'This', content: 'This' },
      { title: 'This', content: 'This' },
    ]);
    return {
      posts,
    };
  },
  data() {
    return {
      header: 'Newsfeed',
      formType: 'text',
      columns: 30,
      rows: 5,
    };
  },
});
</script>
