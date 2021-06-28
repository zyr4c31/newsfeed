import iPost from '@/interfaces/i-post';

function createPost(newTitle: string, newContent: string) {
  const emptyPost: iPost = {
    title: newTitle,
    content: newContent,
    isCurrentEdit: false,
  };
  return { emptyPost };
}

export default createPost;
// const posts = ref(ListOfPosts);

// posts.value.unshift(emptyPost);
