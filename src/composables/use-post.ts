import listOfPosts from '@/data/list-of-posts';
import IPost from '@/interfaces/post';
import router from '@/router';
import { ref } from 'vue';

export default function usePost() {
  const posts = ref(listOfPosts);
  const titleInput = ref('');
  const contentInput = ref('');
  const isNotEditing = ref(true);
  const goBack = () => router.back();

  const stringToPost = (sTitle: string, sContent: string): IPost => {
    const post: IPost = {
      title: sTitle,
      content: sContent,
    };
    return post;
  };

  const findPostIndex = (title: string):
  number => posts.value.findIndex((post) => post.title === title);

  const createPost = (title: string, content: string): void => {
    if (title === '' || content === '') {
      alert('Post cannot be empty');
    } else if (findPostIndex(title) > -1) {
      alert('Post already exists');
    } else {
      posts.value.unshift(stringToPost(title, content));
    }
  };

  const clearFields = () => {
    titleInput.value = '';
    contentInput.value = '';
  };

  const readPost = (title: string) => {
    const index = findPostIndex(title);
    router.push({ name: 'Post', params: { index } });
  };

  const deletePost = (post: IPost) => {
    posts.value.splice(posts.value.indexOf(post), 1);
  };

  const updatePost = (post: IPost, index: number) => {
    if (post.title === '' || post.title === '') {
      alert('Post cannot be empty');
    } else {
      posts.value.splice(index, 1, stringToPost(post.title, post.content));
    }
    isNotEditing.value = !isNotEditing.value;
  };
  return {
    posts,
    titleInput,
    contentInput,
    isNotEditing,
    stringToPost,
    createPost,
    clearFields,
    readPost,
    goBack,
    updatePost,
    findPostIndex,
    deletePost,
  };
}
