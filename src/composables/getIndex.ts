import ListOfPosts from '@/data/list-of-posts';
import { ref } from 'vue';

function getIndex(title: string) {
  const posts = ref(ListOfPosts);
  const indexOfPost = posts.value.findIndex((post) => post.title === title);
  return indexOfPost;
}

export default getIndex;
